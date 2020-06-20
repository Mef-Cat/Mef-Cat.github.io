$(document).ready(function(){

    $('#btn').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#nombre').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#nombre').css("border-bottom-color", "#F14B4B")
        } else{
            $('#nombre').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#correo').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#correo').css("border-bottom-color", "#F14B4B")
        } else{
            $('#correo').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#like').val() == '' ){
            errores += '<p>¿Que te gusto?</p>';
            $('#like').css("border-bottom-color", "#F14B4B")
        } else{
            $('#like').css("border-bottom-color", "#d1d1d1")
        }
        // Validado Mensaje2 ==============================
        if( $('#like2').val() == '' ){
            errores += '<p>¿Que no te gusto?</p>';
            $('#like2').css("border-bottom-color", "#F14B4B")
        } else{
            $('#like2').css("border-bottom-color", "#d1d1d1")
        }
        // Validado Mensaje3 ==============================
        if( $('#suge').val() == '' ){
            errores += '<p>Danos tu sugerencia</p>';
            $('#suge').css("border-bottom-color", "#F14B4B")
        } else{
            $('#suge').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
