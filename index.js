import bootstrap from 'bootstrap';

async function rechercher() {

    const input = document.getElementById("name").value;
    
    const datas = await getFilm(input);
    const array = datas.results;
    const films = traitementData(array);    
    afficher(films);
}

async function getFilm(input) {   
    const site = "https://api.themoviedb.org/3/search/movie";
    const poster = "https://image.tmdb.org/t/p/original";
    const language = "fr-FR";
    const key = "0322b3239b80ac8dc0054aabfe2a8c3f";    
    const url = site + '?api_key=' + key + '&language=' + language + "&query=" + input;
    const response = await fetch(url);
    if (response) {
      var data = await response.json();
      return data;
    } else {
      return undefined;
    }
  }

function traitementData(films) {    
    const poster = "https://image.tmdb.org/t/p/original";
    let liste = [];
    films.forEach(e => 
    liste.push({
      titre: e.title,
      desc: e.overview,
      poster: e.poster_path ? poster + e.poster_path : "",
      pop: e.popularity
    })
  );
  return liste;

}


function afficher(liste) {
    var resultats = document.getElementById("resultat");
    resultats.replaceChildren();
    liste.forEach(livre => 
        resultats.innerHTML += "<div class='res'>" + "<br>" + 
      "<h3>" + livre.titre + "</h3>" +
      "<p>" + livre.desc + "</p>" +
      "<p>" + livre.pop + "</p>" +
      "<img class='affiche' src=" + livre.poster + ">"
      + "</div>"
      );
  }
