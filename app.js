/* Proyecto del día 3 — Gestor de tareas.
   Punto de partida: solo el esqueleto. Construye cada parte con la IA,
   una a la vez, probando en el navegador después de cada pieza.

   Orden sugerido (así lo pide el ejercicio E11):
   1. almacenamiento: cargarTareas() y guardarTareas()
   2. operaciones:    agregarTarea(), completarTarea(), borrarTarea()
   3. interfaz:       pintarTareas()
   4. eventos:        enlazar el formulario y los botones
*/

const CLAVE = "taller-tareas";

let tareas = [];

// --- 1. Almacenamiento -------------------------------------------------
function cargarTareas() {
  try {
    const datos = localStorage.getItem(CLAVE);
    return datos ? JSON.parse(datos) : [];
  } catch (error) {
    console.error("Error al leer localStorage:", error);
    return [];
  }
}

function guardarTareas() {
  localStorage.setItem(CLAVE, JSON.stringify(tareas));
}

// --- 2. Operaciones ----------------------------------------------------
function agregarTarea(titulo) {
  const tituloLimpio = titulo.trim();
  if (!tituloLimpio) return;

  const nuevaTarea = {
    id: Date.now(),
    titulo: tituloLimpio,
    completada: false
  };

  tareas.push(nuevaTarea);
  guardarTareas();
}

function completarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    guardarTareas();
  }
}

function borrarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  guardarTareas();
}

// --- 3. Interfaz -------------------------------------------------------
function pintarTareas() {
  const listaTareas = document.getElementById("lista-tareas");
  const vacio = document.getElementById("vacio");

  listaTareas.innerHTML = "";

  if (tareas.length === 0) {
    vacio.style.display = "block";
    return;
  }
  vacio.style.display = "none";

  const fragmento = document.createDocumentFragment();

  tareas.forEach(tarea => {
    const li = document.createElement("li");
    if (tarea.completada) {
      li.classList.add("completada"); // Activa la regla li.completada span de styles.css
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    checkbox.addEventListener("change", () => {
      completarTarea(tarea.id);
      pintarTareas();
    });

    const texto = document.createElement("span");
    texto.textContent = tarea.titulo;

    const btnBorrar = document.createElement("button");
    btnBorrar.type = "button";
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
      borrarTarea(tarea.id);
      pintarTareas();
    });

    li.append(checkbox, texto, btnBorrar);
    fragmento.appendChild(li);
  });

  listaTareas.appendChild(fragmento);
}

// --- 4. Arranque -------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  tareas = cargarTareas();
  pintarTareas();

  const formulario = document.getElementById("form-tarea");
  const inputTitulo = document.getElementById("titulo");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarTarea(inputTitulo.value);
    formulario.reset();
    inputTitulo.focus();
    pintarTareas();
  });
});