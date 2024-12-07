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
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
