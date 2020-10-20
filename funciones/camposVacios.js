

// Funcion recibe un objeto de tipo cliente con todos sus atributos
const obtenerCamposVacios = (cliente) =>{

    // Se inicializa un objeto para actualizar con los campos vacios
    let campos = {
        numero: 0,
        nombre: ''
    };
    
    // Con la funcion regex de javascript podemos verificar que el atributo no tenga espacios vacios
     const regEx = new RegExp(' ', 'g');

     // Una vez que se tiene la expresion regex se compara con cada uno de los attrributos del cliente para poder realizar el conteo de campos vacios
     //ESTO ES LO QUE SE TIENE QUE MODIFICAR SEGUN LOS ATRIBUTOS DE CLIENTE DADOS POR LA PRUEBA
     const telefono = cliente.telefono.replace(regEx, '');     
     const prestamo = cliente.prestamo.replace(regEx, '');     
     const nombre = cliente.nombre.replace(regEx, '');     
     const apellido = cliente.apellido.replace(regEx, '');     
     const tarjeta = cliente.tarjeta.replace(regEx, '');     
     const email = cliente.email.replace(regEx, '');     
     const cuenta = cliente.cuenta.replace(regEx, '');     
     const deuda = cliente.deuda.replace(regEx, '');     
     const saldo = cliente.saldo.replace(regEx, '');     
     const buro = cliente.buro.replace(regEx, '');     
     const solicitudPrestamo = cliente.solicitudPrestamo.replace(regEx, '');     
     const password = cliente.password.replace(regEx, '');     


       // si el atributo viene en blanco se actualiza el objeto de campos vacios
       //ESTO ES LO QUE SE TIENE QUE MODIFICAR
        if(telefono == ''){
        campos.numero += 1;
        campos.nombre += 'telefono, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        //ESTO ES LO QUE SE TIENE QUE MODIFICAR
        if(email == ''){
        campos.numero += 1;
        campos.nombre += 'email, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        //ESTO ES LO QUE SE TIENE QUE MODIFICAR ...ETC
        if(prestamo == ''){
        campos.numero += 1;
        campos.nombre += 'prestamo, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(nombre == ''){
        campos.numero += 1;
        campos.nombre += 'nombre, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(apellido == ''){
        campos.numero += 1;
        campos.nombre += 'apellido, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(tarjeta == ''){
        campos.numero += 1;
        campos.nombre += 'tarjeta, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(cuenta == ''){
        campos.numero += 1;
        campos.nombre += 'cuenta, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(deuda == ''){
        campos.numero += 1;
        campos.nombre += 'deuda, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(saldo == ''){
        campos.numero += 1;
        campos.nombre += 'saldo, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(buro == ''){
        campos.numero += 1;
        campos.nombre += 'buro, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(solicitudPrestamo == ''){
        campos.numero += 1;
        campos.nombre += 'solicitudPrestamo, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(password == ''){
        campos.numero += 1;
        campos.nombre += 'password, '
        }
        
        // Una vez realizadas las comparaciones se regresa un objeto con el conteo
        return campos;

}


module.exports = {
    obtenerCamposVacios
};