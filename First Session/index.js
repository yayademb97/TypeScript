//? TypeScript
//! Defintion: TypeScript est un super set JavaScript qu'on a rajouté des options supplémentaires, avec un système de typage statique.

//? Avantages de TypeScript
    //? 1. Pourquoi TypeScript?
//? Il nous permet de limiter les erreurs notament Uncaught TypeError: Cannot read properties of undefined(reading 'toLowerCase').
//? TypeScript nous permet de capturer ce genre d'erreur en amont.

    //? 2. Meilleure autocomplétion et documentation: Bien plus poussée que JSDoc

//? 3. Une simple ciblage: TypeScript peut-etre converti en ES3 ouESNext

//? Inconvéniant de TypeScript
    //? 1. Un Outil Supplémentaire: Il nous faut convertir nos fonctions TypeScript en JavaScript pour pouvoir les tester sur notre navigateur.
    
    //? 2. Ecosystème JavaScript: qui va pas faire bon ménage avec TypeScript, pour fonctionner TypeScript a besoin de connaitre 
    //?    le type de tout ce qui rentre dans notre code, le souci , si on utilise une librairie qui n'a pas été typée, TypeScript ne va pas comprendre
    //?    de quoi il en retourne, d'où ne vas pas marcher, et heuresement qu'on a quelques solution à celà:
                //? - Désctiver le typage pour cette variable là, et cette librairie là.
                //? - Soit il va falloir écrire un fichier de définition qui permettra d'expliquer à TypeScript à quoi ça ressemble.
    
                //? 3. Perdre en flexibilité: Avec JavaScript souvent on a des fonctions qui prennent des paramètres , 
    //?    et qui retournent souvent un object qui est très différent des paramètres, 
    //?    créant alors quelques choses qui est assez-imprévisile finalement quand on le lit.
    //?    Le problème est que TypeScript en a besoin des choses imprévisibles pour typer célà de manière statique, du coup, 
    //?    certaines fonctions ne vont pas etre possibles de les écrire en TypeScript, et ducoup on va perdre en flexibilité.
    //?    La solution serait de modifier notre code ou de désactiver (qui n'est pas conseillée) la vérification de type.

    //? 4. Code moins lisible: Parfois le code peut-etre moins lisible vu qu'on va mélanger la déclaration de type avec le code, 
    //?    on aura quelques choses de plus complexes à lire.
    //?    Exemple: document.qquerySelector<HTMLInputElement | HTMLTextareaElement>(".form-control");

//* Comment l'Utiliser?
    //* Conversion en JavaScript
        //* - TypeScript (tsc)
        //* - Webpack (ts-loader)
        //* - Parcel
        //* - ESBuild
        //* - Vite (via ESBuild)

    //* Alors, on le 1er outil qui est le "checker" qui verifiera que notre code ne comporte pas d'erreur.
    //* On le 2ème qui est le "compiler" qui va convertir notre code TypeScript en JavaScript.
    //* Et enfin on peut utiliser un outil comme Babel pour transformer notre code JavaScript en ES5 ou ES6.