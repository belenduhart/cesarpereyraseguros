//Formularios de seguros
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5491124503118';

function isMobile1() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#checkCont');
const buttonSubmit = document.querySelector('.btnAccidente');


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let mensaje = 'send?phone=' + telefono + '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro para Accidentes* '
        if(isMobile1()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});

function isMobile2() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario1 = document.querySelector('.formAhorro');
const buttonSubmit1 = document.querySelector('.btnAhorro');



formulario1.addEventListener('submit', (event) => {
    let moneda= "" ;
        if ((document.querySelector('#dolares')).checked){
            moneda = "dolares";
        }else {
            moneda = "pesos";
        }
    event.preventDefault()
    buttonSubmit1.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit1.disabled = true
    setTimeout(() => {
        let mensaje = 'send?phone=' + telefono + '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro de Ahorro / Inversion*, en '
        + moneda +   ''
        if(isMobile1()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit1.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit1.disabled = false
    }, 3000);
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let mensaje = 'send?phone=' + telefono + '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro para Accidentes* '
        if(isMobile1()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});

function isMobile3() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario2 = document.querySelector('.formAutomotor');
const buttonSubmit2 = document.querySelector('.btnAutomotor');



formulario2.addEventListener('submit', (event) => {
    let anio = (document.querySelector(".anio").value) ;
    let getSelectValue = $("#automotorSeguro").val();
    let seguro = getSelectValue;
    event.preventDefault()
    buttonSubmit2.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit2.disabled = true
    setTimeout(() => {
        let mensaje = 'send?phone=' + telefono +
         '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro Automotor*, ' + seguro +
        ' para un auto del año: ' + anio +   ''
        if(isMobile1()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit2.disabled = false
    }, 3000);
});