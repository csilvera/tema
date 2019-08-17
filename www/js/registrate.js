$('#Publica').on('submit','#RegistroU', function(e){
    e.preventDefault();
    navigator.vibrate(400);
    var dom = localStorage.getItem('dominio');
    var cod = localStorage.getItem('apps');
    var data = $(this).serialize();
    var devic = device.platform;
    var seudo = $('#Alias').val(); var correo = $('#Correo').val(); var contra = $('#ContraS').val();
    var textmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo);
    var textco = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,15}$/.test(correo);
    var textcon = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,15}$/.test(contra);
    var textali = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,15}$/.test(seudo);
    var noValido = /\s/;
    var vmail = /gmail.com/.test(correo);
    if(navigator.onLine){
        if(vmail == false & seudo.length ==  0 & contra.length == 0){
            $('#Alias, #Correo, #ContraS').css('box-shadow', '0 0 0 0.2rem rgba(231,76,60, 0.25)');
            var s = setTimeout(function(){
                   $('#Alias, #Correo, #ContraS').css('box-shadow', 'none');
            },5000);
            $('footer').show();
            $('footer').empty();
            $('footer').css('background-color','#F4511E');
            $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Complete el formulario</div>`);
            var ins = setTimeout(function(){
                $('footer').hide();
            },4000);
        }
        else if(seudo.length < 5 & textali == false & noValido.test(seudo)){
            $('#CorrM ').css('box-shadow', '0 0 0 0.2rem rgba(231,76,60, 0.25)');
            var s = setTimeout(function(){
                   $('#CorrM').css('box-shadow', 'none');
            },5000);
            $('#InfoAlias').empty();
            $('#InfoAlias').show('blind',400);
            $('#InfoAlias').append(`<div class="alert alert-danger alert-dismissible" id="alertas">
                                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                                    <strong>Seudónimo:</strong> minimo 5 caracteres, solo letras, numeros y sin espacios.
                                  </div>`);
        }
        else if(vmail == false ){
            $('#CorrM ').css('box-shadow', '0 0 0 0.2rem rgba(231,76,60, 0.25)');
            var s = setTimeout(function(){
                   $('#CorrM').css('box-shadow', 'none');
            },5000);
            
            $('footer').show();
            $('footer').empty();
            $('footer').css('background-color','#F4511E');
            $('footer').append(`<i class="appacom"></i><div class="smservis col-ter let-seg bg-bold">Solo gmail.com</div>`);
            var ins = setTimeout(function(){
                $('footer').hide();
            },4000);
        }
        else if(textcon == false){
            $('#InfoContrar').empty();
            $('#Contra').css('box-shadow', '0 0 0 0.2rem rgba(231,76,60, 0.25)');
            var s = setTimeout(function(){
                   $('#Contra').css('box-shadow', 'none');
            },5000);
            $('footer').show();
            $('footer').empty();
            $('footer').css('background-color','#F4511E');
            $('footer').append(`<i class="appacom"></i><div class="smservis col-ter let-seg bg-bold">La contraseña minimo de 8 digitos entre Mayuscula, numero y letra.</div>`);
            var ins = setTimeout(function(){
                $('footer').hide();
            },4000);
        }
        else{
            $('#En-sub').attr("disabled", true);
            $.ajax({
                url:dom+'registerin',
                data:data+'&device='+devic+'&cod='+cod+'&dominio='+dom,
                type:'GET',
                timeout:20000
            })
            .done(function(data){
               $('#En-sub').attr("disabled", false);
                if(data == 'ok'){
                    document.getElementById('RegistroU').reset();
                    $('footer').show();
                    $('footer').empty();
                    $('footer').css('background-color','#F4511E');
                    $('footer').append(`<i class="appacom"></i><div class="smservis col-ter let-seg bg-bold">Registro con éxito</div>`);
                    var ins = setTimeout(function(){
                        $('footer').hide();
                    },4000);
                }
                else{
                    $('footer').show();
                    $('footer').empty();
                    $('footer').css('background-color','#F4511E');
                    $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">`+data+`</div>`);
                    var ins = setTimeout(function(){
                        $('footer').hide();
                    },4000);
                }
            })
            .fail(function( jqXHR, textStatus, errorThrown ) {
                if (jqXHR.status == 500) {
                    console.log('Internal Server Error [500].');
                    $('.Inestado').show();
                    $('.Inestado').text('Error en conexión');
                    var ins = setTimeout(function(){
                        $('.Inestado').hide();
                        $('.Inestado').show();
                        $('.Inestado').text('Reintente luego.');
                        var y = setTimeout(function(){
                            $('.Inestado').hide();
                            console.clear();
                        },3000)
                    },3000);
                }
                else if (textStatus === 'timeout') {
                    console.log('Time out error.');
                    $('.Inestado').show();
                    $('.Inestado').text('Reintentar');
                    var ins = setTimeout(function(){
                        $('.Inestado').hide();
                        console.clear();
                    },3000);
                }
                else if (textStatus === 'abort') {
                    console.log('Ajax request aborted.');
                    $('.Inestado').show();
                    $('.Inestado').text('Conexión abortada');
                    var ins = setTimeout(function(){
                        $('.Inestado').hide();
                        console.clear();
                    },3000);
                }
            });
        }   
    }
    
});