function mostrar(id){
    let ids = id;
    let respuesta = document.getElementsByClassName(ids);
    if ((respuesta[0]).style.display !== "block"){
        (respuesta[0]).style.display="block";
    }else {
        (respuesta[0]).style.display="none"
    }
    
}
