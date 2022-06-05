"use strict";

//------------------------------------------------------------------------
// Récupération des produits de l'api
//------------------------------------------------------------------------ 
fetch("http://localhost:3000/api/products") // quand tu as la réponse donne le résultat en json.
.then(function (res) {
  return res.json();
}) // ce que l'on a reçu et qui a été traité en json sera appelé objetProduits
.then(function (objetProduits) {
  // donne moi des informations en console sur ce qui est récupéré sous forme tableau.
  console.table(objetProduits); // appel de la fonction d'affichage des produits

  lesKanaps(objetProduits);
}) // dans le cas d'une erreur remplace le contenu de titre par un h1 au contenu de erreur 404 et renvoit en console l'erreur.
["catch"](function (err) {
  document.querySelector(".titles").innerHTML = "<h1>erreur 404</h1>";
  console.log("erreur 404, sur ressource api:" + err);
}); //----------------------------------------------------------------------
// fonction d'affichage des produits de l'api sur la page index
//----------------------------------------------------------------------

function lesKanaps(index) {
  // déclaration de variable de la zone d'article
  var zoneArticle = document.querySelector("#items"); // boucle pour chaque indice(nommé 'article') dans index

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = index[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var article = _step.value;

      /* création et ajout des zones d'articles, insertion de l'adresse produit via chemin produit + paramètres(son id);
      la page index est http://127.0.0.1:5500/front/html/index.html donc la page du produit sera http://127.0.0.1:5500/front/html/product.html 
      (d'ou le ./product.html) pour rajouter son paramètre on met ? puis la clé (ici _id) associé (=) à sa valeur dynamique ${article._id} */
      zoneArticle.innerHTML += "<a href=\"./product.html?_id=".concat(article._id, "\">\n    <article>\n      <img src=\"").concat(article.imageUrl, "\" alt=\"").concat(article.altTxt, "\">\n      <h3 class=\"productName\">").concat(article.name, "</h3>\n      <p class=\"productDescription\">").concat(article.description, "</p>\n    </article>\n  </a>");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}