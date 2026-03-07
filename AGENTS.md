# Agents: Freelens External Secrets Extension

This project aims to build a Freelens extension for managing and visualizing [External Secrets Operator](https://external-secrets.io/) (ESO) resources.

## Agent Roles

### 🏛️ Extension Architect
- **Status:** Project structure and build pipeline fully established and aligned with Freelens best practices.
- **Tasks:**
  - [x] Create project skeleton.
  - [x] Implement robust build and development scripts (`electron-vite`, `.github/workflows`).
  - [ ] Configure linting and formatting (ESLint, Biome/Prettier).

### ☸️ Kubernetes & ESO Specialist
- **Status:** Core ESO resource models, KubeAPI clients, and KubeObjectStores successfully implemented and integrated.
- **Tasks:**
  - [x] Define TypeScript interfaces for ESO resources (`ExternalSecret`, `SecretStore`, etc.).
  - [x] Create K8s API clients for ESO resources using `@freelensapp/extensions`.
  - [x] Implement data fetching and state management (`KubeObjectStore`).

### 🎨 UI/UX Developer
- **Status:** All core resource list views, sidebar menus, custom actions (Force Sync), and resource drawer details implemented.
- **Tasks:**
  - [x] Design and implement the "External Secrets" list view.
  - [x] Create detailed views for `SecretStore` and `ClusterSecretStore`.
  - [x] Add status icons, synchronization progress indicators, and custom drawer details.

### 🛠️ Integration & QA Engineer
- **Status:** Testing environment (Jest) set up with mocks for @freelensapp/extensions. Unit tests for core resource models are passing. Example CRDs created and tested in a real cluster.
- **Tasks:**
  - [x] Set up a testing environment (Jest, ts-jest).
  - [x] Write unit tests for resource fetching and display models.
  - [ ] Write integration tests for UI components (React Testing Library).
  - [x] Create example YAML files for testing ESO resources.
