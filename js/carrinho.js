let carrinho = localStorage.getItem("carrinho")
if (carrinho) {
    carrinho = JSON.parse(carrinho)
    console.log(carrinho)
}

// for passando por todos os produtos do carrinho, e add o html na tela.
// innerHtml

for (c of carrinho) { 
    document.getElementById('listaDeProdutos').innerHTML += `<div class="row border p-2">
                    <div class="col-md-3">
                        <img src="${c.imagem}" class="w-100" alt="">
                    </div>
                    <div class="col">
                        <div class="row h-100">
                            <div class="col-md-8">
                                <p class="m-0">${c.titulo}</p>
                                <p>Quantidade: ${c.quantidadeCarrinho}</p>
                                <button class="btn btn-outline-danger btn-sm">Remover</button>
                            </div>
                            <div class="col d-flex align-items-center justify-content-center">
                                <p class="m-0">R$ ${c.valor * c.quantidadeCarrinho}</p>
                            </div>
                        </div>
                    </div>
                </div>` 
}