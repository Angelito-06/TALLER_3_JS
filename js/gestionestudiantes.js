var nombreLocalStore = "estudiantes"

function recuperarDatosEstudiante() {
    this.identificacion = document.getElementById("identificacion")
    this.nombre = document.getElementById("nombre")
    this.fecha = document.getElementById("fecha")
    this.correo = document.getElementById("correo")
    this.telefono = document.getElementById("telefono")
}

function guardarEstudiante() {
    recuperarDatosEstudiante()
    if (!fechaValida(fecha.value)) {
        alert("Ingresa una fecha valida")
        return;
    } else {
        estudiante = new Estudiante(identificacion.value, nombre.value, fecha.value, correo.value, telefono.value)
        var estudiantes = getJSONDeLocalStore(nombreLocalStore)
        estudiantes.push(estudiante)
        setJSONDeLocalStore(nombreLocalStore, estudiantes)
        limpiar()
        alert("El estudiante ha sido guardado exitosamente")
    }
}

function limpiar() {
    identificacion.value = ''
    nombre.value = ''
    fecha.value = ''
    correo.value = ''
    telefono.value = ''
    identificacion.focus()
}

function consultar() {
    recuperarDatosEstudiante()
    this.estudiantes = getJSONDeLocalStore(nombreLocalStore)
    var indiceEstudiantes = buscarIndiceEstudiante()
    if (indiceEstudiantes > -1) {
        nombre.value = estudiantes[indiceEstudiantes].nombre
        fecha.value = estudiantes[indiceEstudiantes].fecha
        correo.value = estudiantes[indiceEstudiantes].correo
        telefono.value = estudiantes[indiceEstudiantes].telefono
    }
}

function buscarIndiceEstudiante() {
    var resultado = -1
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].identificacion == identificacion.value) {
            resultado = i
        }
    }
    return resultado
}

function actualizar() {
    recuperarDatosEstudiante()
    if (!fechaValida(fecha.value)) {
        alert("Ingresa una fecha valida")
        return;
    } else {
        this.estudiantes = getJSONDeLocalStore(nombreLocalStore)
        var indiceEstudiantes = buscarIndiceEstudiante()
        if (indiceEstudiantes > -1) {
            estudiantes[indiceEstudiantes].nombre = nombre.value
            estudiantes[indiceEstudiantes].fecha = fecha.value
            estudiantes[indiceEstudiantes].correo = correo.value
            estudiantes[indiceEstudiantes].telefono = telefono.value
        }
        setJSONDeLocalStore(nombreLocalStore, estudiantes)
        limpiar()
        alert("El estudiante ha sido actualizado correctamente")
    }
}

function eliminar() {
    var estudiantes = getJSONDeLocalStore(nombreLocalStore)
    var indiceEstudiantes = buscarIndiceEstudiante()
    if (indiceEstudiantes > -1) {
        alert("Estudiante " + estudiantes[indiceEstudiantes].identificacion + " eliminado")
        estudiantes.splice(indiceEstudiantes, 1)
        setJSONDeLocalStore(nombreLocalStore, estudiantes)
    }
    limpiar()
}