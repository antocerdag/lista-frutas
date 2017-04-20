/* Debes pegar todo el código en main.js*/
var productos = [];
var records = document.getElementById('records');

// Constructor para generar un nuevo producto
function Producto(compra) {
  this.compra = compra.toLowerCase();
  this.producttID = (productos.length + 1);
};

// Cuando hacen click en el boton , se añade al array de productos
var addCompra = document.getElementById('print');
addCompra.onclick = function() {
  var product  = new Producto (compra);
  productos.push(product);
  printHTML(product.toHTML());
};


//Método para imprimir un producto en html
Producto.prototype.toHTML = function () {
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  return html;
}

//Función que une todas las compras guardadas en el array productos
function mergeHTML (){
  var html = '';
  for (var i=0; i<productos.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}



// al hacerle click a mostrar todas las compras, imprime todo lo que está en el array
  printHTML(mergeHTML());
}



