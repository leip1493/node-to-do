const descripcion = {
    alias: 'd',
    demand: true,
    description: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    description: 'Marca como pendiente/completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('listar', 'Lista todas las tareas')
    .command('actualizar', 'Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'Lista todas las tareas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}