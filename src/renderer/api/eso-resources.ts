import { Renderer } from "@freelensapp/extensions";
import { ClusterExternalSecret as IClusterExternalSecret, PushSecret as IPushSecret } from "../common/eso-types";

export class ClusterExternalSecret extends Renderer.K8sApi.LensExtensionKubeObject<Renderer.K8sApi.KubeObjectMetadata, IClusterExternalSecret["status"], IClusterExternalSecret["spec"]> implements IClusterExternalSecret {
  static readonly kind = "ClusterExternalSecret";
  static readonly namespaced = false;
  static readonly apiBase = "/apis/external-secrets.io/v1/clusterexternalsecrets";

  static readonly crd = {
    apiVersions: ["external-secrets.io/v1"],
    plural: "clusterexternalsecrets",
    singular: "clusterexternalsecret",
    shortNames: ["ces"],
    title: "Cluster External Secrets",
  };

  getStatus() {
    if (!this.status?.conditions) return "Unknown";
    const readyCondition = this.status.conditions.find(c => c.type === "Ready");
    return readyCondition ? readyCondition.status : "Unknown";
  }
}

export class PushSecret extends Renderer.K8sApi.LensExtensionKubeObject<Renderer.K8sApi.KubeObjectMetadata, IPushSecret["status"], IPushSecret["spec"]> implements IPushSecret {
  static readonly kind = "PushSecret";
  static readonly namespaced = true;
  static readonly apiBase = "/apis/external-secrets.io/v1/pushsecrets";

  static readonly crd = {
    apiVersions: ["external-secrets.io/v1"],
    plural: "pushsecrets",
    singular: "pushsecret",
    shortNames: ["ps"],
    title: "Push Secrets",
  };

  getStatus() {
    if (!this.status?.conditions) return "Unknown";
    const readyCondition = this.status.conditions.find(c => c.type === "Ready");
    return readyCondition ? readyCondition.status : "Unknown";
  }
}

export class ClusterExternalSecretApi extends Renderer.K8sApi.KubeApi<ClusterExternalSecret> {}
export const clusterExternalSecretsApi = new ClusterExternalSecretApi({
  objectConstructor: ClusterExternalSecret,
});

export class PushSecretApi extends Renderer.K8sApi.KubeApi<PushSecret> {}
export const pushSecretsApi = new PushSecretApi({
  objectConstructor: PushSecret,
});
