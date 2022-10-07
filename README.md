# Annevo Frontend Case

Here is a take on the frontend case I have solved for Annevo.

The case is solved using VueJS instead of React. However, I have tried to solve the different issues as close to requirement as possible. Plus of course, a little extras.

### The layout

The mock page is divided in 3 distinct sections: The header, the sidebar and a main section.
This is achieved using the power of CSS grid property.

#### The header

The header was required to contain a title that would reflect the sidebar item that is currently active (clicked). 

##### Extras 

- And as a bonus, have a shared counter that will increment each time the title is click in the header or in the main section.

#### The Sidebar

The sidebar loads its nodes from an API and parse them into a node tree that reflects the structure of the API with its nested elements.
It toggles a collapse when a node with children is clicked. And indicates which node is active with a change in the node's background color.

##### Extras

- Each node implements an instance of a Vue-router link, which when clicked directly, triggers a routing navigation to a different component inside the main section.
- Each parent node have an arrow attached to it that indicates that it can be expanded
- Given that the nodes are loaded from an API, the sidebar has a loader component that is visible till the data is fetched or fetching fails more than 5 times, with a retry delay of 3 seconds.
- Upon failure to fetch the node data, an Error component is displayed in the sidebar.

#### The Main section

The main section contains a title that is updated each time a node in the sidebar is clicked.

##### Extras

- The main section is an instance of the Vue-router component and "navigates" to a different component each time a node is clicked in the sidebar
- A counter that increments upon clicking the title is displayed. SHared with the title in the header.
- A slug from the node name is also displayed when a sidebar node is clicked and a navigation is triggered.
- Not however that, if only the node is clicked and not the link component, the title is updated but not the slug as the main section does not navigate to a new "page".

### Functionalities

- **Typescript**: is used to define a few types to represent the API response as well as each sidebar node. However most of the typing is done with type inference.
- **Function Components**: I used the composition API which I believe comes the closest to React function components.
- **JSX**: No JSX is used
- **API management**: A loader and an error component are in place when data is laging.
- **Hooks**: onMounted() is used a few of times where it is deemed necessary
- **Routing**: Done with Vue-router
- **Redux**: I used Pinia for state management

There might be some code artefacts left behind courtesy of vue-cli scaffolding.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
