$(document).ready(()=>{
    console.log('JQuery is loaded.');

    $('#btn-login').click((e)=>{
        $('#modalLogin').modal('toggle');
    })

    // Carregar Pagina
    $('#intro-jquery').click((e)=>{
        $.ajax({
            url: "produtos.html",
            success: (data, textStatus, xhr)=>{
                console.log(data);
                console.log(textStatus);
                console.log(xhr);
                $('#conteudo').html(data);
            }
          });
    });
});