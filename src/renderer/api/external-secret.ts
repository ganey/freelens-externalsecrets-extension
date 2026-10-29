import { Renderer } from "@freelensapp/extensions";
import { ExternalSecret as IExternalSecret } from "../common/eso-types";
import { lazy } from "./utils";

export class ExternalSecret extends Renderer.K8sApi.LensExtensionKubeObject<Renderer.K8sApi.KubeObjectMetadata, IExternalSecret["status"], IExternalSecret["spec"]> implements IExternalSecret {
  static readonly kind = "ExternalSecret";
  static readonly namespaced = true;
  static readonly apiBase = "/apis/external-secrets.io/v1/externalsecrets";

  static readonly crd = {
    apiVersions: ["external-secrets.io/v1", "external-secrets.io/v1beta1"],
    plural: "externalsecrets",
    singular: "externalsecret",
    shortNames: ["es"],
    title: "External Secrets",
  };

  getStoreRef() {
    return this.spec.secretStoreRef;
  }

  getStatus() {
    if (!this.status?.conditions) return "Unknown";
    const readyCondition = this.status.conditions.find(c => c.type === "Ready");
    return readyCondition ? readyCondition.status : "Unknown";
  }

  getStatusMessage() {
    if (!this.status?.conditions) return "";
    const readyCondition = this.status.conditions.find(c => c.type === "Ready");
    return readyCondition ? readyCondition.message : "";
  }

  async forceSync() {
    return externalSecretsApi.patch(
      { name: this.getName(), namespace: this.getNs() },
      {
        metadata: {
          annotations: {
            "external-secrets.io/force-sync": new Date().toISOString(),
          },
        },
      },
      "merge"
    );
  }
}

export class ExternalSecretApi extends Renderer.K8sApi.KubeApi<ExternalSecret> {}

export const externalSecretsApi: ExternalSecretApi = lazy(() => new ExternalSecretApi({
  objectConstructor: ExternalSecret,
  checkPreferredVersion: true,
  fallbackApiBases: ["/apis/external-secrets.io/v1beta1/externalsecrets"],
}));
