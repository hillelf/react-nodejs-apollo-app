
const unregister = () => {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
         registration.unregister()
       } })
};

export { unregister as unregister };
