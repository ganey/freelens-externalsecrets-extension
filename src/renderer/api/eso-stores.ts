import { Renderer } from "@freelensapp/extensions";
import { SecretStore, ClusterSecretStore, secretStoresApi, clusterSecretStoresApi, SecretStoreApi, ClusterSecretStoreApi } from "./secret-store";
import { ClusterExternalSecret, PushSecret, clusterExternalSecretsApi, pushSecretsApi, ClusterExternalSecretApi, PushSecretApi } from "./eso-resources";

export class SecretStoresStore extends Renderer.K8sApi.KubeObjectStore<SecretStore, SecretStoreApi> {
  api = secretStoresApi;
}
export const secretStoresStore = new SecretStoresStore();
Renderer.K8sApi.apiManager.registerStore(secretStoresStore);

export class ClusterSecretStoresStore extends Renderer.K8sApi.KubeObjectStore<ClusterSecretStore, ClusterSecretStoreApi> {
  api = clusterSecretStoresApi;
}
export const clusterSecretStoresStore = new ClusterSecretStoresStore();
Renderer.K8sApi.apiManager.registerStore(clusterSecretStoresStore);

export class ClusterExternalSecretsStore extends Renderer.K8sApi.KubeObjectStore<ClusterExternalSecret, ClusterExternalSecretApi> {
  api = clusterExternalSecretsApi;
}
export const clusterExternalSecretsStore = new ClusterExternalSecretsStore();
Renderer.K8sApi.apiManager.registerStore(clusterExternalSecretsStore);

export class PushSecretsStore extends Renderer.K8sApi.KubeObjectStore<PushSecret, PushSecretApi> {
  api = pushSecretsApi;
}
export const pushSecretsStore = new PushSecretsStore();
Renderer.K8sApi.apiManager.registerStore(pushSecretsStore);
