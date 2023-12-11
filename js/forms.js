var cartao = $("#CC");

cartao.on("click", function() {

    var formulario = `
        <label for="nome_cartao">Nome no Cartão:</label>
        <input type="text" id="nome_cartao" name="nome_cartao" required><br><br>

        <label for="numero_cartao">Número do Cartão:</label>
        <input type="text" id="numero_cartao" name="numero_cartao" required><br><br>

        <label for="validade_cartao">Validade:</label>
        <input type="text" id="validade_cartao" name="validade_cartao" placeholder="MM/AA" required><br><br>

        <label for="cvv_cartao">CVV:</label>
        <input type="text" id="cvv_cartao" name="cvv_cartao" required><br><br>

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <input type="submit" value="Pagar">
    `;
    
    $("#cDc").html(formulario);

});