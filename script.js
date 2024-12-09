// Um array
// Com as colunas: Imagens(url), descricao do produto, e valor.
// Elementos dinamicos dos cards.


const produtos = [
    {
        img: "imagens/imagem4.jpg",
        descrição: "Picanha Tradicional – A estrela do churrasco: macia, suculenta e com a camada de gordura no ponto certo!",
        valor: "R$ 79,99"
    },

    {
        img: "imagens/imagem5.jpg",
        descrição: "Costela de Tira – Uma explosão de sabor em cada pedaço, grelhada com perfeição!",
        valor: "R$ 79,99"
    },

    {
        img: "imagens/imagem6.jpg",
        descrição: "Linguicinha Artesanal – Crocante por fora, suculenta por dentro, o clássico que não pode faltar!",
        valor: "R$ 69,99"
    },

    {
        img: "imagens/imagem7.jpg",
        descrição: "Fraldinha ao Alho – Maciez e tempero que encantam, perfeita para quem ama um toque especial.",
        valor: "R$ 49,99"
    },

    {
        img: "imagens/imagem8.jpg",
        descrição: "Cupim na Brasa – Textura única e sabor intenso, o preferido dos apaixonados por carne!",
        valor: "R$ 9,99"
    },

    {
        img: "imagens/imagem9.jpg",
        descrição: "Costelinha Barbecue – Suculenta e desmanchando na boca, coberta com aquele molho barbecue que é puro amor em cada mordida!",
        valor: "R$ 89,99"
    },

    {
        img: "imagens/imagem10.jpg",
        descrição: "Maminha na Brasa – Macia, suculenta e com aquele sabor irresistível que só a grelha pode dar!",
        valor: "R$ 69,99"
    },

    {
        img: "imagens/imagem11.jpg",
        descrição: "Linguiça Temperada – Sabor marcante e suculência no ponto certo, um clássico que nunca decepciona no churrasco!",
        valor: "R$ 29,99"
    },

    {
        img: "imagens/imagem13.jpg",
        descrição: "Farofa Crocante – Feita com manteiga, cebola douradinha e aquele toque especial que deixa qualquer churrasco mais completo!",
        valor: "R$ 59,99"
    }
]


const produtosContainer = document.querySelector('.row.d-flex')
produtos.forEach(produto => {
    const col = document.createElement('div')
    col.className = "col-sm-4 mb-3 mb-sm-0"
    col.innerHTML = `
        <div class="card w-100">
            <img src="${produto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${produto.descrição}</p>
                <a href="#" class="btn btn-success w-100">${produto.valor}</a>
            </div>
        </div>
    `
    produtosContainer.appendChild(col)
})
