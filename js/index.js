// Um array
// Com as colunas: Imagens(url), descricao do produto, e valor.
// Elementos dinamicos dos cards.


const produtosContainer = document.querySelector('#innerProdutos')

let produtos = []

$.ajax({
    url: "https://jezdev.com.br/estudo_ste/",
    method: "GET",
    success: function (result) {
        console.log(result)

        produtos = result.message.data

        for (produto of result.message.data) {
            let quantidade = 1
            let carrinho = localStorage.getItem("carrinho")
            if (carrinho) {
                carrinho = JSON.parse(carrinho)
                console.log(carrinho)

                for (c of carrinho) {
                    if (produto.id == c.id) {
                        quantidade = c.quantidadeCarrinho
                    }
                }
            }

            const col = document.createElement('div')
            col.className = "col-sm-4 mb-3 mb-sm-0"
            col.innerHTML = `
                <div class="card w-100">
                    <img src="${produto.imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${produto.titulo} - ${produto.descricao}</p>
                        <button onclick="cliquei(this.parentElement)" class="btn btn-success w-100 botaoValor">${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</button>
                        <div class="btn-group visually-hidden w-100" role="group" aria-label="Basic example">
                            <button type="button" onclick="quantidade(this, -1, ${produto.id})" class="btn btn-primary"><i class="bi bi-dash-lg w-50"></i></button>
                            <div id="quantidade" class="position-absolute top-0 z-3 start-50 translate-middle badge rounded-pill bg-dark fs-6">${quantidade}</div>
                            <button type="button" onclick="quantidade(this, 1, ${produto.id})" class="btn btn-primary"><i class="bi bi-plus-lg w-50"></i></button>
                        </div>
                    </div>
                </div>
            `
            produtosContainer.appendChild(col)
        }
    }
});

function cliquei(cardbody) {
    var btngroup = cardbody.querySelector('.btn-group')
    btngroup.classList.remove('visually-hidden')

    var botaoValor = cardbody.querySelector('.botaoValor')
    botaoValor.classList.add('visually-hidden')
}

function quantidade(elemento, quantidade, id) {
    console.log(elemento, quantidade, id)

    let produto;

    for (p of produtos) {
        if (id == p.id) {
            produto = p
            break
        }
    }

    let carrinho = localStorage.getItem("carrinho")
    if (carrinho) {
        carrinho = JSON.parse(carrinho)
        console.log(carrinho)

        let produtoEncontrado;

        for (c of carrinho) {
            if (id == c.id) {

                c.quantidadeCarrinho += quantidade
                if (c.quantidadeCarrinho == 0) {
                    c.quantidadeCarrinho = 1
                }

                if (c.quantidadeCarrinho >= c.quantidade) {
                    c.quantidadeCarrinho = c.quantidade
                }

                produtoEncontrado = c
                break
            }
        }

        if (produtoEncontrado == null) {
            produto.quantidadeCarrinho = 1
            carrinho.push(produto)
            elemento.parentElement.querySelector("#quantidade").innerHTML = 1
        }
        else {
            elemento.parentElement.querySelector("#quantidade").innerHTML = produtoEncontrado.quantidadeCarrinho
        }

        let arrayProdutos = JSON.stringify(carrinho)
        localStorage.setItem("carrinho", arrayProdutos)
    }
    else {
        produto.quantidadeCarrinho = 1
        let arrayProdutos = JSON.stringify([produto])
        console.log(arrayProdutos)
        localStorage.setItem("carrinho", arrayProdutos)
    }


    //     localStorage.setItem("carrinho", carrinho);
    //     localStorage.getItem("lastname");
}
