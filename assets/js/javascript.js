/* Debes pegar todo el código en main.js*/
var productos = [];
var records = document.getElementById('records');

// Constructor para generar un nuevo producto
function Producto(compra) {
  this.compra = compra.toLowerCase();
  this.producttID = (productos.length + 1);  
};

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
var addCompra = document.getElementById('print');
addCompra.onclick = function() {
  var product  = new Producto (document.getElementById('print'));
  productos.push(product);
  printHTML(product.toHTML());
  printHTML(mergeHTML());
};


//Método para imprimir un producto en html
Producto.prototype.toHTML = function () {
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  return html;
}



//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}



