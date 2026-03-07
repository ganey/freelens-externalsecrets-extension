import React from "react";
import { observer } from "mobx-react";
import { Renderer } from "@freelensapp/extensions";
import { PushSecret } from "../api/eso-resources";
import { pushSecretsStore } from "../api/eso-stores";

@observer
export class PushSecretsPage extends React.Component {
  render() {
    return (
      <Renderer.Component.KubeObjectListLayout
        className="PushSecrets"
        store={pushSecretsStore}
        tableId="pushSecretsTable"
        renderHeaderTitle="Push Secrets"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: "metadata.name" },
          { title: "Namespace", className: "namespace", sortBy: "metadata.namespace" },
          { title: "Secret", className: "secret" },
          { title: "Status", className: "status" },
          { title: "Age", className: "age", sortBy: "metadata.creationTimestamp" },
        ]}
        renderTableContents={(item: PushSecret) => [
          item.getName(),
          item.getNs(),
          item.spec.selector.secret.name,
          item.getStatus(),
          item.getAge(),
        ]}
      />
    );
  }
}
