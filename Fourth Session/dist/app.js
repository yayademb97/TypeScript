"use strict";
//? ***************** Narrowing Type 4️⃣ *******************:
//? Narrowing Type: est un système qui permet à TypeScript d'éléminer des cas,
//?                 et de reduire les types possibles pour nos variables.
//* Example de Narrowing utilé dans le cas précédent:
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    //* Lorsqu'on a fait cette condition ici , on lui spécifie :
    //* si la `span` existe, on veut faire 👇:
    if (span) {
        span.innerText = i.toString(); //* actuellement `span` est de type HTMLSpanElement || null || ou undefined
    }
    //* En faite lorsqu'on fait cette condition, TypeScript est capable de dire "oui",
    //* mais vu que cette condition est remplie, ça veut dire , qu'on ne peut pas etre dans le cas null et undefined,
    //* donc le type de Span est de "HTMLSpanElement"
    //! Note: Donc à l'interieur de notre condition içi, on aura quelques chose de type "HTMLSpanElement"
    //!       Et c'est ce qui a permis à TypeScript de comprendre le code mis à l'interieur de la condition "if"
    //!       était valide
};
//? 1. Typeof avec Narrowing:
//* Exemple 1: une fonction printId qui attendait un id en paramètre (qui peut-etre de type string ou number)
//* Cette fonction, on lui demande d'éffectuer quelques choses sur les strings,
//* et quelques choses differents sur les numbers
function printId(id) {
    if (typeof id === 'number') {
        //* Dans ce cas essayer de le mutiplier par 2:
        console.log((id * 3).toString()); //* 👈 Il comprend qu'à ce niveau l'id est devenu number
    }
    else {
        //* Dans ce cas, il se souvient que l'id n'est pas un number 
        //* et il peut donc appeler une fonction qui attend un string
        console.log(id.toUpperCase()); //* 👈 Il comprend qu'à ce niveau l'id est devenu string
    }
    //! Note : Dans cet exemple , on a eu à avoir du Narrowing grace à `typeof`
}
//* Exemple 2: Déclarons une fonction appélée `nextExample` qui attend 2 paramètres:
//* l'une `a: de type string ou boolean`, et le deuxième `b: de type string ou number`
function nextEXammple(a, b) {
    //* Dès le début on lui dit si `a = b`, on va faire quelques choses:
    if (a === b) {
        //* Içi à l'interieur de la condtion, il comprendra que a est de type string
        //* Puisque le second paraèmètre `b: string`, comme ils sont égaux `a = b`,
        //* TypeScript déduira à prendre le type en commun aux deux paramètres.
        console.log(`Les deux valeurs sont égales et de type string: ${a.toUpperCase()} et ${b.toLowerCase()}`);
    }
    else {
        console.log("Les deux valeurs ne sont pas égales.");
    }
}
function newExample(a, b) {
    if (a === b) {
        console.log(`Les deux valeurs sont égales et de type string: ${a}`);
    }
    else if (typeof a === "boolean" && typeof b === "number") {
        console.log("a est un booléen et b est un nombre.");
    }
    else if (typeof a === "string" && typeof b === "number") {
        console.log("a est une chaîne de caractère et b est un nombre.");
    }
    else {
        console.log("Autres cas.");
    }
}
//* testing 
nextEXammple("hello", "hello"); //* Doit détecter que a et b sont égaux et des strings.
nextEXammple(true, 42); //* Doit afficher que a est un booléen et b un nombre.
nextEXammple("hello", 42); //* Doit gérer a comme une chaîne et b comme un nombre.
nextEXammple(false, "false"); //* Doit tomber dans un autre cas.
console.log("------------------------------------------");
newExample("hello", "hello"); //* Les deux valeurs sont égales et de type string: hello
newExample(true, 42); //* a est un booléen et b est un nombre.
newExample("hello", 42); //* a est une chaîne et b est un nombre.
newExample(false, "false"); //* Autres cas.
newExample("42", 42); //* Autres cas (si "42" est une chaîne et 42 un nombre).
//? 2. Instanceof avec Narrowing:
//* Exemple 3:
function thirdExample(a) {
    if (a instanceof Date) {
        console.log(`Cette valeur est une date: ${a.toLocaleDateString()}`);
        //! Note 👇: Il sait que `a` est une date
        //!  `instanceof`: en TypeScript est utilisé pour vérifier si un objet est une instance d'une classe,
        //!  ou si son prototype existe dans la chaîne de prototypes de l'objet. 
        //!  C'est particulièrement utile pour travailler avec des objets personnalisés ou des classes.
    }
    else {
        //! Note 👇: Il sait que `a` est une type de données qui est `string` dans notre contexte.
        console.log(`Cette valeur n'est pas une date: ${a}`);
    }
}
//* testing:
thirdExample(new Date()); //* Doit afficher une date.
thirdExample("hello"); //* Doit afficher une autre chose.
//? Array.isArray() with Narrowing
//* Exemple 4:
function forthExample(a) {
    if (Array.isArray(a)) {
        //! Note 👇: Içi il sait que `a` est un tableau avec l'opearteur isArray.
        //! Array.isArray() fonctionne exactement de la même manière qu'en JavaScript, 
        //! mais grâce au système de types, TypeScript peut aussi en tirer parti pour affiner les types (type narrowing). 
        //! Cela permet à TypeScript de "savoir" que la valeur est un tableau après avoir utilisé Array.isArray(), 
        //! ce qui est particulièrement utile. 
        //* Example: Essayons de retourner comme c'est un tablea le premier élémen du tableau
        return a[0];
    }
    return `Cette valeur n'est pas un tableau: ${a}`;
}
//? MouseEvent an HTMLInputElement with Narrowing
//* Example: Créons une fonction appélée fifthExample 
//* qui reçevra en paramètre soient une variable de type MouseEvent, 
//* ou de type HTMLInputElement
function fifthExample(a) {
    //! À Savoir que:
    //! * MouseEvent: Events that occur due to the user interacting with a pointing device (such as a mouse). 
    //!   Common events using this interface include click, dblclick, mouseup, mousedown.
    //! * HTMLInputElement: Provides special properties and methods for manipulating the options, layout, and presentation of elements.
    if ("value" in a) {
        //* Là , il me dit que `a` est de type HTMLInputELement parce que dans les deux (02) objets 
        //* `MouseEvent`, et `HTMLInputElement`, 
        //* le seul objet qui dispose des clé-values est l'objet `HTMLInputElement` 
        //* Alors, du coup il est capable de réduire la portée aavec du Narrowing et capable de detecter que `a` est de ce type.
        return a;
    }
}
//? Cas Particulier `type never`
function typeNever(a) {
    if ("azazazazaz" in a) {
        return a; //* Ici `a` est de type `never` puisque la valeur "azazazazaz" n'est ni de type MouseEvent
        //* ni de type HTMLInputElement pré-défini comme valeur attendue du paramètre
    }
}
//? Cas d'une Fonction Spécifique:
//* Exemple 6: Créons une fonction qui se nommme sithExample qui prendra en paramètre 
//* une variable de type `any` , dont elle retournera si c'est une `Date` ou pas
function sithExample(a) {
    return a instanceof Date;
}
//? De cet exemple, en le testant au niveau de l'union de type
function myExample(a) {
    if (sithExample(a)) {
        return a; //! Note: Il détecte automatiquement que `a` est de type `Date` puisque la condition dans 
        //! dans l'exemple `sixthExample` le prouve
    }
}
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
//! Résumé des Principes de Type Narrowing
//! Le Type Narrowing en TypeScript permet de réduire la portée des types possibles d'une variable grâce à des conditions logiques ou des méthodes spécifiques. 
//! Cela aide TypeScript à comprendre le type exact à un instant donné dans le code, 
//! rendant le typage plus sûr et précis.
//? On peut déduire de tout célà les 7 notions d'examples:
//? 1.  Narrowing avec typeof.
//? 2.  Narrowing avec instanceof.
//? 3.  Narrowing avec Array.isArray().
//? 4.  Narrowing avec propriétés spécifiques (in).
//? 5.  Narrowing avec des fonctions spécifiques (type predicates).
//? 6.  Cas particulier avec le type never.
//? 7.  Exemple combiné.
