import { Renderer } from "@freelensapp/extensions";

export interface ExternalSecret {
  metadata: Renderer.K8sApi.KubeObjectMetadata;
  spec: {
    secretStoreRef: {
      name: string;
      kind: string;
    };
    target: {
      name: string;
      creationPolicy?: string;
      template?: any;
    };
    data?: Array<{
      secretKey: string;
      remoteRef: {
        key: string;
        property?: string;
        version?: string;
      };
    }>;
    dataFrom?: Array<any>;
    refreshInterval?: string;
  };
  status?: {
    conditions?: Array<{
      type: string;
      status: string;
      lastTransitionTime: string;
      reason: string;
      message: string;
    }>;
    refreshTime?: string;
    syncedResourceVersion?: string;
  };
}

export interface SecretStore {
  metadata: Renderer.K8sApi.KubeObjectMetadata;
  spec: {
    provider: {
      aws?: any;
      vault?: any;
      azurekv?: any;
      gcpsm?: any;
      alibabacloud?: any;
      ibmcloud?: any;
      doppler?: any;
      senhasegura?: any;
      conjur?: any;
      onepassword?: any;
      keepersecurity?: any;
      bitwarden?: any;
      kubernetes?: any;
      fake?: any;
    };
    controller?: string;
    retrySettings?: any;
  };
  status?: {
    conditions?: Array<{
      type: string;
      status: string;
      lastTransitionTime: string;
      reason: string;
      message: string;
    }>;
  };
}

export interface ClusterSecretStore extends SecretStore {}

export interface ClusterExternalSecret {
  metadata: Renderer.K8sApi.KubeObjectMetadata;
  spec: {
    externalSecretName: string;
    namespaceSelector: {
      matchLabels?: Record<string, string>;
      matchExpressions?: Array<any>;
    };
    externalSecretSpec: ExternalSecret["spec"];
    refreshInterval?: string;
  };
  status?: {
    conditions?: Array<{
      type: string;
      status: string;
      lastTransitionTime: string;
      reason: string;
      message: string;
    }>;
    namespaces?: string[];
  };
}

export interface PushSecret {
  metadata: Renderer.K8sApi.KubeObjectMetadata;
  spec: {
    secretStoreRef: {
      name: string;
      kind: string;
    };
    selector: {
      secret: {
        name: string;
      };
    };
    data?: Array<{
      match: {
        remoteRef: {
          remoteKey: string;
          property?: string;
        };
        secretKey?: string;
      };
    }>;
    refreshInterval?: string;
  };
  status?: {
    conditions?: Array<{
      type: string;
      status: string;
      lastTransitionTime: string;
      reason: string;
      message: string;
    }>;
    syncedResourceVersion?: string;
  };
}
