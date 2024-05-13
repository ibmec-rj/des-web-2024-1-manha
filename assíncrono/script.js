const conteudo = document.createElement('div');

document.body.appendChild(conteudo);

const montaCard = (entrada) => {
    const card = document.createElement('div');
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

    const posicao = document.createElement('p');
    posicao.innerHTML = entrada.posicao;
    posicao.style.gridArea = 'a2';
    posicao.style.display = 'flex';
    posicao.style.alignItems = 'center';
    posicao.style.justifyContent = 'center';
    posicao.style.textTransform=  'uppercase';

    const nome = document.createElement('p');
    nome.innerHTML = entrada.nome;
    nome.style.gridArea = 'a3';
    nome.style.display = 'flex';
    nome.style.alignItems = 'center';
    nome.style.justifyContent = 'center';
    nome.style.fontWeight = 'bold';

    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;
    descricao.style.gridArea = 'a4';

    const nascimento = document.createElement('p');
    nascimento.innerHTML = entrada.nascimento;
    descricao.style.gridArea = 'a5';

    card.appendChild(imgContainer);
    imgContainer.appendChild(imagem);
    card.appendChild(posicao);
    card.appendChild(nome);
    card.appendChild(descricao);
    card.appendChild(nascimento);

    return card;
}

dados.forEach(
    (atleta) => {
        conteudo.appendChild(montaCard(atleta));
    }
)

