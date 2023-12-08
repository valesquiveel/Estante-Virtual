$(document).ready(function() {
    $('.btn.btn-success').on('click', function() {
        var bookTitle = $(this).closest('.modal-content').find('.modal-title').text();
        var bookAuthor = $(this).closest('.modal-content').find('.modal-body p:nth-child(2)').text();
        var bookDescription = $(this).closest('.modal-content').find('.modal-body p:nth-child(3)').text();

        var itemInfo = `
            <p>Título: ${bookTitle}</p>
            <p>Autor: ${bookAuthor}</p>
            <p>Descrição: ${bookDescription}</p>
        `;

        // Atualiza o conteúdo do parágrafo dentro do offCanvas
        document.getElementById('offcanvas1').innerHTML += itemInfo;

        // Abre o offCanvas
        var offcanvas = new bootstrap.Offcanvas($('#offcanvasScrolling'));
        offcanvas.show();
    });
});