const alvo = 'e7d80ffeefa212b7c5c55700e4f7193e';

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    if (hex_md5(entrada) === alvo){
        mensagem.innerHTML = "<h2>Senha correta.</h2>";
    } else {
        mensagem.innerHTML = "<h2>Senha errada!!!</h2>";
    }
}