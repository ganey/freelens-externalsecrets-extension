import React from "react";
import { observer } from "mobx-react";
import { Renderer } from "@freelensapp/extensions";
import { SecretStore } from "../api/secret-store";
import { secretStoresStore } from "../api/eso-stores";

@observer
export class SecretStoresPage extends React.Component {
  render() {
    return (
      <Renderer.Component.KubeObjectListLayout
        className="SecretStores"
        store={secretStoresStore}
        tableId="secretStoresTable"
        renderHeaderTitle="Secret Stores"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: "metadata.name" },
          { title: "Namespace", className: "namespace", sortBy: "metadata.namespace" },
          { title: "Provider", className: "provider" },
          { title: "Status", className: "status" },
          { title: "Age", className: "age", sortBy: "metadata.creationTimestamp" },
        ]}
        renderTableContents={(item: SecretStore) => [
          item.getName(),
          item.getNs(),
          item.getProvider(),
          item.getStatus(),
          item.getAge(),
        ]}
      />
    );
  }
}
