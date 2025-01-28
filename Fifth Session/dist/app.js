"use strict";
//? ***************** Alias & Generic Type 5️⃣ *******************:
//! Problématique:
//! Dans certaines situations, certains types peuvent etre compliqués, qui serait penibles de se répéter, 
//! notamment à l'exemple précéndent au user qui avait une clé firstName, et lastName.  
//* Exemple: 
const a = "firstName";
const n = 3;
const b = true;
const arr = ['aze', 'aze', 'aze'];
const user = { firstName: "John", lastName: "Doe" };
const date = new Date();
const cb = (e) => {
    return 3;
};
//* Maintenant lorsque je souhaite utiliser ce type, je peux l'utiliser suivant cette méthode:
const johnPerson = { firstName: "John", lastName: "Doe" };
//* Utilisation :
const newDate = "string"; //* Il me permet de voir avec la nouvelle variable newDate de voir quel format peut-on avoir à l'intérieur
//! Rematque 2: Après avoir sauvegarder le fichier, nous constaterons dans app.js, que ces types-là ne sont pas présentes dans ce fichier 
//! en le convertissant en JavaScript.
//* type User = {firstName: string, lastName: string};
//* type DateString = string;
//* type Id = string | number;
//! Note: Tous ces types ne sont-là que pour aider TypeScript à comprendre notre code, mais ne seront pas exportés dans le code final.
//? ~~~~~~~~~~~~~~~~~~~~~ Generic Type 6️⃣ ~~~~~~~~~~~~~~~~~~~~~
//! Problématique:
//! La problématique des types génériques en TypeScript réside dans le besoin de créer des fonctions, 
//! classes ou structures réutilisables tout en conservant un typage strict et précis.  
//! Sans génériques, on est contraint de dupliquer le code ou de perdre en sécurité en utilisant des types larges comme "any", 
//! ce qui peut entraîner des erreurs difficiles à détecter.
//! Définition: Generic Types (types génériques) permettent de créer des composants réutilisables
//!            qui peuvent fonctionner avec différents types de données tout en restant fortement typés.
//* Explication simple :
//* Un type générique agit comme un paramètre pour les types, tout comme une fonction peut avoir des paramètres pour ses arguments. 
//* Cela permet de définir une logique qui fonctionne avec plusieurs types sans perdre la sécurité typée.
//* Exemple 1: Prenons une fonction de base qui s'appelle "identity", ne servant absolument à grandes choses, 
//* prenant un argument, et retourne cet eargument:
// function identity(arg) {
//     return arg;
// }    //* Alors par défaut, l'argument (arg) peut être de même type "any", et en retour, retourne "any"
function identity(arg) {
    return arg;
}
//* Testons cette fonction en l'invoquant:
const aa = identity(3);
//* Remarque: On remarqu'içi "aa": est de type "any", donc a perdu içi le type qui était passé en paramètre,
//* parce que lui il ne s'est fié à la signature de cette fonction, et elle n'est pas du tout pratique.
//! Note: Nous on aimerait bien lui-dire au faite, cette fonction là, prend (quelques choses), un type en entrée (input),
//! et c'est le même type qu'elle va donner en sortie (output).
//! On pourrait donner des sortes de paramètres à nos type "<>"
//* Exemple 1.1:
function identity1(arg) {
    return arg;
}
//* Testons la fonction:
const bb = identity1(3); //* On lui préciser que l'argument qu'il va recevoir est de type "number", une extension de argType:number.
console.log("Ma fonction de type Généric:", bb);
//* Remarque: Maintenant, "bb" est de type "number", comme on a précisé.
//* ~~~~~~~~~~~~~~~~~ Common Mistakes ~~~~~~~~~~~~~~~~~~~~~~~~
// const cc = identity1<number>("3") //? Output: error:  Argument of type 'string' is not assignable to parameter of type 'number'.
//! Déduction AUtomatique par TypeScript:
const cc = identity1(3); //* Içi TypeScript deduit automatique que notre "argType" est de type: "number"
//* Exemple 2: Avec un Tableau Array
function arrayIdentity(arg) {
    return arg;
}
//* Testons la fonction:
const dd = arrayIdentity([1, 2, 3, 4, 5]);
console.log("Ma fonction de type Généric pour un Array:", dd);
//? ~~~~~~~~~~ Types Generic Combinés ~~~~~~~~~~~~~~~~~~~~
function arrayIdentity1(arg) {
    return arg[0];
}
//* Testons la fonction:
const ee = arrayIdentity1(["aze", "bze", 3]);
//* ou 👇
const ff = ["aze", "bze", 3];
console.log("Ma fonction de type Généric pour un Array avec un type spécifique:", ee);
//? ~~~~~~~~~~~~~~~ Utilisation d'une contrainte au niveau de l'argument ~~~~~~~~~~~~~~~~~~~~~~
//* Exemple 4: Imaginons qu'on a une fonction qui se nomme "consoleSize", qui prend un argument,
//* qui va du coup avoir une propriété length, affichera la taille de l'argument (arg), 
//* et ensuite retournera l'argument (arg)
// function consoleSize(arg) {
//     console.log(`Taille de ${typeof arg}: ${arg.length}`);
//     return arg;
// }
//* Remarque: Au niveau de l'output, on remarque une erreur:
//? Output:
/*
* error TS7006: Parameter 'arg' implicitly has an 'any' type.
*/
//* Testons la fonction:
// const gg = consoleSize(3)
//? Output: 
/*
* error TS7006: Parameter 'arg' implicitly has an 'any' type.
*/
//* Comment resoudre:
//* Etape 1 de la resolution:
// function consoleSize1<Type>(arg: Type): Type { //* on ecrit un "Type", en lui disant que l'argument (arg) est du Type, et retourne le même Type.
//     console.log(`Taille de ${typeof arg}: ${arg.length}`); //*⛔⚠️ D'içi, il me dit que non, on a une erreur qui est dû à ce que "length" manque
//     return arg;
// }
//* Etape 2 de la resolution:
function consoleSize2(arg) {
    //* qui possède une clé "length" qui serait de type "number"
    console.log(`Taille de ${typeof arg}: ${arg.length}`);
    return arg;
}
//* Testons la fonction:
// const hh = consoleSize2(3)   //* IL me dit qu'on a une erreur, puisqu'on a une contrainte à ce niveau-là, 
//* alors on doit avoir quelque chose qui soit un argument length
const hh = consoleSize2(['3', 2]);
console.log("Ma fonction de type Généric pour un Array avec une contrainte:", hh);
function getProperty(user, key) {
    return user[key];
}
const user1 = {
    firstName: "John",
    lastName: "Doe"
};
console.log("Ma fonction de type Générique pour récupérer une propriété d'un objet :", getProperty(user1, "firstName"));
//? ~~~~~~~~~~~~~~~~~~ typeof de Generic : qui permet d'extraire un type à partir de quelques choses qui existent ~~~~~~~~~~~~~~~~~~~~~~~~
//* Exemple 7:
const newUser = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York, USA"
};
//* Si on envie d'extraire des types de ce variables , voici ce qu'on peut faire:
const oneUser = typeof newUser;
console.log("Mon type de newUser est :", oneUser); //? Output: Mon type de newUser est : object
