import re

with open('src/renderer/index.tsx', 'r') as f:
    content = f.read()

content = re.sub(
    r'kubeObjectDetailItems = \[.*?\];',
    'kubeObjectDetailItems = [\n    Renderer.K8sApi.detailsFor(Renderer.K8sApi.Secret, {\n      Details: (props: any) => <ExternalSecretSecretDetails {...props} />,\n    }),\n  ];',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'kubeObjectMenuItems = \[.*?\];',
    'kubeObjectMenuItems = [\n    Renderer.K8sApi.menuItemFor(ExternalSecret, {\n      MenuItem: (props: any) => <ExternalSecretMenu {...props} />,\n    }),\n    Renderer.K8sApi.menuItemFor(ClusterExternalSecret, {\n      MenuItem: (props: any) => <ExternalSecretMenu {...props} />,\n    }),\n  ];',
    content,
    flags=re.DOTALL
)

# Also need to import these
content = 'import { ExternalSecret } from "./api/external-secret";\nimport { ClusterExternalSecret } from "./api/eso-resources";\n' + content

with open('src/renderer/index.tsx', 'w') as f:
    f.write(content)
