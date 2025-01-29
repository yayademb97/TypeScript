"use strict";
//? ~~~~~~~~~~~~~~~~~~~~~ TypeScrirpt: Notion de Class ~~~~~~~~~~~~~~~~~~~~~
//! ~~~~~~~~~~~~~~ Notion de Readonly ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//! Definition: "Readonly" est une propriété qu'on peut être rajouter d'un type, qui permet, comme l'indique son nom, 
//! de préciser que le type est en lecture seule.
//* Exemple: Essayons de créer une fonction appélée "reverse" qui permet d'inverser un tableau
function myReverse(arg) {
    return arg.reverse(); //* içi, le problème de cette méthode si on est déjà habitué à faire du JavaScript, 
    //* est que malheureusement modifie le tableau, 
    //* qui pourrait créer problème au niveau de la suite de l'exécution de notre programme.
}
//! Note: Alors c'est qu'on peut faire est de préciser qu'une propriété est en "Readonly" (lecture seule)
//!       ET dans ce cas , ça nous indiquera au niveau de notre fonction, 
//! que le type de l'argumrnt ou propriété ne pourrait être modifiées.
//! Alors, dans notre exemple, dans le cadre d'un tableau, on ne peut ni faire de push, reverse,
//! ou quoi que ce soit qui modifierait le resultat.
//! Dernièrement, au niveau du retour aussi, si on veut que le retour ne soit modifiées , 
//! on puisse préciser qu'il est aussi "Readonly".
//! Dans ce cas-là pour notre exemple avec le tableau il nous faut créer une copie de l'ancien tableau, avec "[...]",
//! pour pouvoir reverser ces éléments dans le nouveau tableau.
function reverse1(arg) {
    return [...arg].reverse();
}
//* Note: Cette fois-ci, si on essaye de modifier le contenu du tableau après avoir utilisé "reverse",
let arr = [1, 2, 3, 4];
let reversedArr = reverse1(arr);
console.log("Mon Tableau après révérsé ces éléments sont les suivants:", reversedArr);
console.log("Original array:", arr); //* Should print: [1, 2, 3, 4]
console.log("Reversed array:", reversedArr); //* Should print: [4, 3, 2, 1]
//? ~~~~~~~~~~~~~ Class in TypeScript ~~~~~~~~~~~~~~~~~~~~~
//! Les classes en TypeScript fonctionnent comme avec du JavaScript classique.
//* Exemple : Créons une classe "A", tout en définissant à l'intérieur de cette classe ces différentes propriétés et méthodes.
//! Note: TypeScript avec les classes, se calquent qsur les nouvelles fonctionnalités JavaScript
//? ~~~~~~~~~~~~~ a) Déclaration d'une classe:
class A {
    constructor() {
        //* **** Déclarons prémièrement une propriété "A", qui aura comme valeur 
        this.a = 3; //* ou directement a = 3
    }
}
//! Note: La pétite particularité avec les notions de classe en TypeScript, 
//! est qu'on va pouvoir rajouté un modificateur devant nos variables là, pour pouvoir spécifier sa visiblité, 
//! et du coup fonctionnera comme dans un language de programmation orienté-objet classique (Java, C#, etc...).
//? ~~~~~~~~~~~~~ b) Type de Visiblité:
//? TypeScript dispose de trois (3) types de visibilité, tels que "private", "public", 
//? ****** a.1) "Private Property": est une propriété qui ne peut être accéder qu'à l'intérieur de la classe.
class B {
    constructor() {
        this.b = 3; //* Cette propriété ne peut être accédée que dans la classe B
    }
}
//* Exemple d'illustration: Créons une instance appélée "aInstance", et essayons d'accéder à la valeur de cette propriété "b".
const aInstance = new B();
// console.log(aInstance.b); //? Output: error TS2341: Property 'b' is private and only accessible within class 'B'.
//! Remarque: De la même manière, nous pouvons accéder cette propriété que l'intérieur d'une méthode définie dans cette classe.
//* Exemple :
class newA {
    constructor() {
        this.newB = 3;
    }
    //!*** Method log that allow us to display the property that we defined.
    lognewB() {
        console.log(this.newB);
    }
}
//* Testons célà:
const newAInstance = new newA();
newAInstance.lognewB(); //? Output: 3
//? ****** a.2) "Public Property": est une propriété qui peut être accéder de n'importe où dans le code de notre application.
class C {
    constructor() {
        this.c = 3; //* Cette propriété peut être accédée de n'importe où dans le code de notre application
    }
}
//? ****** b) Méthodes:
