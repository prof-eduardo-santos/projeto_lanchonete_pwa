if ("serviceWorker" in navigator) {

navigator.serviceWorker.register("service_worker.js")

.then(() => console.log("Service Worker registrado"))

.catch(err => console.log("Erro:", err));

}