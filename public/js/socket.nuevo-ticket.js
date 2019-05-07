/**
 * Logica de comunicacion con el servidor
 */


//Comando para establecer la conexion
var socket = io();

//buscar en el DOM algo llamado "lbl.."
var label = $('#lblNuevoTicket');


//Conectar al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});


//on 'estadoActual'
socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual)
});

//Pasar funcion al boton de la vista nuevo ticket
//Liccener funcionando
$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
})