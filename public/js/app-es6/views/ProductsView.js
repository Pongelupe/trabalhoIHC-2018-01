class ProductsView {

    constructor(target) {
        this._target = target;
    }

    _build(model) {
        let products = model.products;
        return products.length == 0 ? `
      <div class="alert alert-warning">
        <strong>Atenção!</strong> Sua lista de produtos está vazia!<br/>
        Adicione novos produtos preenchendo os campos acima e depois clicando em Adicionar novo produto.
      </div>
        ` : `
        <table class="table table-hover table-bordered">
        
        <thead>
            <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Valor</th>
            </tr>
        </thead>
    
        <tbody>
            ${products.map(product => `
                
                <tr>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>R$ ${product.value}</td>
                </tr>
                
            `).join('')}                
        </tbody>
              
        <tfoot>
            <td colspan="2">Total à pagar</td>
            <td>
                R$ ${model.totalValue}
            </td>
        </tfoot>
        
    </table>
        `;
    }

    update(model) {
        this._target.innerHTML = this._build(model);
    }
}