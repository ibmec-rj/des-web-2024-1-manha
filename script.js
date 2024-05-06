console.log("Usando forEach", "-----------------------------------------------------------");

dados.forEach(
    (ob) => {
        console.log(ob.nome)
    }
)

console.log("Usando while", "-----------------------------------------------------------");

let indice = 0;

while (indice < dados.length){
    console.log(`A posição de ${dados[indice].nome} é ${dados[indice].posicao}`);
    indice++;
}

console.log("Usando for clássico", "-----------------------------------------------------------");

for (let contador = 0; contador < dados.length; contador++){
    console.log(`A altura de ${dados[contador].nome} é ${dados[contador].altura}`);
}

console.log("usando for...of", "-----------------------------------------------------------");

for (let atleta of dados){
    console.log(`A nome completo de ${atleta.nome} é ${atleta.nome_completo}`);
}


const atleta = dados[10];

const conteudo = document.getElementById("conteúdo");

conteudo.innerHTML = `
    <div>
        <img src='${atleta.imagem}' alt='Foto de ${atleta.nome}'>
    </div>
`;