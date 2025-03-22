# Project Name

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/wesley22/vip-tutor.git
   cd vip-tutor
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Project

#### Development Mode

To start the project in development mode:

```sh
npm run dev
```

Or if using yarn:

```sh
yarn dev
```

#### Production Mode

To build the project for production:

```sh
npm run build
```

Or using yarn:

```sh
yarn build
```

Then, serve the build using:

```sh
npm run serve
```

Or:

```sh
yarn serve
```

## Coding Practices

### 1. **Vue 3 Composition API**

- The project follows Vue 3 Composition API for better code organization and reusability.
- Components use `setup()` to define reactive variables and methods.
- Composables (`useXyz.ts`) are used for reusing logic across components.

### 2. **State Management with Pinia**

- Pinia is used for managing application state efficiently.
- The state is structured using separate stores for different modules.
- Example store:

  ```js
  import { ref, computed } from 'vue'
  import { defineStore } from 'pinia'
  export const useAuthStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
  })
  ```

### 3. **Vue Router for Navigation**

- Vue Router is used to handle navigation with `createRouter` and `createWebHistory`.
- Routes are defined in a centralized `router.js` file.
- Example:

  ```js
  import { createRouter, createWebHistory } from 'vue-router'

  const routes = [
    { path: '/', component: () => import('../views/TaskList.vue') },
    { path: '/completed', component: () => import('../views/CompletedTask.vue') },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router
  ```

### 4. **Code Organization**

- The project follows a modular structure:
  ```
  src/
  ├── components/       # Reusable components
  ├── views/            # Page-level components
  ├── store/            # Pinia stores
  ├── router/           # Vue Router configurations
  ├── composables/      # Reusable functions for Composition API
  ├── assets/           # Static assets
  ├── styles/           # Global styles
  ├── main.js           # Application entry point
  ```

### 5. **Styling Practices**

- Tailwind CSS or SCSS is used for styling (based on project preferences).
- Utility classes are preferred for quick styling.
- Scoped styles are used within components to avoid conflicts.
