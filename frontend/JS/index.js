// Récupération des données ours en peluches avec l'API fetch

fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((response) => {
    console.table(response);

    //Variable ou seront injecter les elements
    let html = "";

    // Boucle pour récupére toutes les variables des produits
    // on déclare la valeur de i
    // on déclare jusqu'ou on boucle (tant que i est inférieur à response.lenght, la boucle continue)
    // on incrémente i si la condition 2 n'est pas remplie
    for (let i = 0; i < response.length; i++) {
      console.log(response[i].name);

      //Html à injecter, Création des élément, clone de l'api
      html += `<li class="item">
      <h2 class="row">${response[i].name}</h2>
      <p class="row"><img src="${
        response[i].imageUrl
      }" alt="Images ours" style= "width:500px;"></p>
      <p class="row">${response[i].description}</p>
      <p class="row">${(response[i].price / 100)
        .toFixed(2)
        .replace(".", ",")} €</p>
      <a class="row" href="./product.html?${response[i]._id}"<button>Choisir ${
        response[i].name
      }</button></a></li>`;
    }

    // Ajouter mes element créer dans le HTML pour afficher mes produits
    document.getElementById("teddy_bear").innerHTML = html;
  });
