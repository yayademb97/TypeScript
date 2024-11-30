//* Maintenant, pour l'instant on va juste se contenter de mettre :
//  console.log('Hello')


//* Dans app.ts 
const compteur = document.querySelector('#compteur');

//* je vais créer une valeur i = 0
let i = 0;

//* Je vais ensuite créer une fonction 
const increment = (e) => {
    i++;
    //* on va essayer de changer la valeur '0' du span en "i", 
    //* alors on aura un problème de conversion puisqu'on essaie de changer un "number" en "string".
    //* Il nous faudra convertir:
    compteur.querySelector('span').innerText = i.toString();
}

compteur.addEventListener('click', increment);

