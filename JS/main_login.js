function logar(){
                
    var login = document.getElementById('campo_usuário').value;
    var senha = document.getElementById('campo_senha').value;

    if(login == "adm0315" && senha == "adm0315"){
        alert('Login Efetuado Com Sucesso')
        location.href = "../CURSOS/cursos.html"
    }else{
        alert('Usuário ou Senha incorreto(s)')
    }

}