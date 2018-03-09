# unhandled-rejection-promise
unhandledRejection promise to nodejs
# API
Exports a object
## on(listener)

The listener is a function called with error from unhandled promise. The error has a promise property with promise rejected.

# Usage

```js
on((error) => {
    assert(error.message === 'error');
    assert(error.promise);
});

    Promise.reject('error');
```