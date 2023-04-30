import React from 'react';
import logo from '../assets/images/logo.png';
import sweat from '../assets/images/shop/sweat_gris.png';
import tShirt from '../assets/images/shop/tshirt_blanc.png';


function Shop() {
  return (
    <>
        <h1 class="title-shop">Produits dérivés</h1>     
        
        <main>
            <section class="produit">
                <img src={sweat} alt="Sweat gris homme"/>
                <p>Sweat gris homme</p>
                <p class="prix">$49.99</p>
            </section>

            <section class="produit">
                <img src={tShirt} alt="T shirt gris homme"/>
                <p>T shirt gris homme</p>
                <p class="prix">$29.99</p>
            </section>

            <section class="produit">
            </section>
	    </main>
    </>
  );
}

export default Shop;
