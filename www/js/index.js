var ojo = 0;
//localStorage.setItem("sesion",'not');
var codigo = localStorage.setItem("apps",'appmuestra011');
var dominio = localStorage.setItem('dominio','https://tsimple.didigitales.live/'); 
//http://adsimple.local/
//var dominio = localStorage.setItem('dominio','http://adsimple.local/'); 
var vc = localStorage.setItem("vcompra",'1');
var che = 1;
function checkConnection() {
    var networkState = navigator.connection.type;
    var type = undefined;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    console.log('Connection type: ' + states[networkState]);
    
     type = states[networkState];
    
    return type;
}
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        checkConnection();
        welcome();
        Opcionper();
        document.addEventListener("backbutton", onBackKeyDown, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
app.initialize();
function onBackKeyDown(){
    navigator.notification.confirm(
                'Desea salir de la aplicación',  // message
                onConfirm,         // callback
                'Dsimple team',            // title
                ['OK','CANCELAR'] 
    );
}
function onConfirm(data) {

    if(data == 1){
        cordova.plugins.backgroundMode.isActive();
        var t = setTimeout(function(){
            navigator.app.exitApp();
        },1000);
    }
    
}
var menuopc = 1; var menu = 1;
function welcome(){
    var acceso = localStorage.getItem('sesion');
    if(acceso == 'yes'){
        Cliente();
    }
    else if(acceso == 'terminos'){
        terminos();  
    }
    else if(acceso == 'inicio'){
        inicio();
    }
    else if(acceso == 'guia'){
        Guia();
    }
    else if(acceso == 'restauracontra'){
        OlvidasteContra();  
    }
    else if(acceso == 'miayuda'){
        helpayuda();  
    }
    else if(acceso == 'registrame'){
        Registrate();  
    }
    else{
        $('#THeader').css('display','none');
        $('#Publica').empty();
        $('#Publica').append(`<i class="IcoLogo"></i><div class="Top-text col-min full-primary" >Bienvenidos</div><div class="versi let-ter">Versión 1.0.0</div>
                              <div class="btn btn-primary let-seg" id="Empezar">Aceptar</div>
                              <div class="pie-foo">    
                              <label class="contain" id="terminos">Aceptar terminos y condiciones.
                                  <input type="checkbox" value="1" checked>
                                  <span class="checkmark"></span>
                                </label>
                              </div>`);
    }
}
function Guia(){
    var h = new Date();
    var ho = h.getHours();
    var mens = '';
    if(ho < 12){
        mens = 'Buenos días';
    }
    else if(ho < 19){
        mens = 'Buenas tardes';
    }
    else if(ho < 24 ){
        mens = 'Buenas noches';
    }
    $('#THeader').css('display','none');
    $('#Publica').empty();
    /*var dinial = localStorage.getItem('datosiniciales');
    if(dinial == null){
        $('#Publica').append(`
                            <div class="tit-sim col-min Jum-primary bg-bold">Tienda simple</div>
                            <i class="ini-wel"></i>
                            <div id="GuiaU"> 
                                <div class="boca-saluda"><div class="txt-ini col-min ">Hola `+mens+`</div> </div>
                                <div class="progress cargan">
                                  <div class="progress-bar" style="width:70%">70%</div>
                                </div>
                            </div>`);
    }
    else{*/
    
    $('#Publica').append(`<div class="boca-hora let-seg col-min">
                            Lun a Vie. de 8:00 am a 7:00 pm 
                        </div>
                        <div class="boca-planes let-seg col-min">
                            Planes: Emprendedor: 30$, Popular: 80$, Empresarial:250$, Corporación:a consultar.
                        </div>
                        <div class="boca-info let-seg col-min">
                            El cliente debe contar con rif, logo.
                        </div>
                        <div class="btn-horario ColorDominante" id="Horarios">
                            <i class="ico-h"></i>
                        </div>
                        <div class="btn-coins ColorDominante" id="Planer">
                            <i class="ico-d"></i>
                        </div> 
                        <div class="btn-infos ColorDominante" id="Informa">
                            <i class="ico-inf"></i>
                        </div>
                        <div class="tit-sim col-min Jum-primary bg-bold">Tienda simple</div>
                        <i class="ini-wel"></i>
                        <div id="GuiaU"> 
                            <div class="boca-saluda"><div class="txt-ini col-min ">Hola `+mens+`</div> </div>
                            <div class="boca-ofrece"><div class="txt-ini col-min ">Te ofrecemos la posibilidad de automatizar tu negocio </div> 
                        </div></div>
                         <div class="btn btn-primary continua" id="Ntipon">Siguiente</div>
                         <div class="btn btn-light continua" id="Nomite">Omitir </div>`);
    //}
    if(ho < 8 | ho < 20){
        var t = setTimeout(function(){
            $('.boca-hora').show();
            var t2 = setTimeout(function(){
                $('.boca-hora').hide();
            },5000);
        },2500);
    }
}
$('#Publica').on('click','#Horarios', function(){
    $('.boca-hora').show();
    var t2 = setTimeout(function(){
        $('.boca-hora').hide();
    },5000);
});
$('#Publica').on('click','#Planer', function(){
    $('.boca-planes').show();
    var t2 = setTimeout(function(){
        $('.boca-planes').hide();
    },8000);
});
$('#Publica').on('click','#Informa', function(){
    $('.boca-info').show();
    var t2 = setTimeout(function(){
        $('.boca-info').hide();
    },8000);
});
function inicio(){
    var acceso = localStorage.getItem('sesion');
    if(acceso == 'yes'){
        cordova.plugins.backgroundMode.isActive();
        $('#THeader').css('display','block');;
        $('#text-1').css('padding-top','0px');
        $('#text-1').load('buscador/search-cliente.html');
        $('#opc-2').load('opciones/nada.html');
        $('#opc-1').load('menu-sin-acceso/menu.html');
        $('#Publica').empty();
        $('#Publica').append(``);
    }else{
    $('#THeader').css('display','block');
    $('#text-1').css('padding-top','5px');
    $('#text-1').text('Iniciar sesión');
    $('#opc-2').load('opciones/nada.html');
    $('#opc-1').load('menu-sin-acceso/menu.html');
    $('#Publica').empty();
    $('#Publica').append(`<form method="get" id="IniciaSesion">
        <div class="username let-primary col-min bg-bold" style="margin-top: 40px;">Seudónimo o correo</div>
        <input type="text" placeholder="Ingrese Seudónimo o correo" class="nick-u let-seg bord" id="AliasCor" name="namein" maxlength="50" onpaste="return false" value="administrador"  />
        <div id="InfoAliasCorre"></div>
        <div class="pass-u let-primary col-min bg-bold">Contraseña</div>
        <input type="password" name="contra" placeholder="Ingrese contraseña" class="passk-u col-primary let-seg bord" id="ContraS" maxlength="15" onpaste="return false" value="Clave123" />
        <i class="ico-pass" id="OjoPun"></i>
        <div id="InfoContras"></div>
        
        <button type="submit" class="ColorDominante" id="En-sub">
            <i class="ico-send"></i>
        </button>
    </form>`);
    }
}
$('.Despl-menu').on('click','#Retornar', function(){
    menu = 1;
    $('.Despl-menu').animate({left:'-80%'},'show');
    localStorage.setItem("sesion", 'inicio');
    welcome();
});
$('.Despl-menu').on('click','#InicioDSesion', function(){
    menu = 1;
    $('.Despl-menu').animate({left:'-80%'},'show');
     localStorage.setItem("sesion", 'inicio');
    welcome();
});
$('.Despl-menu').on('click','#Restaura', function(){
    menu = 1;
    $('.Despl-menu').animate({left:'-80%'},'show');
    localStorage.setItem("sesion", 'restauracontra');
    welcome();
});
$('.Despl-menu').on('click','#Help', function(){
    menu = 1;
    $('.Despl-menu').animate({left:'-80%'},'show');
    localStorage.setItem("sesion", 'miayuda');
    welcome();
});
$('.Despl-menu').on('click','#Comprar', function(){
    menu = 1;
    $('.Despl-menu').animate({left:'-80%'},'show');
    localStorage.setItem("sesion", 'guia');
    welcome();
});
$('.Despl-menu').on('click','#Registrate', function(){
    menu = 1;
    $('.Despl-menu').animate({left:'-80%'},'show');
    localStorage.setItem("sesion", 'registrame');
    welcome();
});
$('.Despl-menu').on('click','#Horario', function(){
    menu = 1;
    $('.Despl-menu').animate({left:'-80%'},'show');
});
$('#Publica').on('click','#Ntipon', function(e){
    e.preventDefault();
    $('#GuiaU').empty();
    $('#GuiaU').append(`<div class="boca-saludas"><div class="txt-ini col-min bg-bold">Selecciona tu negocio</div></div>
                        <div style="margin-top:30px;">
                            <li class="list-me col-min" id="Vehicular"> Vehicular</li>
                            <li class="list-me col-min" id="tecnologia"> Tecnologia, accesorios, ropa, farmacéutica.</li>
                            <li class="list-me col-min" id="pedidos"> Automercado, panadería, Comida rápida.</li>
                        </div>`);
    $('#Ntipon').css('display','none');
    $('#Nomite').css('display','none');
});
$('#Publica').on('click','#Nomite', function(e){
    e.preventDefault();
    $('#Ntipon').css('display','none');
    $('#Nomite').css('display','none');
    localStorage.setItem("sesion", 'inicio');
    welcome();
});
$('#Publica').on('click','.list-me', function(e){
    e.preventDefault();
    var n = $(this).attr('id');
    localStorage.setItem("tipo", n);
    $('#GuiaU').empty();
    $('#GuiaU').append(`<div class="boca-saludas"><div class="txt-ini col-min bg-bold">Selecciona el tema</div></div>
                        <div style="margin-top:30px;">
                            <li class="list-met col-min" id="tradional"> Tradicional</li>
                            <li class="list-met col-min" id="moderno"> Moderno</li>
                        </div>`);
});
$('#Publica').on('click','.list-met', function(e){
    e.preventDefault();
     var n = $(this).attr('id');
    localStorage.setItem("tema", n);
    $('#GuiaU').empty();
    $('#GuiaU').append(`<div class="boca-cuenta"><div class="txt-ini col-min ">Tu negocio podrás gestionar tus clientes, inventario, ayudar a tus clientes así como también dar tu ubicación física, horario de atención y opciones como abrir o cerrar tu negocio. </div></div>
    <div class="btn btn-primary continua" id="AceptaCon">Continuar</div>`);
});
$('#Publica').on('click','#AceptaCon', function(e){
    e.preventDefault();
    $('#GuiaU').empty();
    $('#GuiaU').append(`<div class="boca-saludas"><div class="txt-ini col-min bg-bold">¿ Desea realizar la compra ahora. ? </div></div>
    <div class="btn btn-primary desicion" id="AceptaNot">No</div>
    <div class="btn btn-primary desicion" id="AceptaYes">Si</div>`);
});
$('#Publica').on('click','#Regres', function(e){
    e.preventDefault();
    $('#GuiaU').empty();
    $('#GuiaU').append(`<div class="boca-saludas"><div class="txt-ini col-min bg-bold">¿ Desea realizar la compra ahora. ? </div></div>
    <div class="btn btn-primary desicion" id="AceptaNot">No</div>
    <div class="btn btn-primary desicion" id="AceptaYes">Si</div>`);
});
$('#Publica').on('click','#AceptaNot', function(e){
    e.preventDefault();
    localStorage.setItem("sesion", 'inicio');
    welcome();
});
$('#Publica').on('click','#AceptaYes', function(e){
    e.preventDefault();
    $('#GuiaU').empty();
    $('#GuiaU').append(`<div class="boca-saludas"><div class="txt-ini col-min bg-bold">Complete el formulario </div></div>
    <div style="margin-top:30px;">
        <form method="get" id="ComprarApp">
        <div class="username let-primary col-min bg-bold" style="margin-top: 10px;margin-bottom:10px;">Nombre y apellido</div>
        <input type="text" placeholder="Ingrese nombre y apellido" class="nick-u let-seg bord" id="NombApell" name="nombre" maxlength="50" onpaste="return false"  />
        <div class="username let-primary col-min bg-bold" style="margin-top: 10px;">Telefono</div>
        <input type="tel" placeholder="Ingrese telefono" class="nick-u let-seg bord" id="Celular" name="telefono" maxlength="20" onpaste="return false"  />
        <div class="username let-primary col-min bg-bold" style="margin-top: 10px;">Correo electrónico</div>
        <input type="text" placeholder="Ingrese correo" class="nick-u let-seg bord" id="MiEmail" name="correo" maxlength="50" onpaste="return false"  />
        <div class="semana let-primary col-min bg-bold" style="margin-top: 15px;">Tu negocio atiende cuantos clientes a la semana. <div>
        <div class="radio">
          <label><input type="radio" name="optradio" value="1" id="clientes" checked>Quiero probar los 7 días gratis</label>
        </div>
        <div class="radio">
          <label><input type="radio" name="optradio" value="2" id="clientes">Menos de 50 clientes.</label>
        </div>
        <div class="radio">
          <label><input type="radio" name="optradio" value="3" id="clientes">100 clientes.</label>
        </div>
        <div class="radio">
          <label><input type="radio" name="optradio" value="4" id="clientes">200  clientes.</label>
        </div>
        <div class="radio">
          <label><input type="radio" name="optradio" value="5" id="clientes">más de un millar de clientes.</label>
        </div>

        <div class="let-primary col-min">Tu plan es:<i class="let-primary bg-bold col-min planess">gratis</i> </>
        <div class="let-primary col-min descriplan">Descripcion:500 clientes registrados y 50 articulos en inventario. </div>
         <button type="submit" class="ColorDominante" id="AceptaComple"> 
            <i class="ico-send"></i>
        </button>
        <button type="button" class="ColorDominante" id="Regres"> 
            <i class="ico-atras"></i>
        </button>
        </form>
    </div>`);
});
$('#Publica').on('change','#clientes', function(e){
    e.preventDefault();
    var n = $(this).val();
    if(n == 1){
        $('.planess').text('Gratis');
        $('.descriplan').text('Descripcion:500 clientes registrados y 50 articulos en inventario.');
    }
    else if(n == 2){
        $('.planess').text('Emprendedor');
        $('.descriplan').text('Descripcion:10.000 clientes registrados y 100 articulos en inventario.');
    }
    else if(n == 3){
        $('.planess').text('Popular');
        $('.descriplan').text('Descripcion:30.000 clientes registrados y 200 articulos en inventario.');
    }
    else if(n == 4){
        $('.planess').text('Empresarial');
        $('.descriplan').text('Descripcion:50.000 clientes registrados y 50 articulos en inventario.');
    }
    else if(n == 5){
        $('.planess').text('Corporación');
        $('.descriplan').text('Descripcion:mas de 100.000 clientes registrados y 50 articulos en inventario.');
    }
});
function OlvidasteContra(){
    $('#THeader').css('display','block');;
    $('#text-1').css('padding-top','5px');
    $('#text-1').text('Restaurar contraseña');
    $('#opc-2').load('opciones/nada.html');
    $('#opc-1').load('opciones/regresar-ini.html');
    $('#Publica').empty();
    $('#Publica').append(`<form id="RestaurarPass" autocomplete="off">
    <div class="username let-seg col-min">Seudónimo o correo</div>
    <input type="text" placeholder="Ingrese Seudónimo o correo" name="namein" class="nick-u let-seg" id="Olvid" maxlength="50" />
    <div id="InfoAliasCort"></div>
    <button type="submit" class="ColorDominante" id="En-sub">
        <i class="ico-send"></i>
    </button>
</form>`);
    
}
function Registrate(){
    $('#THeader').css('display','block');;
    $('#text-1').css('padding-top','5px');
    $('#text-1').text('Registrate');
    $('#opc-2').load('opciones/nada.html');
    $('#opc-1').load('opciones/regresar-ini.html');
    $('#Publica').empty();
    $('#Publica').append(`<form autocomplete="off" id="RegistroU">
    <div class="username let-seg col-min">Seudónimo</div>
    <input type="text" placeholder="Ingrese seudónimo" class="nick-u let-seg" id="Alias" name="name" maxlength="15" onpaste="return false" />
    <div id="InfoAlias"></div>
    <div class="usernam let-seg col-min" style="margin-top:15px;">Correo electrónico</div>
    <input type="text" placeholder="Ingrese correo" class="mail-u let-seg" id="Correo" maxlength="50" name="correo" onpaste="return false" />
    <div id="InfoCorreo"></div>
    <div class="usernam let-seg col-min">Contraseña</div>
    <input type="password" placeholder="Ingrese contraseña" class="passk-u let-seg" id="ContraS" maxlength="15" name="passw" onpaste="return false" />
    <i class="ico-pass" id="OjoPun"></i>
    <div id="InfoContrar"></div>
    <button type="submit" class="ColorDominante" id="En-sub">
        <i class="ico-send"></i>
    </button>
</form>`);
    
}
function helpayuda(){
    $('#THeader').css('display','block');;
    $('#text-1').css('padding-top','5px');
    $('#text-1').text('Ayuda');
    $('#opc-2').load('opciones/nada.html');
    $('#opc-1').load('opciones/regresar-ini.html');
    $('#Publica').empty();
    $('#Publica').append(`<form id="helpatencion" autocomplete="off">
    <div class="username let-seg col-min">Correo electrónico</div>
    <input type="text" placeholder="Ingrese correo" name="name" class="mail-u let-seg" id="CorrM" maxlength="50" onpaste="return false" value="ing.cesarsilvera@gmail.com" />
    <div id="InfoCorreo"></div>
    <div class="usernam let-seg col-min" style="padding-bottom: 10px;">Asunto</div>
    <input type="text" class="form-control asun let-seg" id="asuntos" name="asunto"  placeholder="Ingrese asunto" maxlength="25" onpaste="return false" value="Prueba" />
    <div id="InfoAsunto"></div>
    <div class="usernam let-seg col-min">Descripción</div>
    <textarea maxlength="150" id="Coment" class="descric let-seg" name="descri" placeholder="Ingrese descripción" onpaste="return false">esto es una prueba</textarea>
    <div id="InfoDescri"></div>
    <button type="submit" class="ColorDominante" id="En-sub">
        <i class="ico-send"></i>
    </button>
</form>`);
    
}
function terminos(){
    $('#THeader').css('display','block');
    $('#text-1').css('padding-top','5px');
    $('#text-1').text('Términos y condiciones');
    $('#opc-2').load('opciones/nada.html');
    $('#opc-1').load('opciones/regresar.html');
    $('#Publica').empty();
     var dom = localStorage.getItem('dominio');
    if(navigator.onLine){
    $.ajax({
        url:dom+'terminosin',
        type:'GET',
        dataType:'json',
        timeout:20000
    })
    .done(function(data){
        if(data == 0){
           datatermino();
        }else{
            cl = JSON.parse(JSON.stringify(data));
            $('#Publica').empty();
            let cli = $('#Publica');
            cli.html();
            cl.forEach(termino =>{
                cli.append(`<div class="csi col-seg let-seg">${termino.name}</div>`);
            });
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
            if (jqXHR.status == 500) {
                console.log('Internal Server Error [500].');
                $('.Inestado').show();
                $('.Inestado').text('Servidor colapsado.');
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
        $('#NoHay').empty();
        $('#NoHay').append(`<div class="btn btn-primary" id="center-btn">No hay conexion de internet </div>`);
        var t = setTimeout(function(){
            $('#NoHay').empty();
        },5000);
    }
}
function datatermino(){
    $('#Publica').empty();
    $('#Publica').append(`<div class="SinR">No hay  términos ni condiciones. </div>`);
}
$('#Publica').on('click','#Empezar', function(){
    localStorage.setItem("sesion", 'inicio');
    welcome();
});
$('#Publica').on('click','#terminos', function(){
    localStorage.setItem("sesion", 'terminos');
    welcome();
});
$('#opc-1').on('click','#regresaini', function(){
    localStorage.setItem("sesion", 'acepta');
    welcome();
});
$('#opc-1').on('click','#regresainic', function(){
    localStorage.setItem("sesion", 'inicio');
    welcome();
});
function Opcionper(){
    
    var app = localStorage.getItem('apps');
    var dom = localStorage.getItem('dominio');
    if(navigator.onLine){
    $.ajax({
        url:dom+'comprobar/'+app,
        type:'GET',
        timeout:20000,
        dataType:'json',
    })
    .done(function(data){
        if(data == 'fuera'){
            $('#THeader').css('display','none');
            $('#Publica').empty();
            $('#Publica').append(`<i class="appfser"></i><div class="smservi col-min full-primary bg-blod">APP Fuera de servicio.</div>`);
        }
        else if(data == 'Mantenimiento'){
            $('#THeader').css('display','none');
            $('#Publica').empty();
            $('#Publica').append(`<i class="apprepara"></i><div class="smservi col-min full-primary bg-bold">APP en Mantenimiento.</div>`);
        }
        else if(data == 'tiendacerrada'){
             welcome();
            $('footer').show();
            $('footer').empty();
            $('footer').css('background-color','#F4511E');
            $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">tienda cerrada no podras realizar compras</div>`);
        var ins = setTimeout(function(){
                    $('footer').hide();
            },6000);
        }
        else{
             welcome();
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
            if (jqXHR.status == 500) {
                console.log('Internal Server Error [500].');
                $('.Inestado').show();
                $('.Inestado').text('Servidor colapsado.');
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
        $('#NoHay').empty();
        $('#NoHay').append(`<div class="btn btn-primary" id="center-btn">No hay conexion de internet </div>`);
        var t = setTimeout(function(){
            $('#NoHay').empty();
        },5000);
    }
    
}
$('#Publica').on('click', '#OjoPun', function(e){
    e.preventDefault();
    navigator.vibrate(400);
    if(ojo == 0){
        $('#ContraS').attr('type','text');  
        ojo =1;
    }
    else{
        $('#ContraS').attr('type','password'); 
        ojo =0;
    }
} );
$('#Publica').on('submit','#ComprarApp', function(e){
    e.preventDefault();
    navigator.vibrate(400);
    //tema, tipo, nombre, tlefono, correo, plan, dominio, codigo.
    var tema =localStorage.getItem('tema');
    var tipo =localStorage.getItem('tipo'); 
    var app = localStorage.getItem('apps');
    var dom = localStorage.getItem('dominio');
    var serealiza = $(this).serialize();
    var devi = device.platform;
    var nom = $('#NombApell').val();
    var tel = $('#Celular').val();
    var correo = $('#MiEmail').val();
    var plan = $('#clientes').val();
    var vcorreo = /gmail.com/.test(correo);
    if(nom.length == 0 & tel.length == 0 & correo.length == 0){
       $('#NombApell, #Celular, #MiEmail').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)'); 
        var x = setTimeout(function(){
           $('#NombApell, #Celular, #MiEmail').css('box-shadow', 'none');
       },3000);
        $('footer').show();
        $('footer').empty();
        $('footer').css('background-color','#F4511E');
        $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Complete el formulario</div>`);
        var ins = setTimeout(function(){
            $('footer').hide();
        },4000);
    }
    else if(nom.length < 5){
        $('#NombrApell').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)'); 
        var x = setTimeout(function(){
           $('#NombrApell').css('box-shadow', 'none');
       },3000);
        $('footer').show();
        $('footer').empty();
        $('footer').css('background-color','#F4511E');
        $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Ingrese nombre y apellido</div>`);
        var ins = setTimeout(function(){
            $('footer').hide();
        },4000);
    }
    else if(tel.length < 7){
        $('#Celular').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)'); 
        var x = setTimeout(function(){
           $('#Celular').css('box-shadow', 'none');
       },3000);
        $('footer').show();
        $('footer').empty();
        $('footer').css('background-color','#F4511E');
        $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Ingrese tu numero de telefono</div>`);
        var ins = setTimeout(function(){
            $('footer').hide();
        },4000);
    }
    else if(vcorreo == false){
        $('#Celular').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)'); 
        var x = setTimeout(function(){
           $('#Celular').css('box-shadow', 'none');
       },3000);
        $('footer').show();
        $('footer').empty();
        $('footer').css('background-color','#F4511E');
        $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Ingrese tu correo gmail.</div>`);
        var ins = setTimeout(function(){
            $('footer').hide();
        },4000);
    }
    else{
        if(navigator.onLine){
            $('#AceptaComple').attr("disabled", true);
            $.ajax({
                url:dom+'guiacompra',
                data:serealiza+'&device='+devi+'&cod='+app+'&tema='+tema+'&dominio='+dom+'&negocio='+tipo,
                type:'GET',
                timeout:20000
            })
            .done(function(data){
                $('#AceptaComple').attr("disabled", false);
                if(data == 'ok'){
                     document.getElementById('ComprarApp').reset();
                    localStorage.setItem("sesion", 'inicio');
                    welcome();
                    $('footer').show();
                    $('footer').empty();
                    $('footer').css('background-color','#F4511E');
                    $('footer').append(`<i class="appacom"></i><div class="smservis col-ter let-seg bg-bold">Datos enviados. </div>`);
                    var ins = setTimeout(function(){
                        $('footer').hide();
                        var t = setTimeout(function(){
                            $('footer').show();
                            $('footer').empty();
                            $('footer').css('background-color','#F4511E');
                            $('footer').append(`<i class="appacom"></i><div class="smservis col-ter let-seg bg-bold">En breve sera atendido por nuestros asesores de ventas. </div>`);
                            var ins = setTimeout(function(){
                                $('footer').hide();
                            },4000);
                        },1000);
                    },4000);
                }else{
                    $('footer').show();
                    $('footer').empty();
                    $('footer').css('background-color','#F4511E');
                    $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Error interno</div>`);
                    var ins = setTimeout(function(){
                        $('footer').hide();
                    },4000);
                }
            })
            .fail(function( jqXHR, textStatus, errorThrown ) {
                if (jqXHR.status == 500) {
                    console.log('Internal Server Error [500].');
                    $('.Inestado').show();
                    $('.Inestado').text('Error en conexión.');
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
            $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">No hay conexion a internet</div>`);
            var ins = setTimeout(function(){
                $('footer').hide();
            },4000);
        }
    }
});
$('#Publica').on('submit','#IniciaSesion', function(e){
    e.preventDefault();
    navigator.vibrate(400);
     var dom = localStorage.getItem('dominio');
    var app = localStorage.getItem('apps');
    var nic = $('#AliasCor').val();
    var contra = $('#ContraS').val();
    var serealiza = $(this).serialize();
    var devi = device.platform;
    if(nic.length == 0 & contra.length == 0){
       $('#AliasCor').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)'); 
       $('#ContraS').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)');
        var x = setTimeout(function(){
           $('#AliasCor, #ContraS').css('box-shadow', 'none');
       },3000);
       $('footer').show();
       $('footer').empty();
       $('footer').css('background-color','#F4511E');
       $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Complete el formulario</div>`);
      var ins = setTimeout(function(){
            $('footer').hide();
        },4000);
    }
    else if(nic.length < 7){
        $('#AliasCor').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)'); 
        var x = setTimeout(function(){
           $('#AliasCor').css('box-shadow', 'none');
       },3000);
    }
    else if(contra.length < 7){
        $('#ContraS').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)'); 
        var x = setTimeout(function(){
           $('#ContraS').css('box-shadow', 'none');
       },3000);
    }
    else{
        if(navigator.onLine){
            $('#En-sub').attr("disabled", true);
            console.log(dom+'welcomein?'+serealiza+'&device='+devi+'&cod='+app);
            $.ajax({
                url:dom+'welcomein?',
                data:serealiza+'&device='+devi+'&cod='+app,
                type:'GET'
            })
            .done(function(data){
                console.log(data);
                $('#En-sub').attr("disabled", false);
                if(data == 'primer'){
                   localStorage.setItem("nick",nic);
                    primer();
                }
                else if(data == 'ok'){
                    localStorage.setItem("nick",nic);
                    localStorage.setItem("sesion",'yes');
                    localStorage.setItem("conexion",'yes');
                    $('.Inestado').show();
                    $('.Inestado').text('Bienvenidos');
                    welcome();
                    var ins = setTimeout(function(){
                        $('.Inestado').hide();
                    },4000);
                    cordova.plugins.backgroundMode.enable();
                
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
});
function primer(){
    $('#text-1').css('padding-top','5px');
    $('#text-1').text('Primer acceso');
    $('#opc-2').load('opciones/nada.html');
    $('#opc-1').load('opciones/nada.html');
    $('#Publica').empty();
    $('#Publica').append(`<form id="PrimerAcceso">
    <h1 class="Verusu">Validar cuenta</h1>
    <div class="psel">Ingrese el codigo enviado a su correo electrónico.</div>
    <div class="SeleccionU">
        <input type="number" name="codigo" class="ValidC" id="ValidC" maxlength="4" onkeypress="return numeros(event);" />
        <button type="submit" class="btn btn-primary" id="center-btn">Aceptar</button>
    </div>
</form>`);
}
$('#Publica').on('submit','#PrimerAcceso', function(e){
    e.preventDefault();
    var dom = localStorage.getItem('dominio');
    navigator.vibrate(400);
    var name = localStorage.getItem('nick');
    var vali = $('#ValidC').val();
    var serealiza = $(this).serialize();
    var devi = device.platform;
    if(vali.length == 0){
       $('#ValidC').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)');
        
    }
    else if(vali.length < 4){
        $('#ValidC').css('box-shadow', '0 0 0 0.2rem rgba(255,9,9, 0.25)'); 
        var x = setTimeout(function(){
           $('#ValidC').css('box-shadow', 'none');
       },3000);
    }
    else{
        if(navigator.onLine){
            $('#center-btn').attr("disabled", true);
            $.ajax({
                url:dom+'primerin',
                data:serealiza+'&device='+devi+'&name='+name,
                type:'GET',
                timeout:20000,
                dataType:'json',
                async:false,
            })
            .done(function(data){
                 $('#center-btn').attr("disabled", false);
                if(data == 0){
                    $('footer').show();
                    $('footer').empty();
                    $('footer').css('background-color','#F4511E');
                    $('footer').append(`<i class="appadv"></i><div class="smservis col-ter let-seg bg-bold">Codigo incorrecto.</div>`);
                    var x = setTimeout(function(){
                        $('footer').hide();
                    },4000);
                }
                else{
                    localStorage.setItem("sesion",'yes');
                    $('.Inestado').show();
                    $('.Inestado').text('Bienvenido');
                    var ins = setTimeout(function(){
                        $('.Inestado').hide();
                    },4000);
                }
            })
            .fail(function( jqXHR, textStatus, errorThrown ) {
                if (jqXHR.status == 500) {
                    console.log('Internal Server Error [500].');
                    $('.Inestado').show();
                    $('.Inestado').text('Error en conexión.');
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
    
});
$('.Despl-menu').on('click','#Salir', function(){
    navigator.vibrate(400);
    var dom = localStorage.getItem('dominio');
    $('.Despl-menu').animate({left:'-80%'},'show');
    menu = 1;
    var m = localStorage.getItem('nick');
    $.ajax({
        url:dom+'csesion/'+m,
        type:'GET',
    })
    .done(function(data){
        if(data == 'ok'){
            cordova.plugins.backgroundMode.disable();
            localStorage.setItem("sesion",'inicio');
            localStorage.setItem("conexion",'not');
            localStorage.setItem("nick",'');
            welcome();
        }   
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
            if (jqXHR.status == 500) {
                console.log('Internal Server Error [500].');
                $('.Inestado').show();
                $('.Inestado').text('Servidor colapsado.');
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
});
function Cliente(){
    var acceso = localStorage.getItem('sesion');
    if(acceso == 'yes'){
        cordova.plugins.backgroundMode.isActive();
        $('#THeader').css('display','block');;
        $('#text-1').css('padding-top','0px');
        $('#text-1').load('buscador/search-cliente.html');
        $('#opc-2').load('opciones/nada.html');
        $('#opc-1').load('menu-sin-acceso/menu.html');
        $('#Publica').empty();
        $('#Publica').append(``);
    }else{
        inicio();
    }
    
}
$('#opc-1').on('click','#Menu-btn', function(){
    var conectado = localStorage.getItem('conexion');
    if(conectado == 'yes'){
        
        if(menu == 1){
            menu = 0;
            $('.Despl-menu').load('menu/menu-conectado.html');
            $('.Despl-menu').animate({left:'0%'},'show');
        }
        else{
            menu = 1;
            $('.Despl-menu').animate({left:'-80%'},'show');
        }
       
    }else{
       
        if(menu == 1){
            menu = 0;
            $('.Despl-menu').load('menu/sin-acceso.html');
            $('.Despl-menu').animate({left:'0%'},'show');
        }
        else{
            menu = 1;
            $('.Despl-menu').animate({left:'-80%'},'show');
        }
    }
});
$('.Despl-menu').on('click','#Inicia', function(){
    localStorage.setItem("sesion", 'yes');
    welcome();
});