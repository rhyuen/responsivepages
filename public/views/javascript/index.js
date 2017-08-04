console.log("Hi");

if("serviceWorker" in navigator){
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then((registration) => {
                console.log("registration success %s", registration.scope);
            })
            .catch((err) => {
                console.log(err);
            });
    });
}else{
    console.log("Service Worker is not supported.");
}


//fetch()
//TODO: GET GIT HUB VALUES - User
