/*função valida campo*/
function validar() {

    let name = formulario.name.value;
    let lcel = formulario.lcel.value;
    let lemail = formulario.lemail.value;
    let lassunto = formulario.lassunto.value;
    let lmensagem = formulario.lmensagem.value;



    /*Confere se os campos do formulario está preenchido*/
    if (name == "") {

        document.getElementById("resultado-name").innerHTML = "O Campo é obrigatório!";
        document.getElementById('resultado-name').style.color = '#C6001A';
        document.getElementById("name").style.borderColor = "#C6001A";
        formulario.name.focus();
    } else {
        document.getElementById("name").style.borderColor = "black";
        document.getElementById('resultado-name').innerHTML = ""
    }
    if (lcel == "") {
        document.getElementById('resultado-lcel').innerHTML = "O Campo é obrigatório!";
        document.getElementById('resultado-lcel').style.color = '#C6001A';
        document.getElementById("lcel").style.borderColor = "#C6001A";
        formulario.lcel.focus();
    } else {
        document.getElementById("lcel").style.borderColor = "black";
        document.getElementById('resultado-lcel').innerHTML = ""
    }

    if (lemail == "") {
        document.getElementById('resultado-email').innerHTML = "O Campo é obrigatório!";
        document.getElementById('resultado-email').style.color = '#C6001A';
        document.getElementById("lemail").style.borderColor = "#C6001A";
        formulario.lemail.focus();
    }
    else {
        document.getElementById('resultado-email').innerHTML = ""
        document.getElementById("lemail").style.borderColor = "black";
    }
    if (lassunto == "") {
        document.getElementById('resultado-assunto').innerHTML = "O Campo é obrigatório!"
        document.getElementById('resultado-assunto').style.color = '#C6001A';
        document.getElementById("lassunto").style.borderColor = "#C6001A";
        formulario.lassunto.focus();
    }

    else {
        document.getElementById('resultado-assunto').innerHTML = ""
        document.getElementById("lassunto").style.borderColor = "black";
    }
    if (lmensagem == "") {
        document.getElementById('resultado-mensagem').innerHTML = "O Campo é obrigatório!";
        document.getElementById('resultado-mensagem').style.color = '#C6001A';
        document.getElementById("lmensagem").style.borderColor = "#C6001A";
        formulario.lmensagem.focus();
    }
    else {
        document.getElementById('resultado-mensagem').innerHTML = ""
        document.getElementById("lmensagem").style.borderColor = "black";
    }
    if (lmensagem && lassunto && lcel && lemail && name != "") {
        formulario.reset();
        confirm("Formulario enviado com sucesso!");
    }

}
function Limpar() {
    document.getElementById("Limpar").reset();
}
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("resultado-email").innerHTML = "";
    }
    else {
        document.getElementById("resultado-email").innerHTML = "Email inválido!";
        document.getElementById('resultado-email').style.color = '#C6001A';


    }

}
/* Mascara do celular*/
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}
var inputNome = document.querySelector("#nome");
nome.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
        
    }
});

/*Faz com que o campo input aceite apenas letras e nao Números  */
function lettersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)) {
            document.getElementById("resultado-name").innerHTML= "<font color='red'>Não digite números nesse campo!</font>";
        return false;
    }
    return true;
}