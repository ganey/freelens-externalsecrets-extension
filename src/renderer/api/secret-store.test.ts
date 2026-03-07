import { Renderer } from "@freelensapp/extensions"; import { SecretStore } from "./secret-store";

describe("SecretStore", () => {
  const mockData = {
    metadata: {
      name: "my-store",
      namespace: "default",
    },
    spec: {
      provider: {
        aws: {
          region: "us-east-1",
          service: "SecretsManager",
        },
      },
    },
    status: {
      conditions: [
        {
          type: "Ready",
          status: "True",
          message: "SecretStore is ready",
          reason: "Valid",
          lastTransitionTime: "2026-03-06T12:00:00Z",
        },
      ],
    },
  };

  it("should return the correct provider name", () => {
    // @ts-ignore
    const store = new SecretStore(mockData);
    expect(store.getProvider()).toBe("aws");
  });

  it("should return Unknown provider if no provider key exists", () => {
    // @ts-ignore
    const store = new SecretStore({
      ...mockData,
      spec: { provider: {} },
    });
    expect(store.getProvider()).toBe("Unknown");
  });

  it("should return the correct status when Ready=True", () => {
    // @ts-ignore
    const store = new SecretStore(mockData);
    expect(store.getStatus()).toBe("True");
  });
});
