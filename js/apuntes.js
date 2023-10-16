//Formas de definir una regex:
const re = /ab+c/; //Más eficiente si no la vamos a cambiar
const re2 = new RegExp("ab+c"); //Más eficiente si vamos a ir cambiando su valor
const re3 = new RegExp("ab+c", 'i'); //Case insensitive

re3.compile("ab?c"); //Realmente esta deprecated, por tanto da igual que forma usar

//Ejecutar busqueda
re.exec("ertregdsabcvvffgfd");

//Checkea si se encuentra substring que cumple la regex en el string o no
re.test("ertregdsabcvvffgfd");

//Ejecutar busqueda (metodo de String)
"ppppppabcppppppabc".match(re);

//Buscar todas las coincidencias
const matches = "Lista: 1. Maria, 2. Alicia, 3. Natalia.".matchAll(/\d\.\s(\w*)[,|.]/g);

for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}

//Buscar el primer indice
"ppppppabcppppppabc".search(re);

//Reemplazar primera ocurrencia
"ppppppabcppppppabc".replace(re,"ddd");

//Reemplazar todas las ocurrencias
"ppppppabcppppppabc".replaceAll(/ab+c/g,"ddd");

//Splitear por regex
"ppppppabcppppppabcp".split(re);

//Ejercicio: Hacer tabla con todos los tipos de constructs y ejemplo con cada función