

//? ***************** Narrowing Type 4️⃣ *******************:

//? Narrowing Type: est un système qui permet à TypeScript d'éléminer des cas,
//?                 et de reduire les types possibles pour nos variables.

//* Example de Narrowing utilé dans le cas précédent:
const compteur = document.querySelector('#compteur') as HTMLButtonElement;

let i = 0;

const increment = (e: MouseEvent) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if(span)
    {
        span.innerText = i.toString();
    }
}
compteur?.addEventListener('click', increment);