import React from "react";
import { observer } from "mobx-react";
import { Renderer } from "@freelensapp/extensions";
import { ExternalSecret } from "../api/external-secret";
import { externalSecretsStore } from "../api/external-secrets-store";

@observer
export class ExternalSecretsPage extends React.Component {
  render() {
    return (
      <Renderer.Component.KubeObjectListLayout
        className="ExternalSecrets"
        store={externalSecretsStore}
        tableId="externalSecretsTable"
        renderHeaderTitle="External Secrets"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: "metadata.name" },
          { title: "Namespace", className: "namespace", sortBy: "metadata.namespace" },
          { title: "Store", className: "store" },
          { title: "Status", className: "status" },
          { title: "Age", className: "age", sortBy: "metadata.creationTimestamp" },
        ]}
        renderTableContents={(item: ExternalSecret) => [
          item.getName(),
          item.getNs(),
          `${item.getStoreRef().kind}/${item.getStoreRef().name}`,
          {
            title: item.getStatus(),
            className: item.getStatus().toLowerCase(),
            tooltip: item.getStatusMessage(),
          },
          item.getAge(),
        ]}
      />
    );
  }
}
