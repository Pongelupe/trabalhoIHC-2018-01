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
                    <td>
                        ${product.category}
                        ${this._defineIcon(product.category)}
                    </td>
                    <td>
                            R$ ${product.value}
                            <i class="far fa-trash-alt" onclick='supermarketController.deleteProduct("${product.id}")'></i>
                    </td>
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

    _defineIcon(category) {
        switch (category) {
            case 'Alimentação':
                return '<i class="fas fa-glass-martini"></i>';
                break;
            case 'Papelaria':
                return '<i class="far fa-sticky-note"></i>';
                break;
            case 'Higiênie Pessoal':
                return '<i class="fas fa-shower"></i>';
                break;
        }
    }

    update(model) {
        this._target.innerHTML = this._build(model);
    }
}