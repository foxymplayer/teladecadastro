function verificar(){
     let senha = document.getElementById('senha').value;
     let confirmar = document.getElementById('confirmar').value;
     let email = document.getElementById('email').value;
     let cpf = document.getElementById('cpf').value;
     let cep = document.getElementById('cep').value;
     let nome = document.getElementById('nome').value;
     let endereco = document.getElementById('endereco').value;
     let bairro = document.getElementById('bairro').value;
     let cidade = document.getElementById('cidade').value;
     let estado = document.getElementById('estado').value;
     let data = document.getElementById('data').value

    

if( !data || !confirmar || !cep ||!nome || !cpf || !senha ||!email || !endereco || !bairro || !cidade || !estado ){
    alert("porfavor preencher todos os campos");
}
else{
    alert("Campos preenchidos com sucesso!");
}
}
