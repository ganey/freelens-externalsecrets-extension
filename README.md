# Freelens External Secrets Extension

A Freelens extension to manage and visualize [External Secrets Operator](https://external-secrets.io/) (ESO) resources.

## Features

- **Visualize ESO Resources**: View `ExternalSecret`, `SecretStore`, and `ClusterSecretStore` resources.
- **Manage Secrets**: Easily manage and monitor the synchronization status of secrets.
- **Native Freelens Experience**: Seamlessly integrates with the Freelens UI for a unified Kubernetes management experience.

## Installation

You can install this extension directly within Freelens:

1. Open Freelens.
2. Go to Extensions (`Ctrl+Shift+E` or `Cmd+Shift+E`).
3. Search for `freelens-externalsecrets-extension` and click install.

Or by using the direct URL:
`freelens://app/extensions/install/freelens-externalsecrets-extension`

## Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/micha/freelens-externalsecrets-extension.git
   cd freelens-externalsecrets-extension
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start in development mode:
   ```bash
   pnpm dev
   ```

4. Build the extension:
   ```bash
   pnpm build
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
