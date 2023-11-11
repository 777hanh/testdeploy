# React + Vite

## Description

-   This is Project use Vite to create a new ReactJS application

## Some notes

### 1. File main.jsx have error when use `eslint` to check code

![error](src/assets/images/main.jsx-error.png)

-   The solution to this problem is to make sure rootElement is not null.

![error](src/assets/images/main.jsx-solution.png)

### 2. Enable Open Browser when run app

-   In file _**`vite.config.js`**_ add **server** property to _`defineConfig`_

```js
// vite.config.js file
import { defineConfig } from 'vite';
export default defineConfig({
    // ...
    server: {
        // Open Browser when start `npm run dev`
        open: true,
        // Set port to listen on 3000
        port: 3000,
    },
    // ...
});
```

### 3. Add custom Aliases

-   In file **`vite.config.js`** add your aliases.

```js
// vite.config.js

import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    // ...
    resolve: {
        // change alias
        alias: {
            // @ <---> `./src`
            '@': path.resolve(__dirname, './src'),
            // @component <---> `./src/component`
            '@component': `${path.resolve(__dirname, './src/components')}`,
            // @pages <---> src/pages
            '@pages/*': path.resolve(__dirname, './src/pages'),
        },
        // ...
    },
});
```

-   In file **`jsconfig.json`** or **`tsconfig.json`** (if the file does not exist then create a new config file) append this code under compiler options.

```json
{
    // ...
    "compilerOptions": {
        // ...
        "baseUrl": ".",
        "paths": {
            // @ <---> src/ || dist/
            "@/*": ["src/*", "dist/*", ""],
            // @components  <---> src/components
            "@components/*": ["src/components/*"],
            // @pages <---> src/pages
            "@pages/*": ["src/pages/*"]
        }
        // ...
    }
}
```

-   Now you can use the custom aliases

```js
import HeaderComponent from '@components/HeaderComponent';
import HomePage from '@pages/HomePage';
import images from '@/assets/images/';
```
