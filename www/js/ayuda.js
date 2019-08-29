$('#Publica').on('submit','#helpatencion', function(e){
    e.preventDefault();
     var dom = localStorage.getItem('dominio');
    navigator.vibrate(400);
    var data = $(this).serialize();
    var devic = device.platform;
    var mail = $('#CorrM').val(); var asun = $('#asuntos').val(); var desc = $('#Coment').val();
    var vmail = /gmail.com/.test(mail); var vasun = asun.length ==0;  var vdes = desc.lentgh == 0;
    if(navigator.onLine){
        if(vmail == false & asun.length ==  0 & desc.length == 0){
            $('#CorrM, #asuntos, #Coment').css('box-shadow', '0 0 0 0.2rem rgba(231,76,60, 0.25)');
            var s = setTimeout(function(){
                   $('#CorrM, #asuntos, #Coment').css('box-shadow', 'none');
            },5000);
            $('footer').show();
            $('footer').empty();
            $('footer').css('background-color','#F4511E');
            $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Complete el formulario</div>`);
            var ins = setTimeout(function(){
                $('footer').hide();
            },4000);
        }
        else if(vmail == false){
            $('#CorrM ').css('box-shadow', '0 0 0 0.2rem rgba(231,76,60, 0.25)');
            var s = setTimeout(function(){
                   $('#CorrM').css('box-shadow', 'none');
            },5000);
            $('footer').show();
            $('footer').empty();
            $('footer').css('background-color','#F4511E');
            $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">El correo debe ser gmail.</div>`);
            var ins = setTimeout(function(){
                $('footer').hide();
            },4000);
        }
        else if(asun.length ==  0 & asun.length <= 3 ){
            $('#asuntos ').css('box-shadow', '0 0 0 0.2rem rgba(231,76,60, 0.25)');
            var s = setTimeout(function(){
                   $('#asuntos').css('box-shadow', 'none');
            },5000); 
        }
        else if(desc.length ==  0 & desc.length <= 10 ){
            $('#asuntos ').css('box-shadow', '0 0 0 0.2rem rgba(231,76,60, 0.25)');
            var s = setTimeout(function(){
                   $('#asuntos').css('box-shadow', 'none');
            },5000); 
        }
        else{
            if(navigator.onLine){
                console.log('http://adsimple.local/mhelpcliente?'+data+'&device='+devic);
                $.ajax({
                    url:'http://adsimple.local/mhelpcliente',
                    data:data+'&device='+devic,
                    type:'POST',
                    timeout:20000,
                })
                .done(function(data){
                    if(data == 'ok'){
                        document.getElementById('helpatencion').reset();
                        $('footer').show();
                        $('footer').empty();
                        $('footer').css('background-color','#F4511E');
                        $('footer').append(`<i class="appacom"></i><div class="smservis col-ter let-seg bg-bold">Datos Enviados</div>`);
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
            else{
                $('footer').show();
                $('footer').empty();
                $('footer').css('background-color','#F4511E');
                $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">No hay conexion de internet.</div>`);
                var ins = setTimeout(function(){
                    $('footer').hide();
                },4000);
            }
        }   
    }
});