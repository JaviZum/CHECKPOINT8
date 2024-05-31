//Cree un bucle while que recorra la misma lista y también imprima los nombres. 
//Nota: Recuerda crear un contador para que el ciclo no sea infinito.

// Definimos la lista de nombres.
// Inicializamos el contador i.
// Usaremos el bucle while para recorrer cada nombre en la lista e imprimirlo.
// Al final, incrementamos el contador para evitar un bucle infinito con i++.
const miLista = ["velma", "exploradora", "jane", "john", "harry"];


let i = 0;

while (i < miLista.length) {
  console.log(miLista[i]);
  i++; 
}
