/*
Ejercicio 4

1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto
 y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.

*/


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
    for(let i=0; i<array.length;i++)
        if(array[i]===text){
            return i 
        }
}

function removeItem(array, item){
    const index = findArrayIndex(array, item);
    if(index !== undefined){
        array.splice(index, 1);
        return array;
    }
}

function addItem(array, item){
    const index = findArrayIndex(array, item);
    if(index === undefined){
        array.push(item);
        return array;
    }
}



console.log(findArrayIndex(mainCharacters, "Luke")); 
console.log(findArrayIndex(mainCharacters, "Han Solo")); 
console.log(findArrayIndex(mainCharacters, "Chewbacca")); 
console.log(findArrayIndex(mainCharacters, "Obi-Wan")); 
console.log(findArrayIndex(mainCharacters, "Yoda")); 

console.log(removeItem(mainCharacters, "Leia"),removeItem(mainCharacters, "Rey"),removeItem(mainCharacters, "Han Solo")); 
console.log(addItem(mainCharacters, "Leia"),addItem(mainCharacters, "Rey"),addItem(mainCharacters, "Han Solo")); 
