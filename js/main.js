$(document).ready(function(){

    $('#btnNovaImg').click(function(){
        $('#frmImagens').slideDown();//cria um efeito de slide p/ baixo no formulário
    })
    
    $('#btnReset').click(function(){
        $('#frmImagens').slideUp();//cria um efeito de slide p/ cima no formulário
    })

    $('#frmImagens').on('submit', function(e){
        e.preventDefault(); //usado para cancelar o evendo submit do form
        const strUrl = $('#txtUrl').val();
        const novaFoto = $('<li style="display: none"></li>');

        $(`<img src="${strUrl}"/>`).appendTo(novaFoto);
        $(`
        <div class="overlay-imagem-link">
            <a href="${strUrl}" target="_blank" title="Ver imagem em tamanho Real">Ver imagem em tamanho Real</a>
        </div>
        `).appendTo(novaFoto);
        $(novaFoto).appendTo('ul');
        $(novaFoto).fadeIn(1000);
        $('#txtUrl').val('');
    })
})