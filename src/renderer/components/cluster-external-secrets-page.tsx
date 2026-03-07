import React from "react";
import { observer } from "mobx-react";
import { Renderer } from "@freelensapp/extensions";
import { ClusterExternalSecret } from "../api/eso-resources";
import { clusterExternalSecretsStore } from "../api/eso-stores";

@observer
export class ClusterExternalSecretsPage extends React.Component {
  render() {
    return (
      <Renderer.Component.KubeObjectListLayout
        className="ClusterExternalSecrets"
        store={clusterExternalSecretsStore}
        tableId="clusterExternalSecretsTable"
        renderHeaderTitle="Cluster External Secrets"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: "metadata.name" },
          { title: "External Secret Name", className: "es-name" },
          { title: "Status", className: "status" },
          { title: "Age", className: "age", sortBy: "metadata.creationTimestamp" },
        ]}
        renderTableContents={(item: ClusterExternalSecret) => [
          item.getName(),
          item.spec.externalSecretName,
          item.getStatus(),
          item.getAge(),
        ]}
      />
    );
  }
}
