import React from "react";
import { observer } from "mobx-react";
import { Renderer } from "@freelensapp/extensions";
import { ClusterSecretStore } from "../api/secret-store";
import { clusterSecretStoresStore } from "../api/eso-stores";

@observer
export class ClusterSecretStoresPage extends React.Component {
  render() {
    return (
      <Renderer.Component.KubeObjectListLayout
        className="ClusterSecretStores"
        store={clusterSecretStoresStore}
        tableId="clusterSecretStoresTable"
        renderHeaderTitle="Cluster Secret Stores"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: "metadata.name" },
          { title: "Provider", className: "provider" },
          { title: "Status", className: "status" },
          { title: "Age", className: "age", sortBy: "metadata.creationTimestamp" },
        ]}
        renderTableContents={(item: ClusterSecretStore) => [
          item.getName(),
          item.getProvider(),
          item.getStatus(),
          item.getAge(),
        ]}
      />
    );
  }
}
