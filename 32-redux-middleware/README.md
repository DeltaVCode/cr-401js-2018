![cf](http://i.imgur.com/7v5ASc8.png) 33: Redux Middleware
===

## Learning Objectives
* Students will learn to combine reducers to simplify the management of complex application state
* Students will be able to create middleware for redux
* Students will be able to add third party middleware to redux

## Readings
* Read [combine reducers](http://redux.js.org/docs/api/combineReducers.html)
* Read [redux middleware](http://redux.js.org/docs/advanced/Middleware.html)

## Overview

### `combineReducers`
Reducers are a great tool for defining state and changes to the state of your application. However as your application state gets more complex, your reducers become hard to manage. `combineReducers` is a redux method that enables you to create a single reducer, from many reducers, that define sub states and their interactions. A state returned from a combined reducer is an object where each _sub state reducer_ defines a property on that object.

### Redux Middleware
Redux middleware provides a third-party extension point between dispatching and action at the moment it reaches the reducer. It can be used for logging actions, adding promise support, making API requests, caching, throttling, and much more.

### Example Middleware

``` javascript
// middleware used for error reporting and logging
let reporter = store => next => action => {
  console.log('__ACTION__', action);

  try {
    let result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  } catch (error) {
    error.action = action;
    console.error('__ERROR__', error);
    return error;
  }
}

export default reporter;
```
