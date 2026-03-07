import React from "react";
import { Renderer } from "@freelensapp/extensions";
import { externalSecretsStore } from "../api/external-secrets-store";

export function ExternalSecretSecretDetails(props: Renderer.Component.KubeObjectDetailsProps<any>) {
  const { object: secret } = props;
  
  // Find if any ExternalSecret is managing this secret
  // ESO adds an annotation to the generated secret: "reconcile.external-secrets.io/data-hash"
  // and labels like "managed-by: external-secrets"
  
  const isManagedByESO = secret.getLabels().includes("managed-by=external-secrets") || 
                         secret.getAnnotations().some((a: string) => a.includes("external-secrets.io"));

  if (!isManagedByESO) return null;

  const externalSecret = externalSecretsStore.items.find(es => 
    es.getNs() === secret.getNs() && es.spec.target.name === secret.getName()
  );

  return (
    <div className="ExternalSecretSecretDetails">
      <Renderer.Component.DrawerTitle title="External Secrets" />
      <Renderer.Component.DrawerItem name="Managed by ESO">
        {isManagedByESO ? "Yes" : "No"}
      </Renderer.Component.DrawerItem>
      {externalSecret && (
        <Renderer.Component.DrawerItem name="External Secret">
          <a onClick={() => Renderer.Navigation.navigate(Renderer.Component.getDetailsUrl(externalSecret.selfLink))}>
            {externalSecret.getName()}
          </a>
        </Renderer.Component.DrawerItem>
      )}
    </div>
  );
}
