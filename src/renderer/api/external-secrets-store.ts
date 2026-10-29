import { Renderer } from "@freelensapp/extensions";
import { ExternalSecret, externalSecretsApi, ExternalSecretApi } from "./external-secret";

export class ExternalSecretsStore extends Renderer.K8sApi.KubeObjectStore<ExternalSecret, ExternalSecretApi> {
  constructor() {
    super(externalSecretsApi, {});
  }
  api = externalSecretsApi;
}

export const externalSecretsStore = new ExternalSecretsStore();
Renderer.K8sApi.apiManager.registerStore(externalSecretsStore);
