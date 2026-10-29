import { Renderer } from "@freelensapp/extensions";
import { SecretStore, ClusterSecretStore, secretStoresApi, clusterSecretStoresApi, SecretStoreApi, ClusterSecretStoreApi } from "./secret-store";
import { ClusterExternalSecret, PushSecret, clusterExternalSecretsApi, pushSecretsApi, ClusterExternalSecretApi, PushSecretApi } from "./eso-resources";
import { lazy } from "./utils";

export class SecretStoresStore extends Renderer.K8sApi.KubeObjectStore<SecretStore, SecretStoreApi> {
  constructor() {
    super(secretStoresApi, {});
  }
  api = secretStoresApi;
}
export const secretStoresStore: SecretStoresStore = lazy(() => {
  const store = new SecretStoresStore();
  Renderer.K8sApi.apiManager.registerStore(store);
  return store;
});

export class ClusterSecretStoresStore extends Renderer.K8sApi.KubeObjectStore<ClusterSecretStore, ClusterSecretStoreApi> {
  constructor() {
    super(clusterSecretStoresApi, {});
  }
  api = clusterSecretStoresApi;
}
export const clusterSecretStoresStore: ClusterSecretStoresStore = lazy(() => {
  const store = new ClusterSecretStoresStore();
  Renderer.K8sApi.apiManager.registerStore(store);
  return store;
});

export class ClusterExternalSecretsStore extends Renderer.K8sApi.KubeObjectStore<ClusterExternalSecret, ClusterExternalSecretApi> {
  constructor() {
    super(clusterExternalSecretsApi, {});
  }
  api = clusterExternalSecretsApi;
}
export const clusterExternalSecretsStore: ClusterExternalSecretsStore = lazy(() => {
  const store = new ClusterExternalSecretsStore();
  Renderer.K8sApi.apiManager.registerStore(store);
  return store;
});

export class PushSecretsStore extends Renderer.K8sApi.KubeObjectStore<PushSecret, PushSecretApi> {
  constructor() {
    super(pushSecretsApi, {});
  }
  api = pushSecretsApi;
}
export const pushSecretsStore: PushSecretsStore = lazy(() => {
  const store = new PushSecretsStore();
  Renderer.K8sApi.apiManager.registerStore(store);
  return store;
});
