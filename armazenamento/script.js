let dados;

const divPesquisa = document.createElement('div');
divPesquisa.style.textAlign = 'center';
divPesquisa.style.padding = '5px';

const inputPesquisa = document.createElement('input');
inputPesquisa.type = 'text';
inputPesquisa.name = 'pesquisa';

divPesquisa.appendChild(inputPesquisa);

document.body.appendChild(divPesquisa);


const conteudo = document.createElement('div');
conteudo.style.display = 'flex';
conteudo.style.flexWrap = 'wrap';
conteudo.style.justifyContent = 'center';
conteudo.style.alignItems = 'center';
conteudo.style.gap = '10px';
conteudo.innerHTML = 'carregando...';

document.body.appendChild(conteudo);

const handleClick = ( evento ) => {
    const card = evento.target.closest('article'); 
    for (const propriedade in card.dataset){
        document.cookie = `${propriedade}=${card.dataset[propriedade]}`;
    }
}

const montaCard = (entrada) => {
    const card = document.createElement('article');
    card.style.display = 'grid';
    card.style.gridTemplateColumns = '1fr 2fr';
    card.style.gridTemplateAreas = `
    "a1 a2"
    "a1 a3"
    "a4 a4"
    "a5 a5"
    `;
    card.style.width = '30rem';
    card.style.border = 'solid';
    card.style.padding = '.3rem';

    card.dataset.id = entrada.id;
    card.dataset.elenco = entrada.elenco;
    card.dataset.nome = entrada.nome;
    card.dataset.posicao = entrada.posicao;
    card.dataset.imagem = entrada.imagem;
    card.dataset.descricao = entrada.descricao;
    card.dataset.nomeCompleto = entrada.nome_completo;
    card.dataset.nascimento = entrada.nascimento;
    card.dataset.altura = entrada.altura;

    card.onclick = handleClick;

    const imgContainer = document.createElement('div');
    imgContainer.style.gridArea = 'a1';
    imgContainer.style.display = 'flex';
    imgContainer.style.alignItems = 'center';
    imgContainer.style.justifyContent = 'center';

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `Foto de ${entrada.nome}`;
    imagem.style.width = '7rem';
    imagem.style.height = '7rem';
    imagem.style.borderRadius = '50%';
    imagem.style.objectFit = 'cover';
    imagem.style.objectPosition = 'top';

    const posicao = document.createElement('p');
    posicao.innerHTML = `Posição: ${entrada.posicao}`;
    posicao.style.cssText = `
        grid-area: a2;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
    `;
    /*posicao.style.gridArea = 'a2';
    posicao.style.display = 'flex';
    posicao.style.alignItems = 'center';
    posicao.style.justifyContent = 'center';
    posicao.style.textTransform=  'uppercase';*/

    const nome = document.createElement('p');
    nome.innerHTML = `Nome: ${entrada.nome}`;
    /*nome.className = 'nome';*/
    nome.style.gridArea = 'a3';
    nome.style.display = 'flex';
    nome.style.alignItems = 'center';
    nome.style.justifyContent = 'center';
    nome.style.fontWeight = 'bold';

    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;
    descricao.style.gridArea = 'a4';
    descricao.style.textOverflow = 'ellipsis';
    descricao.style.overflow = 'hidden';
    descricao.style.whiteSpace = 'nowrap';

    const nascimento = document.createElement('p');
    nascimento.innerHTML = entrada.nascimento;
    nascimento.style.gridArea = 'a5';

    card.appendChild(imgContainer);
    imgContainer.appendChild(imagem);
    card.appendChild(posicao);
    card.appendChild(nome);
    card.appendChild(descricao);
    card.appendChild(nascimento);

    return card;
}



inputPesquisa.onkeyup = (ev) => {
    console.log(ev.target.value);
    
    if (ev.target.value.length > 3 || ev.target.value.length == 0){
        const filtrado = dados.filter(
            (elemento) => {
                const estaNoNome = elemento.nome.toLowerCase().includes(ev.target.value.toLowerCase());
                const estaNaPosicao = elemento.posicao.toLowerCase().includes(ev.target.value.toLowerCase());
                return estaNoNome || estaNaPosicao;
            }
        )
    
        conteudo.innerHTML = '';
    
        filtrado.forEach(
            (atleta) => {
                conteudo.appendChild(montaCard(atleta));
            }
        )
    }

    
}




const pegaDados = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json()
    return dados;
}

pegaDados("https://botafogo-atletas.mange.li/feminino").then(
    (entrada) => {
        dados = entrada;
        conteudo.innerHTML = '';
        dados.forEach(
            (atleta) => {
                conteudo.appendChild(montaCard(atleta));
            }
        )
    });

console.log('síncrono')