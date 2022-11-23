if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {scope: './'})
    .then((reg) => {
        // registration worked
        console.log('enregistrement réussi : ' + reg);
    }).catch((error) => {
        // registration failed
        console.log('enregistration erreur : ' + error);
    });
}