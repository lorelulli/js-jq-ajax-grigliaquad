$(document).ready( function () {


    $('.square').click(function () {

        var questoQuadrato = $(this);

        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                var numeroPC = data.response;
                if (numeroPC > 5) {
                    $(questoQuadrato).addClass('green');

                }
                else {
                    $(questoQuadrato).addClass('yellow');
                }
                $(questoQuadrato).append('<p> </p>');
                $(questoQuadrato).children("p").text(numeroPC);

            },
            error: function () {
                alert('ERRORE');
            }
        });

    })


})
