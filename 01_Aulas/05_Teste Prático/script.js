function calculador(preco, desconto) {
    if (desconto < 10) {
        return preco + (preco * desconto / 100);
    } else {
        return preco - (preco * desconto / 100);
    }
}

function aplicarDesconto() {
    const precoOriginal = 100.00; // Preço original do produto
    const desconto = parseFloat(document.getElementById('desconto').value);
    const precoFinal = calculador(precoOriginal, desconto);
    document.getElementById('preco-final').textContent = precoFinal.toFixed(2);
}
