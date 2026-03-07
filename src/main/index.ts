import { Main } from "@freelensapp/extensions";

export default class ExternalSecretsMainExtension extends Main.LensExtension {
  async onActivate() {
    console.log("External Secrets Main Extension Activated");
  }

  async onDeactivate() {
    console.log("External Secrets Main Extension Deactivated");
  }
}
