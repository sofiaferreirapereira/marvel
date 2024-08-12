let login = '', senha, qtdCont = 0, valor = 0, totalGeral = 0, cesta, loginAut, article
let div, div2, h2, h3, input, p1, p2, p3, span, span2, aLink, aLink2, main, section
let usuarios = [], senhas = []

let produto = []
if(localStorage.produtosArray) {
    produto = JSON.parse(localStorage.getItem('produtosArray'))
}

let codigoProduto = []
if(localStorage.codigoProdutoArray) {
    codigoProduto = JSON.parse(localStorage.getItem('codigoProdutoArray'))
}

let precoProduto = []
if(localStorage.precoProdutoArray) {
    precoProduto = JSON.parse(localStorage.getItem('precoProdutoArray'))
}

let linkProduto = []
if(localStorage.linkProdutoArray) {
    linkProduto = JSON.parse(localStorage.getItem('linkProdutoArray'))
}

let descricaoProduto = []
if(localStorage.descricaoProdutoArray) {
    descricaoProduto = JSON.parse(localStorage.getItem('descricaoProdutoArray'))
}

let quantidadeProduto = []
if(localStorage.quantidadeProdutoArray) {
    quantidadeProduto = JSON.parse(localStorage.getItem('quantidadeProdutoArray'))
}

let totalCompra = []
if(localStorage.totalCompraArray) {
    totalCompra = JSON.parse(localStorage.getItem('totalCompraArray'))
}

function getDados() {
    if(localStorage.quantidadeProdutoArray) {
        quantidadeProduto = JSON.parse(localStorage.getItem('quantidadeProdutoArray'))
    }
    localStorage.quantidadeProdutoArray = JSON.stringify(quantidadeProduto)

    if(localStorage.totalCompraArray) {
        totalCompra = JSON.parse(localStorage.getItem('totalCompraArray'))
    } 
    localStorage.totalCompraArray = JSON,stringify(totalCompra)

    // Produto
    if(localStorage.produtosArray) {
        produto = JSON.parse(localStorage.getItem('produtosArray'))
    }
    let prod = document.getElementById('produto').value 
    produto.push(prod)
    localStorage.produtosArray = JSON.stringify(produto)
    document.getElementById('produto').value = ''

    // Descrição do produto
    if(localStorage.descricaoProdutoArray) {
        descricaoProduto = JSON.parse(localStorage.getItem('descricaoProdutoArray'))
    }
    let descricao = document.getElementById('descricaoProduto').value 
    descricaoProduto.push(descricao)
    localStorage.descricaoProdutoArray = JSON.stringify(descricaoProduto)
    document.getElementById('descricaoProduto').value = ''
    
    // Código do produto
    if(localStorage.codigoProdutoArray) {
        codigoProduto = JSON.parse(localStorage.getItem('codigoProdutoArray'))
    }
    let codigo = document.getElementById('codigoProduto').value 
    codigoProduto.push(codigo)
    localStorage.codigoProdutoArray = JSON.stringify(codigoProduto)
    document.getElementById('codigoProduto').value = ''
    
    // Preço do produto
    if(localStorage.precoProdutoArray) {
        precoProduto = JSON.parse(localStorage.getItem('precoProdutoArray'))
    }
    let preco = document.getElementById('precoProduto').value 
    precoProduto.push(parseFloat(preco.replace(',', '.')))
    localStorage.precoProdutoArray = JSON.stringify(precoProduto)
    document.getElementById('precoProduto').value = ''

    alert("Dados Inseridos com Sucesso!")
}

function criandoHTML() {
    main = document.createElement('main') // criando um elemento main
    main.setAttribute('class', 'container') // igual a fazer < main class='container'> no HTML
    document.body.append(main) // adicionando a main no body do HTML

    section = document.createElement('section') // criando um elemento section
    section.setAttribute('class', 'products-container')
    main.append(section)

    for(i in produto) {
        article = document.createElement('article') // criando um elemento article
        article.setAttribute('class', 'card') // criando a classe card
        section.append(article)

        div = document.createElement('div')
        div.setAttribute('class', 'product-image')
        div.setAttribute('id', 'img-' + i)
        article.append(div)
        document.getElementById('img-' + 1).style.backgroundImage = 'url(imagens/img' + i + '.jpg)'
    }

}