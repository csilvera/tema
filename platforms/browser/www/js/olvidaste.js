$('#Publica').on('submit','#RestaurarPass', function(e){
    e.preventDefault();
    navigator.vibrate(400);
    var dom = localStorage.getItem('dominio');
    var cod = localStorage.getItem('apps');
    var d = $('#Olvid').val();
    var se = $('#Olvid').serialize();
    var devi = device.platform;
    if(d.length < 4 ){
       $('.Inestado').show();
       $('.Inestado').text('Minimo 5 caracteres.');
        var ins = setTimeout(function(){
            $('.Inestado').hide();
        },6000);
    }
    else{
        $('#En-sub').attr("disabled", true);
        $.ajax({
            url:dom+'mrestaurar',
            data:se+'&device='+devi+'&cod='+cod+'&dominio='+dom,
            type:'GET',
            timeout:20000
        })
        .done(function(data){
            $('#En-sub').attr("disabled", false);
            if(data == 'ok'){
                    document.getElementById('RestaurarPass').reset();
                    $('footer').show();
                    $('footer').empty();
                    $('footer').css('background-color','#F4511E');
                    $('footer').append(`<i class="appacom"></i><div class="smservis col-ter let-seg bg-bold">`+data+`</div>`);
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
});