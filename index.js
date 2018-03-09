exports.on = (listener) => {
    process.on('unhandledRejection', (reason, promise) => {
        const error = new Error(reason);
        error.promise = promise;
        listener(error);
    });
};
