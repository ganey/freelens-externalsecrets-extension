import { Renderer } from "@freelensapp/extensions";
import { SecretStore as ISecretStore, ClusterSecretStore as IClusterSecretStore } from "../common/eso-types";
import { lazy } from "./utils";

export class SecretStore extends Renderer.K8sApi.LensExtensionKubeObject<Renderer.K8sApi.KubeObjectMetadata, ISecretStore["status"], ISecretStore["spec"]> implements ISecretStore {
  static readonly kind = "SecretStore";
  static readonly namespaced = true;
  static readonly apiBase = "/apis/external-secrets.io/v1/secretstores";

  static readonly crd = {
    apiVersions: ["external-secrets.io/v1", "external-secrets.io/v1beta1"],
    plural: "secretstores",
    singular: "secretstore",
    shortNames: ["ss"],
    title: "Secret Stores",
  };

  getProvider() {
    const providers = Object.keys(this.spec?.provider || {});
    return providers.length > 0 ? providers[0] : "Unknown";
  }

  getStatus() {
    if (!this.status?.conditions) return "Unknown";
    const readyCondition = this.status.conditions.find(c => c.type === "Ready");
    return readyCondition ? readyCondition.status : "Unknown";
  }
}

export class ClusterSecretStore extends Renderer.K8sApi.LensExtensionKubeObject<Renderer.K8sApi.KubeObjectMetadata, IClusterSecretStore["status"], IClusterSecretStore["spec"]> implements IClusterSecretStore {
  static readonly kind = "ClusterSecretStore";
  static readonly namespaced = false;
  static readonly apiBase = "/apis/external-secrets.io/v1/clustersecretstores";

  static readonly crd = {
    apiVersions: ["external-secrets.io/v1", "external-secrets.io/v1beta1"],
    plural: "clustersecretstores",
    singular: "clustersecretstore",
    shortNames: ["css"],
    title: "Cluster Secret Stores",
  };

  getProvider() {
    const providers = Object.keys(this.spec?.provider || {});
    return providers.length > 0 ? providers[0] : "Unknown";
  }

  getStatus() {
    if (!this.status?.conditions) return "Unknown";
    const readyCondition = this.status.conditions.find(c => c.type === "Ready");
    return readyCondition ? readyCondition.status : "Unknown";
  }
}

export class SecretStoreApi extends Renderer.K8sApi.KubeApi<SecretStore> {}
export const secretStoresApi: SecretStoreApi = lazy(() => new SecretStoreApi({
  objectConstructor: SecretStore,
  checkPreferredVersion: true,
  fallbackApiBases: ["/apis/external-secrets.io/v1beta1/secretstores"],
}));

export class ClusterSecretStoreApi extends Renderer.K8sApi.KubeApi<ClusterSecretStore> {}
export const clusterSecretStoresApi: ClusterSecretStoreApi = lazy(() => new ClusterSecretStoreApi({
  objectConstructor: ClusterSecretStore,
  checkPreferredVersion: true,
  fallbackApiBases: ["/apis/external-secrets.io/v1beta1/clustersecretstores"],
}));
