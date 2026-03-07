import { Renderer } from "@freelensapp/extensions";
import { ExternalSecretsPage } from "./components/external-secrets-page";
import { SecretStoresPage } from "./components/secret-stores-page";
import { ClusterSecretStoresPage } from "./components/cluster-secret-stores-page";
import { ClusterExternalSecretsPage } from "./components/cluster-external-secrets-page";
import { PushSecretsPage } from "./components/push-secrets-page";
import { ExternalSecretMenu } from "./components/external-secret-menu";
import { ExternalSecretSecretDetails } from "./components/secret-details";

export default class ExternalSecretsRendererExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "external-secrets",
      components: {
        Page: () => <ExternalSecretsPage />,
      },
    },
    {
      id: "secret-stores",
      components: {
        Page: () => <SecretStoresPage />,
      },
    },
    {
      id: "cluster-secret-stores",
      components: {
        Page: () => <ClusterSecretStoresPage />,
      },
    },
    {
      id: "cluster-external-secrets",
      components: {
        Page: () => <ClusterExternalSecretsPage />,
      },
    },
    {
      id: "push-secrets",
      components: {
        Page: () => <PushSecretsPage />,
      },
    },
  ];

  clusterPageMenus = [
    {
      id: "external-secrets-root",
      title: "External Secrets",
      components: {
        Icon: () => <Renderer.Component.Icon material="lock" />,
      },
    },
    {
      id: "external-secrets",
      parentId: "external-secrets-root",
      target: { pageId: "external-secrets" },
      title: "External Secrets",
      components: {
        Icon: () => <Renderer.Component.Icon material="lock" />,
      },
    },
    {
      id: "secret-stores",
      parentId: "external-secrets-root",
      target: { pageId: "secret-stores" },
      title: "Secret Stores",
      components: {
        Icon: () => <Renderer.Component.Icon material="storage" />,
      },
    },
    {
      id: "cluster-secret-stores",
      parentId: "external-secrets-root",
      target: { pageId: "cluster-secret-stores" },
      title: "Cluster Secret Stores",
      components: {
        Icon: () => <Renderer.Component.Icon material="storage" />,
      },
    },
    {
      id: "cluster-external-secrets",
      parentId: "external-secrets-root",
      target: { pageId: "cluster-external-secrets" },
      title: "Cluster External Secrets",
      components: {
        Icon: () => <Renderer.Component.Icon material="lock" />,
      },
    },
    {
      id: "push-secrets",
      parentId: "external-secrets-root",
      target: { pageId: "push-secrets" },
      title: "Push Secrets",
      components: {
        Icon: () => <Renderer.Component.Icon material="publish" />,
      },
    },
  ];

  kubeObjectDetailItems = [
    {
      kind: "Secret",
      apiVersions: ["v1"],
      components: {
        Details: (props: any) => <ExternalSecretSecretDetails {...props} />,
      },
    },
  ];

  kubeObjectMenuItems = [
    {
      kind: "ExternalSecret",
      apiVersions: ["external-secrets.io/v1"],
      components: {
        MenuItem: (props: any) => <ExternalSecretMenu {...props} />,
      },
    },
    {
      kind: "ClusterExternalSecret",
      apiVersions: ["external-secrets.io/v1"],
      components: {
        MenuItem: (props: any) => <ExternalSecretMenu {...props} />,
      },
    },
  ];
}
