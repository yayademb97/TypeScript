// console.log('Hello world !!!');


//? Functions:


//* Avant d'introduire, imaginons que j'ai un callback:
// const callback: Function = (e) => {

// }

//* Solution: Il nous faudrat typer le paramètre défini.

//? Pour typer les paramètres d'une fonction avec TypeScript, 
//? c'est comme pour les variables, on met " : suivi dut type "

const callback = (e: MouseEvent) => {
    //* code à executer 
} 

//* Une fonction avec un type définitif:

//! 1. Function Déclaration:
function printId(id: number) {
    console.log(id);
    return id;
}

//! 2. Function Expression:
const greeting = (name: string) => {
    return `Hello ${name}`;
}

//* Invocation et appel de la fonction:

const printmyId = printId(123);
console.log(printmyId);

const helloJohn = greeting('John');
console.log(helloJohn);

//? Mot-clé pour la fonction de type de retour:
//! a ) Void: Pour signifier que la fonction ne retourne rien
const myFunction: Function = (name: string): void => {
    console.log(`Hello ${name}`);
}


//! b) Préciser le type de retour de la callback:

const handleClick: (e: MouseEvent) => void = (e: MouseEvent): void => {
    //* logique de la fonction ici
};

//! Note: TypeScript est capable de connaitre directement les types de base des valeurs

const myNumber: number = 123;
const myString: string = 'Hello';
const myBoolean: boolean = true;

//? Arrays:

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ['a', 'b', 'c', 'd'];

//*
const myNumberOne = 123;
const myStringOne = 'Hello';
const myBooleanOne = true;

const numbersOne = [1, 2, 3, 4, 5];
const stringsOne = ['a', 'b', 'c', 'd'];

const person = {firstName: "John", lastName: "Doe", email: "doe@example.com"};

console.log(myNumberOne, myStringOne, myBooleanOne, numbersOne, stringsOne, person);

// ! Notes 2: Dans certaines situations, TypeScript ne sera pas capable de définir le type
//* Example:
// const compteur = document.querySelector('#compteur');
//* TypeScript ⬆️: affichhera que ce type "compteur" est de type Element
//* const compteur: Element | null


//* je vais créer une valeur i = 0
// let i = 0;

// //* Je vais ensuite créer une fonction 
// const increment = (e:MouseEvent) => {
//     i++;
//     compteur.querySelector('span').innerText = i.toString();
// }

// compteur.addEventListener('click', increment);

//! Remarque: On sait que notre variable "compteur" est de type Boutton dans notre page HTML.
//! Alors, on pourrait utiliser l'assertion de type ,
//! Puisque c'est indiqué à TypeScript de quel type va etre ce retour.

//! 👇

//* 1️⃣ manière de spécifier le type:
// const compteur = document.querySelector('#compteur') as HTMLButtonElement

//! Alors , maintenant je peux peux voir qu'il me dit que ma variable "compteur" est de type HTMLButtonElement.


//!⚠️ Note ⛔: Attention 🚨📢🔔⚠️
//! On ne peut le dire un autre type différent du contexte.
//! Par exemple, que j'essaie de lui préciser que compteur est de Type "MouseEvent", il va me générer une erreur.

//* 2️⃣ manière de spécifier le type:
// const compteur = <HTMLInputElement>document.querySelector(".compteur");


//? Union Type: symbole 👉  ` | `
//* Imaginons que notre fonction printId attend un nombre ou un string

const printValue = (value: number | string) => {
    console.log(value.toString());
}

printValue(123);
printValue('Hello');


//! Résumé: Célà veut tout simplement avec le type Union,
//!         que notre variable sera soit du type number ou soit du type string.


//! Solution de notre compteur pour qu'il fonctionne:

// const compteur = document.querySelector('#compteur') as HTMLButtonElement;

// let i = 0;

// const increment = (e: MouseEvent) => {
//     i++;
//     compteur.querySelector('span').innerText = i.toString();
// }

//! 1ère debugging: Il m'affiche que la valeur peut-etre null
// if(compteur)
// {
//     compteur.addEventListener('click', increment);

// }

//! 2ème solution: avec ` ? `


const compteur = document.querySelector('#compteur') as HTMLButtonElement;

let i = 0;

const increment = (e: MouseEvent) => {
    e.preventDefault();
    i++;
    // compteur.querySelector('span').innerText = i.toString();  //* Error:  Object is possibly 'null'
    //* Resolution: Créons une variable span dont on va préciser qu'il porrait etre null
    const span = compteur?.querySelector('span');
    //! Note: À ce niveau il comprend que 'span' est de type: const span: HTMLSpanElement | null
    if(span)
    {
        span.innerText = i.toString();
    }
}
compteur?.addEventListener('click', increment);
