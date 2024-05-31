//Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”                  
// Definimos la lista de nombres que nos facilita el enunciado. Utilizamos el bucle for para, primeramente iniciar a 0 el valor i.
// En este primer valor de i tomaremos el indice 0 de la lista y lo imprimirá "velma".
// El valor i se habrá visto incrementado, y mientras el valor i sea menor que los componentes de miLista, seguirá imprimiendo cada
// uno de los valores de miLista.

const miLista = ["velma", "exploradora", "jane", "john", "harry"];
                                           
for (let i = 0; i < miLista.length; i++) { 
  console.log(miLista[i]);                
}            