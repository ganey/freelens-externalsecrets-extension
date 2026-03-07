# Agents: Freelens External Secrets Extension

This project aims to build a Freelens extension for managing and visualizing [External Secrets Operator](https://external-secrets.io/) (ESO) resources.

## Agent Roles

### 🏛️ Extension Architect
- **Status:** Initial project structure defined (package.json, tsconfig.json, src/).
- **Tasks:**
  - [x] Create project skeleton.
  - [ ] Implement robust build and development scripts.
  - [ ] Configure linting and formatting (ESLint, Biome/Prettier).

### ☸️ Kubernetes & ESO Specialist
- **Status:** Basic renderer/main entry points created.
- **Tasks:**
  - [ ] Define TypeScript interfaces for ESO resources (`ExternalSecret`, `SecretStore`).
  - [ ] Create K8s API clients for ESO resources using `@freelensapp/core`.
  - [ ] Implement data fetching and state management.

### 🎨 UI/UX Developer
- **Status:** Basic sidebar menu and dashboard placeholder created.
- **Tasks:**
  - [ ] Design and implement the "External Secrets" list view.
  - [ ] Create detailed views for `SecretStore` and `ClusterSecretStore`.
  - [ ] Add status icons and synchronization progress indicators.

### 🛠️ Integration & QA Engineer
- **Status:** Testing environment (Jest) set up with mocks for @freelensapp/extensions. Unit tests for core resource models are passing.
- **Tasks:**
  - [x] Set up a testing environment (Jest, ts-jest).
  - [x] Write unit tests for resource fetching and display models.
  - [ ] Write integration tests for UI components (React Testing Library).
  - [ ] Create example YAML files for testing ESO resources.
