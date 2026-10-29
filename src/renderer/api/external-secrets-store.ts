import { Renderer } from "@freelensapp/extensions";
import { ExternalSecret, externalSecretsApi, ExternalSecretApi } from "./external-secret";
import { lazy } from "./utils";

export class ExternalSecretsStore extends Renderer.K8sApi.KubeObjectStore<ExternalSecret, ExternalSecretApi> {
  constructor() {
    super(externalSecretsApi, {});
  }
  api = externalSecretsApi;
}

export const externalSecretsStore: ExternalSecretsStore = lazy(() => {
  const store = new ExternalSecretsStore();
  Renderer.K8sApi.apiManager.registerStore(store);
  return store;
});
