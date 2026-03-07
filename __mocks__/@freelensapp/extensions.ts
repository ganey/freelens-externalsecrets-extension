import React from "react";

export class KubeObject {
  metadata: any;
  status: any;
  spec: any;
  constructor(data: any) {
    Object.assign(this, data);
  }
  static kind: string;
  static namespaced: boolean;
  static apiBase: string;
  getName() { return (this as any).metadata?.name; }
  getNs() { return (this as any).metadata?.namespace; }
  getAge() { return "1d"; }
  getLabels() { return (this as any).metadata?.labels ? Object.entries((this as any).metadata.labels).map(([k, v]) => `${k}=${v}`) : []; }
  getAnnotations() { return (this as any).metadata?.annotations ? Object.entries((this as any).metadata.annotations).map(([k, v]) => `${k}=${v}`) : []; }
  selfLink = "/api/v1/namespaces/default/secrets/my-secret";
}

export class KubeApi {
  constructor(options: any) {
    (this as any).options = options;
  }
  patch = jest.fn().mockResolvedValue({});
}

export class KubeObjectStore<T = KubeObject> {
  items: T[] = [];
}

export const K8sApi = {
  KubeObject,
  KubeApi,
  KubeObjectStore,
  apiManager: {
    registerStore: jest.fn(),
  }
};

export const Common = {
  Util: {
    isKubeObjectNonSystem: jest.fn(),
  }
};

export const Main = {
  LensExtension: class {
    onActivate() {}
    onDeactivate() {}
  },
  K8sApi,
};

export const Renderer = {
  LensExtension: class {
    clusterPages: any[] = [];
    clusterPageMenus: any[] = [];
    kubeObjectMenuItems: any[] = [];
    kubeObjectDetailItems: any[] = [];
    onActivate() {}
    onDeactivate() {}
  },
  Component: {
    KubeObjectListLayout: ({ children }: any) => React.createElement("div", { "data-testid": "kube-list-layout" }, children),
    MenuItem: ({ children, onClick }: any) => React.createElement("div", { onClick, "data-testid": "menu-item" }, children),
    Icon: ({ material }: any) => React.createElement("span", null, material),
    Notifications: {
      ok: jest.fn(),
      error: jest.fn(),
    },
    DrawerTitle: ({ title }: any) => React.createElement("h2", null, title),
    DrawerItem: ({ children, name }: any) => React.createElement("div", null, React.createElement("label", null, name), children),
    getDetailsUrl: jest.fn().mockReturnValue("/details"),
  },
  Navigation: {
    navigate: jest.fn(),
  },
  K8sApi,
};
