function acceder(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if(user == "admin" || user =="Admin" && pass == "123456"){
        document.cookie = "token=ABC123";
        document.getElementById("mensaje").innerHTML = "Bienvenido " + user;
        location.href="archivo.html";

    }else{
        //document.getElementById("mensaje").innerHTML = "El usuario o la contraseña no son correctos";
        $( "#mensaje" ).html( "El usuario o la contraseña no son correctos" );
    }
}