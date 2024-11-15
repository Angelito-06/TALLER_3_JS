var nombreLocalStore = "programas"

function recuperarDatosPrograma() {
    this.codigoPrograma = document.getElementById("codigoPrograma")
    this.nombrePrograma = document.getElementById("nombrePrograma")
    this.duracion = document.getElementById("duracion")
    this.modalidad = document.getElementById("modalidad")
    this.fecha = document.getElementById("fecha")
}

function guardarPrograma() {
    recuperarDatosPrograma()
    if (!fechaValida(fecha.value)) {
        alert("Ingresa una fecha valida")
        return;
    }else {
        programa = new Programa(codigoPrograma.value, nombrePrograma.value, duracion.value, modalidad.value, fecha.value)
        var programas = getJSONDeLocalStore(nombreLocalStore)
        programas.push(programa)
        setJSONDeLocalStore(nombreLocalStore, programas)
        limpiar()
        alert("El programa se ha guardado correctamente")
    }
}

function limpiar() {
    codigoPrograma.value = ''
    nombrePrograma.value = ''
    duracion.value = ''
    modalidad.value = ''
    fecha.value = ''
}

function consultarPrograma() {
    recuperarDatosPrograma()
    this.programas = getJSONDeLocalStore(nombreLocalStore)
    var indiceProgramas = buscarIndicePrograma()
    if (indiceProgramas > -1) {
        nombrePrograma.value = programas[indiceProgramas].nombrePrograma
        duracion.value = programas[indiceProgramas].duracion
        modalidad.value = programas[indiceProgramas].modalidad
        fecha.value = programas[indiceProgramas].fecha
    }
}

function buscarIndicePrograma() {
    var resultado = -1
    for (let i = 0; i < programas.length; i++) {
        if (programas[i].codigoPrograma == codigoPrograma.value) {
            resultado = i
        }
    }
    return resultado
}

function actualizarPrograma() {
    recuperarDatosPrograma()
    if (!fechaValida(fecha.value)) {
        alert("Ingresa una fecha valida")
        return;
    }else {
        this.programas = getJSONDeLocalStore(nombreLocalStore)
        var indiceProgramas = buscarIndicePrograma()
        if (indiceProgramas > -1) {
            programas[indiceProgramas].nombrePrograma = nombrePrograma.value
            programas[indiceProgramas].duracion = duracion.value
            programas[indiceProgramas].modalidad = modalidad.value
            programas[indiceProgramas].fecha = fecha.value
        }
        setJSONDeLocalStore(nombreLocalStore, programas)
        limpiar()
        alert("El programa ha sido actualizado correctamente")
    }
}

function eliminarPrograma() {
    var programas = getJSONDeLocalStore(nombreLocalStore)
    var indiceProgramas = buscarIndicePrograma()
    if (indiceProgramas > -1) {
        alert("Programa " + programas[indiceProgramas].codigoPrograma + " eliminado")
        programas.splice(indiceProgramas, 1)
        setJSONDeLocalStore(nombreLocalStore, programas)
    }
    limpiar()
}