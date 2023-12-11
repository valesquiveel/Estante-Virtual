var add = $('.btnAdd')

add.on('click', function() {

        var itemInfo = `
        <div style="display: flex;  align-items: center; border: solid 1px gray; border-radius: 5px; width: 70%; margin-bottom: 20px;" id="carrinho-item">
            <div style="width: 40px; margin-left: 5px; height: 60px; background-color: var(--marrom); color: white; border-radius: 5px;" id="img-item"><p style="font-size: 12px; text-align: center;">Capa do livro</p></div>
            <div id="info-item">
                <p style="margin-left: 5px;">Nome do Livro <br> Autor do Livro</p>
            </div>
            <p style="margin-left: 15px;">Qtd 1</p>
        </div>
        `;

        document.querySelector('#offcanvas1').innerHTML += itemInfo;

        var offcanvas = new bootstrap.Offcanvas($('#offcanvasScrolling'));
        offcanvas.show();
    });


$("#comprar").on("click", function(){
    window.location.href = '../pages/fimCompra.html';
})