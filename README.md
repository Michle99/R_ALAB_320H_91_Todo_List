<div align="center">
   <h1>React Todo List using useReducer and useState Hooks</h1>
</div>

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Teachnologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [The Yarn PnP Feature](#the-yarn-pnp-feature)
6. [Common Errors encountered using Yarn Pnp](#common-errors-encountered-using-yarn-pnp)

## Overview
A React Todo List application where users can create a list of tasks to execute.

## Features

- **Add Todo:** Enter a task to be done.
- **Edit Todo:** Update a current or previous task.
- **Complete Todo:** Mark a task completed.
- **Undo Todo:** Updated a completed task as uncompleted.
- **Delete Todo:** Delete a completed task.


## Technologies Used

- React
- Vite
- Chakra UI
- Yarn Berry (PnP and Zero-Install)

## Getting Started

### Prerequisites

- Node.js and yarn are installed

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/Michle99/R_ALAB_320H_91_Todo_List.git
```

2. Navigate to the project folder:

```bash
  cd R_ALAB_320H_91_Todo_List
``` 

3. Start the development server:

```bash
  yarn run dev
```
4. Run the following command to make Vscode play nice with Yarn PnP:

```
 yarn dlx @yarnpkg/sdks vscode
```

5. To use node-modules instead, go to the `.yarnrc.yml` and set this:

```
nodeLinker: node-modules
```
Then run the following command:

```
yarn install
```

## The Yarn PnP Feature
The dependencies are already installed and are present in the repository folder. No need for node_modules in the project folder because of the Yarn PnP feature. To learn more about Yarn PnP, visit [here](https://yarnpkg.com/features/pnp).
To initiate Yarn PnP, [migration to Yarn PnP](https://yarnpkg.com/migration/guide).


### Usage

1. Create a vite project with yarn:

```bash
  yarn create vite my-project-name --template react
```

2. Install dependences:

```bash
  yarn install
```

3. Add additional dependencies/devDependencies:

```bash
  yarn add <dependencies-name>
```
4. To use Yarn PnP, use the following commands:

- Start yarn version to berry:

```bash
   yarn set version berry
```
This will create a `.yarn` & ` .yarnrc.yml` folder and files respectively.

- Set the ` .yarnrc.yml` to `pnp`, in ordet to use Yarn PnP feature:

```bash
  yarn config set nodeLinker "pnp"
```
This will ensure any additional dependencies you download is taken care of by Yarn PnP and installed in the `.yarn` folder.

- Run the below command to remove the `node_modules` folder and use Yarn Pnp instead:

```bash
  yarn install
```
- Start the development server:

```bash
  yarn run dev
```
### Common Errors encountered using Yarn Pnp:

- Modules resolution for VSCode:
Run the following command, this will create a `.vscode` folder and install `sdks` folder in the `.yarn` folder.
```bash
   yarn dlx @yarnpkg/sdks vscode
```

- Common Errors encountered using Yarn Pnp:
    - [How to configure VSCode to run Yarn 2 (with PnP) powered TypeScript](https://stackoverflow.com/questions/65328123/how-to-configure-vscode-to-run-yarn-2-with-pnp-powered-typescript)

    - [yarn: cannot find module](https://stackoverflow.com/questions/60778047/yarn-cannot-find-module)
    
    - Using `Vitest with Yarn v4.0.2` with PnP, `Vite 5.0.0`, `Vitest 1.0.4`, and `jsdom 23.0.1` or `@testing-library/jest-dom": "^6.1.5"` results in the following errors:

    [Errors encoutered using Vitest and Yarn v4.0.2](https://github.com/vitest-dev/vitest/issues/4413#issuecomment-1853047468)

    - The Fix for the Vitest/jsdom error testing error I encountered was to use `happy-dom` in place of jest-dom:
      - Install ```happy-dom```:

      ```
      yarn add -D happy-dom
      ```
      - Uninstall any and all jest-dom packages.
      - For how to do testing with `vitest` and `happy-dom`: [How to Unit Test your React TypeScript App With Vitest and React Testing Library.](https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/)

5. Open your browser and visit  http://localhost:5173/.
