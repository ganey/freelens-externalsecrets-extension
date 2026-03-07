import React from "react";
import { Renderer } from "@freelensapp/extensions";
import { ExternalSecret } from "../api/external-secret";
import { ClusterExternalSecret, clusterExternalSecretsApi } from "../api/eso-resources";

export function ExternalSecretMenu(props: Renderer.Component.KubeObjectMenuProps<ExternalSecret | ClusterExternalSecret>) {
  const { object, toolbar } = props;

  const forceSync = async () => {
    try {
      if (object instanceof ExternalSecret) {
        await object.forceSync();
      } else {
        // For ClusterExternalSecret
        await clusterExternalSecretsApi.patch(
          { name: object.getName() },
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
      Renderer.Component.Notifications.ok(`Force sync triggered for ${object.getName()}`);
    } catch (err) {
      Renderer.Component.Notifications.error(`Failed to trigger force sync: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      if (toolbar && typeof (toolbar as any).hideMenu === "function") {
        (toolbar as any).hideMenu();
      }
    }
  };

  return (
    <Renderer.Component.MenuItem onClick={forceSync}>
      <Renderer.Component.Icon material="sync" interactive={true} tooltip="Force Sync" />
      <span className="title">Force Sync</span>
    </Renderer.Component.MenuItem>
  );
}
