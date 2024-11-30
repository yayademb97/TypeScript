//? Installation de TypeScript:

//* Dans ce chapitre , nous allons voir comment installer et utiliser TypeScript.


//! Pré-requis pour ce chapitre:
    //* Etre à l'aise avec JavaScript
    //* Etre Familier avec l'environement NodeJS et NPM.


//! Step 1:Commençons par initialiser notre project à l'aide la commande :
            //! npm init -y
//! Step 2: Installer la dépendance TypeScript
            //! npm install typescript --save-dev: 
            //! (c'est à dire qu'on précise que c'est une dépendance de developpement "--save-dev")
            //! Automatiquement générera le dossier "node_modules", 
            //! et dans le fichier "package.json": "devDependencies": { "typescript": "version_de_typescript" }


//* Example: Créons un fichier index.html, qui a un container dans lequel se trouve un boutton qu'on veut incrémenter.
//* On va ensuite créer un nouveau fichie qu'on appelera "app.ts"
//! Par defaut , ce fichier "app.ts" ne pourrait pas etre exécuté par le navigateur par defaut, 
//! vu qu'il ne peut executer que du JavaScript

//! Alors, pour le convertir, ce fichier "app.ts", on va dévoir utiliser la commande:
            //!   `npm tsc app.ts` : qui ensuite automatiquement va générer un autre fichier "app.js", 
            //!   qui va contenir le meme code mais convertit en JavaScript

//! Au niveau de mon fichier "index.html", je vais demander à lier le fichier JavaScript qui est "app.js":
            //! <script src="app.js"></script>


//! Step 4: On peut executer notre code TypeScript avec LiveServer.
//* Et alors on peut remarquer que "Hello" s'affiche en console du DOM

//! Step 5: Je vais déplacer le fichier "app.ts" dans un nouveau dossier que je vais appeler "src",
//!         tout en spécifiant que la distination serait un nouveau dossier appélé "dist",
//!         avec la commande --outDir (Voir documentation TypeScriptt).
                    //! `npx tsc src/appp.ts --outDir dist`, 
//!         et automatiquement générera un nouveau dossier dans mon projet "dist" avec un fichier "app.js"
//! Et alors je vais spécifier le chemin exact dans "index.html" en mettant `dist/app.js`


//! Step 6: On va ensuite créer un fichier de configuration dans notre dossier du projet,
//!        qui va mettre en place des commandes qui s'appelle "tsconfig.json" qui contient les informations,
//!        pour compiler le projet.


//! Step 7: On peut lancer avec les commandes suivantes:
                    //! `npx tsc`: qui va compiler le fichier dans le bon dossier.
                    //! `npm tsc --watch`: va automatiquement se lancer en mode observateur, 
                    //!  et dès qu'il y'aura des modifications sur notre tsconfig ou app.ts, 
                    //!  il va le relancer la compilation.


//! Step 8: La cible, on va écrire du code dans "app.ts", et on essayer de s'imaginer un peu,
//!         qu'est-ce qu'on peut faire pour cet exemple en donnant par exemple dans ce cas spécifique,
//!         un "id" qui se nommera "compteur" dasn "index.html".