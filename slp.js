
function rand(n, m) {
    // Genera una matrice n x m con valori casuali tra -1 e 1
    return [...Array(n)].map(() => [...Array(m)].map(e => Math.random() * 2 - 1))
}

function dot_product(a, b) {
    // Calcola il prodotto scalare di due vettori
    if (a.length != b.length) {
        throw "Prodotto scalare non valido!";
    }
    return a.map((x, i) => x * b[i]).reduce((a, b) => a + b, 0); 
}

function get_col(b, i) {
    // Estrae la colonna i dalla matrice b
    return b.map(r => r[i]);
}

function matrix_mul(a, b) {
    // Esegue il prodotto tra due matrici
    const cols_a = a[0].length;
    const rows_b = b.length;

    if (cols_a != rows_b) {
        throw "Prodotto tra matrici non valido!";
    }

    return a.map((row, _) => b[0].map((_, i) => dot_product(row, get_col(b, i))));
}

function slp(X, W, f) {
    // Implementa un semplice strato percettrone (Single-Layer Perceptron)
    let t = matrix_mul(X, W);
    return t.map(v => v.map(x => f(x))); 
}

function sigmoid(x) {
    // Funzione sigmoide, usata come funzione di attivazione
    return 1 / (1 + Math.exp(-x));
}

const N = 10;
const num_features = 8;
const num_output = 1;

// Generazione dei dati di input e dei pesi
const X = rand(N, num_features);
const W = rand(num_features, num_output);

// Esecuzione del percettrone
console.log(slp(X, W, sigmoid));
