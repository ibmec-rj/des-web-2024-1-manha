const alvo = '4dd2f3f0570fde68c11b25976f8a7addaa2fbdec2a3ad8880087059b1f49701fb0242662b8ec77502e165fd794d2ef116659d52b5527effbedecd6209957698e';
const sal = 'um_sal';

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    if (hex_sha512(entrada + sal) === alvo){
        mensagem.innerHTML = "<h2>Senha correta.</h2>";
        sessionStorage.setItem('logado', 1);
        window.location.href = 'nova.html';
    } else {
        mensagem.innerHTML = "<h2>Senha errada!!!</h2>";
    }
}