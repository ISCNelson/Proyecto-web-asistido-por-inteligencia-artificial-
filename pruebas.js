const tareas = [
  { id: 1, titulo: "Estudiar", completada: true, prioridad: "alta" },
  { id: 2, titulo: "Comprar leche", completada: false, prioridad: "media" },
  { id: 3, titulo: "Llamar", completada: false, prioridad: "baja" }
];

console.log("Sin filtros:", filtrarTareas(tareas), "Esperado:", tareas);
console.log("Filtros vacíos:", filtrarTareas(tareas, {}), "Esperado:", tareas);
console.log("Completadas:", filtrarTareas(tareas, { completada: true }), "Esperado:", [tareas[0]]);
console.log("Prioridad alta:", filtrarTareas(tareas, { prioridad: "alta" }), "Esperado:", [tareas[0]]);
console.log("Pendientes de prioridad baja:", filtrarTareas(tareas, { completada: false, prioridad: "baja" }), "Esperado:", [tareas[2]]);

function filtrarTareas(tareas, filtros = {}) {
  return tareas.filter(tarea =>
    (filtros.completada === undefined || tarea.completada === filtros.completada) &&
    (filtros.prioridad === undefined || tarea.prioridad === filtros.prioridad)
  );
}