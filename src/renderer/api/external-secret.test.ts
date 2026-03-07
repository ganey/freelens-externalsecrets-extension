import { ExternalSecret, externalSecretsApi } from "./external-secret";

describe("ExternalSecret", () => {
  const mockData = {
    metadata: {
      name: "my-es",
      namespace: "default",
      labels: {
        "managed-by": "external-secrets",
      },
    },
    spec: {
      secretStoreRef: {
        name: "my-store",
        kind: "SecretStore",
      },
      target: {
        name: "my-secret",
      },
    },
    status: {
      conditions: [
        {
          type: "Ready",
          status: "True",
          message: "Secret is synced",
          reason: "SecretSynced",
          lastTransitionTime: "2026-03-06T12:00:00Z",
        },
      ],
    },
  };

  it("should return correct name and namespace", () => {
    // @ts-ignore
    const es = new ExternalSecret(mockData);
    expect(es.getName()).toBe("my-es");
    expect(es.getNs()).toBe("default");
  });

  it("should return the correct store reference", () => {
    // @ts-ignore
    const es = new ExternalSecret(mockData);
    expect(es.getStoreRef()).toEqual({
      name: "my-store",
      kind: "SecretStore",
    });
  });

  it("should return the correct status when Ready=True", () => {
    // @ts-ignore
    const es = new ExternalSecret(mockData);
    expect(es.getStatus()).toBe("True");
    expect(es.getStatusMessage()).toBe("Secret is synced");
  });

  it("should return Unknown status if no conditions exist", () => {
    // @ts-ignore
    const es = new ExternalSecret({
      ...mockData,
      status: {},
    });
    expect(es.getStatus()).toBe("Unknown");
    expect(es.getStatusMessage()).toBe("");
  });

  it("should call patch with the force-sync annotation when forceSync is called", async () => {
    // @ts-ignore
    const es = new ExternalSecret(mockData);
    const patchSpy = jest.spyOn(externalSecretsApi, "patch");
    
    await es.forceSync();
    
    expect(patchSpy).toHaveBeenCalledWith(
      { name: "my-es", namespace: "default" },
      expect.objectContaining({
        metadata: {
          annotations: {
            "external-secrets.io/force-sync": expect.any(String),
          },
        },
      }),
      "merge"
    );
  });
});
