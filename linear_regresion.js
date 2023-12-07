let peso = Math.random() * 20 - 10;

function train(w, j, y) {
    // Implementazione di un semplice algoritmo di addestramento
    for (let i = 0; i < 4; ++i) {
        console.log((i + 1) + "° epoca");

        let dm = 2 * w * (j * j) - 2 * j * y;
        console.log("La pendenza della retta tangente al punto è: " + dm);
        console.log(w + ' ' + (-0.1 * dm) + ' ');
        w = w - 0.1 * dm;
        console.log("nuovo peso: " + w);
    }
    console.log("La funzione trovata è: y = " + w + "x");

    let T = [0, 2, 4, 5, 6, 7];
    console.log(T.map(x => x * w));
}

// Stampa del peso generato e dell'esecuzione dell'addestramento
console.log("È stato generato il peso " + peso);
console.log(train(peso, 2, 4));
