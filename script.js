// Um array
// Com as colunas: Imagens(url), descricao do produto, e valor.
// Elementos dinamicos dos cards.


const produtosContainer = document.querySelector('#innerProdutos')


$.ajax({
    url: "https://jezdev.com.br/estudo_ste/",
    method: "GET",
    success: function (result) {
        console.log(result)

        for (produto of result.message.data) {
            const col = document.createElement('div')
            col.className = "col-sm-4 mb-3 mb-sm-0"
            col.innerHTML = `
                <div class="card w-100">
                    <img src="${produto.imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${produto.titulo} - ${produto.descricao}</p>
                        <a href="#" class="btn btn-success w-100">R$ ${produto.valor}</a>
                    </div>
                </div>
            `
            produtosContainer.appendChild(col)
        }

    }
});