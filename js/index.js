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
                        <button onclick="cliquei(this.parentElement)" class="btn btn-success w-100 botaoValor">${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</button>
                        <div class="btn-group visually-hidden w-100" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary"><i class="bi bi-dash-lg w-50"></i></button>
                            <button type="button" class="btn btn-primary"><i class="bi bi-plus-lg w-50"></i></button>
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


