# Public Api

The data of this project is fetched using the [Punk API](https://punkapi.com/documentation/v2)

### Folder Structure

```shell
├── src/
  ├── Api/
  ├── Lib/ # Context Api
      └── actions
      └── contexts
      └── reducers
  ├── Modules/
      └── components
          └── App
      └── core # core css
      └── hooks   # custom hooks
      └── pages
      └── routers
  └── Types
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Story

As a user I want to see the details of a single beer in a different page of the list.

#### Acceptance Criteria

This detail page should show at least the information of:

- Name
- Description
- First Brewed
- Image
- Foods that pair with that beer
- Abv and Ibu
- Contributor/s

It also has to show the difference between Original Gravity and Final gravity

##### Requirements

- When you click on an item on the list, you’ll be sent to a new page with the
  details specified above.
- You should be able to go back from that page to the list.
- You should be able to refresh the page and still see the details.
- Details page will have a button. When you click on it the difference between
  the two gravities will be displayed.

### Decisions

- I was planning to change the design of the Dashboard, but wasn't sure if that was necessary so decided not to do radical changes.  
Instead, I simply changed the colours and I've added a top App Bar.
- Since this is a small app, I decided to make use of the Context API with only one reducer, instead of using Redux.

### Dispatch and State

For performance reasons the state and dispatch are split instead of using one `React.createContext` hook.

```js
const GlobalStateContext = React.createContext(undefined);
const GlobalDispatchContext = React.createContext(undefined);
```

  ### Improvements / Todos

  - When a request gets an error for the details page, even though the error is dispatched, the user sees an empty page. Instead the user should see a friendly message letting them know what happened.
  
