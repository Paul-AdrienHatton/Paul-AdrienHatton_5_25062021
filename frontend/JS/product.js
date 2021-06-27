/* Récupération de l'id du produit sélectionné dans la page précédente */
const productId = window.location.search.substr(1);

/* Récupération du produit avec l'id associé depuis le serveur */

fetch(`http://localhost:3000/api/teddies/${productId}`)
  .then((response) => response.json())
  .then((response) => {
    let html = "";
    // Affichage du produit
    html += `<h1 class="row">${response.name}</h1>
        <p class="row"><img src="${
          response.imageUrl
        }" alt="image d'ours en détails" style="width:75%; border-radius:5px;"></p>
        <p class="row">${response.description}</p>
        <p class="row"><b>Prix: ${(response.price / 100)
          .toFixed(2)
          .replace(".", ",")}€</b></p>
        <!-- Personalisation de la couleur -->
        <label for="select__color">
            <h3>Personnaliser votre ours</h3>
        </label>
            <select class="color__choice" name="colors" id="select__color">
            <!-- Mes choix de couleurs dans la function forEach --!>
            </select>
        <button>Ajouter au panier</button>`;
    document.getElementById("items").innerHTML = html;

    //Création d'une function foreach pour afficher les choix de couleurs
    let choice = document.querySelector(".color__choice");

    response.colors.forEach((colors) => {
      let option = document.createElement("option");
      option.value = colors;
      option.textContent = colors;
      choice.appendChild(option);
    });
  });
