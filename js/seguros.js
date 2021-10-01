//Formularios de seguros
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5491124503118';

function Accidente(){

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
    
    const formulario = document.querySelector('#formAccidente');
    const buttonSubmit = document.querySelector('#btnAccidente');
    
    
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
}

function Ahorro(){

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
    
    const formulario1 = document.querySelector('#formAhorro');
    const buttonSubmit1 = document.querySelector('#btnAhorro');
    
    
    
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
            if(isMobile2()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit1.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit1.disabled = false
        }, 3000);
    });
    
}

function Automotor(){

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
    
    const formulario2 = document.querySelector('#formAutomotor');
    const buttonSubmit2 = document.querySelector('#btnAutomotor');
    
    
    
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
            if(isMobile3()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit2.disabled = false
        }, 3000);
    });
}

function Bicicleta(){

    function isMobile4() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    }
    
    const formulario2 = document.querySelector('#formBicicleta');
    const buttonSubmit2 = document.querySelector('#btnBicicleta');
    
    
    
    formulario2.addEventListener('submit', (event) => {
        let getSelectValue = $("#BicicletaSeguro").val();
        let seguroBici = getSelectValue;
        event.preventDefault()
        buttonSubmit2.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
        buttonSubmit2.disabled = true
        setTimeout(() => {
            let mensaje = 'send?phone=' + telefono +
             '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro para Bicicletas*,cobertura para ' + seguroBici +   ''
            if(isMobile4()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit2.disabled = false
        }, 3000);
    });
}

function Trabajo(){

    function isMobile5() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    }
    
    const formulario2 = document.querySelector('#formTrabajo');
    const buttonSubmit2 = document.querySelector('#btnTrabajo');
    
    
    
    formulario2.addEventListener('submit', (event) => {
        event.preventDefault()
        buttonSubmit2.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
        buttonSubmit2.disabled = true
        setTimeout(() => {
            let mensaje = 'send?phone=' + telefono +
             '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro sobre la Ley de Contrato de Trabajo*, ' 
            if(isMobile5()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit2.disabled = false
        }, 3000);
    });
}

function Mercantil(){

    function isMobile6() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    }
    
    const formulario2 = document.querySelector('#formMercantil');
    const buttonSubmit2 = document.querySelector('#btnMercantil');
    
    
    
    formulario2.addEventListener('submit', (event) => {
        event.preventDefault()
        buttonSubmit2.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
        buttonSubmit2.disabled = true
        setTimeout(() => {
            let mensaje = 'send?phone=' + telefono +
             '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro sobre Convenio Mercantil*, ' 
            if(isMobile6()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit2.disabled = false
        }, 3000);
    });
}

function Corporativo(){

function isMobile7() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    }
    
    const formulario2 = document.querySelector('#formCorporativo');
    const buttonSubmit2 = document.querySelector('#btnCorporativo');
    
    
    
    formulario2.addEventListener('submit', (event) => {
        let getSelectValue = $("#corporativoSeguro").val();
        let seguro = getSelectValue;
        event.preventDefault()
        buttonSubmit2.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
        buttonSubmit2.disabled = true
        setTimeout(() => {
            let mensaje = 'send?phone=' + telefono +
             '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguros Corporativos*, para activo de ' + seguro + ''
            if(isMobile7()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit2.disabled = false
        }, 3000);
    });
}

function Hogar(){

    function isMobile8() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    }
    
    const formulario2 = document.querySelector('#formHogar');
    const buttonSubmit2 = document.querySelector('#btnHogar');
    
    
    
    formulario2.addEventListener('submit', (event) => {
        event.preventDefault()
        buttonSubmit2.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
        buttonSubmit2.disabled = true
        setTimeout(() => {
            let mensaje = 'send?phone=' + telefono +
             '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro Cominado Familiar*'
            if(isMobile8()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit2.disabled = false
        }, 3000);
    });
}

function Vida(){

    function isMobile10() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    }
    
    const formulario2 = document.querySelector('#formVida');
    const buttonSubmit2 = document.querySelector('#btnVida');
    
    formulario2.addEventListener('submit', (event) => {
            let quien= "" ;
            if ((document.querySelector('#mi')).checked){
                quien = "Para mi";
            }else if  ((document.querySelector('#pareja')).checked) {
                quien = "Para mi y mi pareja";
            }else {
                quien = "Para mi y mi familia"
            }
        let getSelectValue = $("#vidaSeguro").val();
        let seguro = getSelectValue;
        event.preventDefault()
        buttonSubmit2.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
        buttonSubmit2.disabled = true
        setTimeout(() => {
            let mensaje = 'send?phone=' + telefono +
             '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro de vida*, ' + quien +
            '. Quiero saber más sobre el seguro de ' + seguro +   ''
            if(isMobile10()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit2.disabled = false
        }, 3000);
    });
}

function Trabajador(){

    function isMobile9() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    }
    
    const formulario2 = document.querySelector('#formTrabajador');
    const buttonSubmit2 = document.querySelector('#btnTrabajador');
    
    
    
    formulario2.addEventListener('submit', (event) => {
        event.preventDefault()
        buttonSubmit2.innerHTML = '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>'
        buttonSubmit2.disabled = true
        setTimeout(() => {
            let mensaje = 'send?phone=' + telefono +
             '&text=*CESAR PEREYRA SEGUROS*%0A Hola! Estoy interesad@ en el *Seguro para Trabajadores*, '
            if(isMobile9()) {
                window.open(urlMobile + mensaje, '_blank')
            }else{
                window.open(urlDesktop + mensaje, '_blank')
            }
            buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
            buttonSubmit2.disabled = false
        }, 3000);
    });
}