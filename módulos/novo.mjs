if (sessionStorage.getItem('logado')){
    document.body.innerHTML = '<h1>ESCONDIDA!!!</H1><button id="logout">Logout</button>';
    document.getElementById('logout').onclick = () => {
        sessionStorage.removeItem('logado');
        window.location.href = 'nova.html';
    };
}