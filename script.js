document.getElementById('marriageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il refresh della pagina

    // Prendi il numero di ex inserito
    const exCount = parseInt(document.getElementById('exCount').value);

    // Formula per calcolare il valore del matrimonio (puoi cambiarla a tuo piacimento)
    // Ad esempio: ogni ex diminuisce il valore del matrimonio di 1.000€
    const baseValue = 100000; // Valore di base del matrimonio
    const penaltyPerEx = 2500; // Penalità per ogni ex
    const marriageValue = baseValue - (exCount * penaltyPerEx);

    // Mostra il risultato
    const resultDiv = document.getElementById('result');
    
    // Controlla se il valore finale è positivo o negativo
    if (marriageValue > 0) {
        resultDiv.textContent = `Il valore del matrimonio è: €${marriageValue}`;
    } else {
        resultDiv.textContent = "Il matrimonio non ha più valore!";
    }
});
