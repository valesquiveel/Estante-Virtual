var cartao = $("#CC");

cartao.on("click", function() {

    var formulario = `
        
        <label for="nome_cartao">Nome no Cartão:</label>
        <input type="text" id="nome_cartao" name="nome_cartao" required>

        <label for="numero_cartao">Número do Cartão:</label>
        <input type="text" id="numero_cartao" name="numero_cartao" required>

        <div>
            <div>
                <label for="validade_cartao">Validade:</label>
                <input type="text" id="validade_cartao" name="validade_cartao" placeholder="MM/AA" required>
            </div>
            <div>
                <label for="cvv_cartao">CVV:</label>
                <input type="text" id="cvv_cartao" name="cvv_cartao" required>
            </div>
        </div>

        <div>
            <div>
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
        </div>

        <input type="submit" id="btn" value="Pagar">
    `;
    
    $("#cDc").slideUp(1000, function() {
        $(this).html(formulario).slideToggle();
    });
    
});

var pix = $("#pix")

pix.on("click", function(){
    var formulario2 = `<input type="button" value="GERAR CÓDIGO QR" id="gerar-codigo">
    <span id="codigo"></span>`

    $("#cDc").slideUp(1000, function() {
        $(this).html(formulario2).slideToggle();

        $("#gerar-codigo").on("click", function(){
            var codigoQR = `<img id="img-codigo" src="../images/Fim Compras/QR.png">`
            $("#codigo").html(codigoQR);
        })
    });

    
});

var boleto = $("#boleto")

boleto.on("click", function(){
    var formulario3 = `<label for="nome_completo">Nome Completo:</label>
    <input type="text" id="nome_completo" name="nome_completo" required>

    <label for="cpf">CPF:</label>
    <input type="text" id="cpf" name="cpf" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="endereco">Endereço:</label>
    <input type="text" id="endereco" name="endereco" required>

    <input id="gerar-boleto" type="submit" value="Gerar Boleto">`

    $("#cDc").slideUp(1000, function() {
        $(this).html(formulario3).slideToggle();
    });
})