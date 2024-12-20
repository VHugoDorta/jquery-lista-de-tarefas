$(document).ready(function(){
    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();

        const tarefaFazer = $(this).find('input').val();

            if (tarefaFazer.trim() !== "") {
            $('ul#tarefas-fazer').append(`<li>${tarefaFazer}</li>`);
            $(this).find('input').val('');
        }

    });
    $(document).on('click', 'ul#tarefas-fazer li', function() {
        $(this).toggleClass('concluida');
    });
})