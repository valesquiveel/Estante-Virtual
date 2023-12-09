$(document).ready(function() {
    $('.btn.btn-success').on('click', function() {

        var itemInfo = `
        <div style="display: flex;  align-items: center; border: solid 1px gray; border-radius: 5px; width: 70%; margin-bottom: 20px;" id="carrinho-item">
            <div style="width: 40px; margin-left: 5px; height: 60px; background-color: var(--marrom); color: white; border-radius: 5px;" id="img-item"><p style="font-size: 12px; text-align: center;">Capa do livro</p></div>
            <div id="info-item">
                <p style="margin-left: 5px;">Nome do Livro <br> Autor do Livro</p>
            </div>
            <p style="margin-left: 15px;">Qtd 1</p>
        </div>
        `;

        // Atualiza o conteúdo do parágrafo dentro do offCanvas
        document.getElementById('offcanvas1').innerHTML += itemInfo;

        // Abre o offCanvas
        var offcanvas = new bootstrap.Offcanvas($('#offcanvasScrolling'));
        offcanvas.show();
    });
});

$(document).ready(function() {
    $('#menuDropdown').hover(
        function() {
            $(this).addClass('show');
            $('ul.dropdown-menu', this).addClass('show');
        },
        function() {
            $(this).removeClass('show');
            $('ul.dropdown-menu', this).removeClass('show');
        }
    );
});