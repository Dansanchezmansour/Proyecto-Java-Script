// solicitamos un dato al usuario sobre su producto favorito - nombre de producto
// validamos que el nombre del producto exista
// si el producto existe, mostrar info de ese producto 
// volver a preguntar si se desea volver a buscar

let producto1 = 'big one'
let producto2 = 'bio neem'
let producto3 = 'bio protect'
let producto4 = 'roots house'
let producto5 = 'flora booster'
let producto6 = 'feeding'
let producto7 = 'super mix'
let producto8 = 'microscopio'

//solicitamos un dato al usuario sobre su producto favorito

let decision = prompt('escriba continuar si desea seguir eligiendo')
while(decision == 'continuar') {

    let productoElegido = prompt('Cuál es tu producto favorito?')

if(productoElegido == producto1){
    alert('has elegido el Big one con precio de $1990')
}
else if(productoElegido == producto2) {
    alert('has elegido el BioNeem con un precio de $750')
}
else if(productoElegido == producto3) {
    alert('has elegido el BioProtect con un precio de $890')
}
else if(productoElegido == '' || productoElegido == null) {
    alert('debes ingresar un producto')
}

decision = prompt ('escriba continuar si desea seguir elegiendo productos')
}
