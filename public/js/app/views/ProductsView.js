export default class ProductsView {

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

                <tr style="background-color:${this._defineColor(product.category)};">
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
                return `<i class="fas fa-glass-martini" data-placement="right" data-toggle="tooltip" title="${category}"></i>`;
                break;
            case 'Papelaria':
                return `<i class="far fa-sticky-note" data-placement="right" data-toggle="tooltip" title="${category}"></i>`;
                break;
            case 'Higiênie Pessoal':
                return `<i class="fas fa-shower" data-placement="right" data-toggle="tooltip" title="${category}"></i>`;
                break;
        }
    }
    _defineColor(category) {
        switch (category) {
            case 'Alimentação':
                return 'lightblue';
                break;
            case 'Papelaria':
                return 'coral';
                break;
            case 'Higiênie Pessoal':
                return 'palegreen';
                break;
        }
    }

    update(model) {
        this._target.innerHTML = this._build(model);
    }
}
