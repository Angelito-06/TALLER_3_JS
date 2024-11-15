function getJSONDeLocalStore(nombreLocalStore){
    return JSON.parse(localStorage.getItem(nombreLocalStore)  || "[]")
}

function setJSONDeLocalStore(nombreLocalStore, arrayJSON){
    localStorage.setItem(nombreLocalStore,JSON.stringify(arrayJSON))
}

function fechaValida(fecha) {
    const fechaColocada = new Date(fecha)
    const fechaActual = new Date()
    fechaActual.setHours(0, 0, 0, 0)
    return fechaColocada <= fechaActual
}