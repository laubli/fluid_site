import React from 'react';
import logo from '../assets/images/logo.png';
import boite from '../assets/images/Boite_Fluide.png';
import boite_dos from '../assets/images/Boite_Fluide_Back.png';
import plateau from '../assets/images/rendu_arnold_plateau.png';


function Accueil() {
  return (
    <>
      <header>
          <img src={logo} alt="Logo"/>
      </header>

      <main>
        <section class="presentation">
          <h2>Présentation</h2>
          <p>Fluid of Mana c'est un jeu de carte qui se base sur un Univers entièrement fictif. Des dragons, des elfes, des divinités mais aussi des lieux et décors majestueux ou même étranges ont été créés dans un monde fantastique-médiéval.</p>
          <p>C'est un jeu en affrontement 1 contre 1, les joueurs sont poussés à la stratégie et à la réflexion et les règles sont simples et facilement compréhensibles</p>
        </section>

        <section class="plateau">
          <h2>Boite de jeu</h2>
          <p>Voici à quoi ressemble la boite de jeu pour le jeu de carte :</p>
          <img src={boite} alt="Plateau de jeu"/>
          <img src={boite_dos} alt="Plateau de jeu derière"/>
        </section>

        <section class="regles">
          <h2>Règles</h2>
          <p>Pour commencer la partie, chaque joueur doit tout d'abord préparer son plateau. En observant un petit peu, on voit que chaque joueur à 15 points de vie, et que chaque rempart (que nous développerons plus tard) en possède 10.</p>
          <p>Fluid of mana est un jeu de carte utilisant un système de mana pour pouvoir développer ses troupes, au tour 1 on commence avec 1 point de mana, qui augmente de tours en tours jusqu’à un maximum de 10. Chaque tour, le mana est remis à son maximum actuel, alors pensez à bien optimiser chacun de vos tours pour ne pas perdre de mana inutilement !</p>
          
          <h3>Déroulement de la partie :</h3>
          <p>Au premier tour, chaque joueur reçoit 5 cartes de son deck, il est possible, avant que la partie ne commence, d’échanger une ou plusieurs cartes de sa main avec son deck, on appelle ça un Mulligan.</p>
          <p>Chaque joueur pioche une nouvelle carte à chaque tour.</p>
          <p>Un joueur peut jouer autant de sorts qu’il souhaite par tour, tant que son mana lui permet d’agir.</p>

          <h3>Zoom sur les types de cartes :</h3>
          <div class="cards">   
            <div class="card">                     
              <h4>Unité : </h4>
              <p>Ce sont les cartes principales de votre deck, elles se placent sur le plateau, et ont un nombre de points de vie et d’attaque définis. Ces cartes peuvent avoir un effet spécial, toujours écrit sur cette dernière. </p>
              <p>Il y a plusieurs types d’unités (Guerrier, mage, nécromancien, assassin) qui ont eux-mêmes plusieurs raretés : Soldat, Contremaitre, Roi, Légendaire.</p>
              <p>Chaque joueur ne peut poser qu’une carte Roi à la fois, et il ne peut y avoir qu’une carte légendaire à la fois sur le terrain, donc si vous voulez poser la votre et que votre adversaire en à déjà posé une, détruisez la sienne avant.</p>
            </div>   
              <div class="card">   
              <h4>Sortilèges :</h4>
              <p>Ces cartes bleues sont des cartes à effet instantané, une fois jouées, défaussez-les. </p>
              <p>Un effet de sort ne peut pas être annulé.</p>
            </div>   
            <div class="card">   
              <h4>Supports :</h4>
              <p>Ces cartes spéciales se placent à côté de la vie du joueur sur le plateau et sont intouchables sauf par des actions "détruire un support ennemi". </p>
              <p>Elles sont soit à effet constant (ex : donne +1 d'attaque à toutes les créatures alliés) ou possèdent un nombre d'utilisation limité tel que 3 ou 4 et sont défaussées après leur utilisation.</p>
            </div>
          </div>

          <h3>Développement sur le plateau et les remparts :</h3>
          <div class="flex"> 
            <div class="plateau-text">
              <p>Le plateau est constitué de plusieurs rangées séparées par des remparts. Le but, c'est de détruire les remparts ennemis pour arriver jusqu'à la vie de votre adversaire.</p>
              <p>Pour ce faire, vous devrez invoquer des troupes, utiliser des sortilèges et vous adapter au terrain mis en place sur le plateau.</p>
              <p>Vous pourrez invoquer un maximum de 4 cartes par rangées.</p>
              <p>Au début de la partie, il est plus intéressant de poser ses unités au milieu du plateau, sur le champ de bataille, puis, de petit à petit, défendre son territoire en développant des unités derrière vos remparts.</p>
              <p>Pour pouvoir infliger des dégâts aux remparts de votre adversaire avec une créature, il vous faut d'abord (sauf effet le permettant) détruire l'unité ennemie se trouvant face à elle. Note : une créature peut tout à fait attaquer n'importe quelle autre créature ennemie tant qu'elles ne sont pas séparées par un rempart (sauf effet le permettant).</p>
              <p>Une fois un rempart détruit, vous avez la possibilité de poser des unités sur la rangée appartenant à la base à votre adversaire, mais pour cela, il faut d’abord détruire toutes les unités de votre adversaire.</p>
              <p>ATTENTION ! Il est interdit de poser des unités sur la dernière rangée, derrière la 2e rempart adverse, afin que votre adversaire puisse toujours jouer. </p>
              <p>Une fois les 2 remparts ennemis détruits, il ne reste plus qu'à vaincre vôtre ennemi sans défense ! Mais attention ! Votre adversaire peut tout à fait vous faire reculer et reprendre l'avantage sans ses remparts ! Rien n'est jamais joué avant la fin !</p>
            </div>
            <div class="plateau-img">
              <figure>
                <img src={plateau} alt="plateau"/>
                <figcaption>Plateau de jeu</figcaption>
              </figure>              
            </div>
          </div>   
          <h3>Spécificités de gameplay :</h3>
          <p>Les unités ne peuvent pas attaquer d’autres unités postées derrière un rempart, sauf les assassins et les cartes ayant un effet qui le permet.</p>
          <p>Un deck ne peut pas avoir plus de 30 cartes.</p>
          <p>Si un joueur ne peut plus piocher car il n’a plus de cartes, alors il perd la partie.</p>
        </section>

      </main>

      <footer>
        <p>&copy; 2023 Fluid of Mana</p>
      </footer>
    </>
  );
}

export default Accueil;
