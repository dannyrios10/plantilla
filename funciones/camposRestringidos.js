
// Funcion recibe un objeto de tipo cliente con todos sus atributos
const obtenerCamposRestringidos = (cliente) =>{

    //Con la funcion regex de javascript podemos verificar que el atributo no tenga espacios vacios
    const regEx = new RegExp(' ', 'g');

    // Una vez que se tiene la expresion regex se compara con cada uno de los attrributos del cliente para poder realizar el conteo de campos vacios
    //ESTO ES LO QUE SE TIENE QUE MODIFICAR
    const password = cliente.password.replace(regEx, '');     
    const tarjeta = cliente.tarjeta.replace(regEx, '');     
    const saldo = cliente.saldo.replace(regEx, '');

    // si el atributo no viene en blanco se actualiza el objeto de y se restringe con asteriscos
    //ESTO ES LO QUE SE TIENE QUE MODIFICAR
    if(password !== ''){
        cliente.password = cliente.password.substring(-1,3) + '*****';
    }
    if(tarjeta !== ''){
        cliente.tarjeta = cliente.tarjeta.substring(-1,3) + '*****';
    }
    if(saldo !== ''){
        cliente.saldo = cliente.saldo.substring(-1,3) + '*****';
    }

    // Una vez realizadas las moodificaciones se regresa el objeto cliente modificado
    return cliente;

}




module.exports = {
    obtenerCamposRestringidos
};