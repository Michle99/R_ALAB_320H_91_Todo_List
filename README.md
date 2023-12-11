<div align="center">
   <h1>React Todo List using useReducer and useState Hooks</h1>
</div>


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
   git clone https://github.com/Michle99/sba_320h_project.git
```

2. Navigate to the project folder:

```bash
  cd 
```
3. Install dependencies:

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

2. Open your browser and visit  http://localhost:5173/.