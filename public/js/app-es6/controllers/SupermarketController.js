class SupermarketController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputName = $('#productName');
        this._inputValue = $('#productValue');
        this._inputCategory = $('#productCategory');
        this._listProducts = new Bind(new ProductsList(),
            new ProductsView($('#productsView')), 'add', 'removeAll');
        this._message = new Bind(
            new Message(), new MessageView($('#mesageView')),
            'content');
    }

    addProduct(event) {
        event.preventDefault();

        let product = new Product(this._inputValue.value, this._inputName.value, this._inputCategory.value);
        let errors = this._isProductValid(product);
        if (errors.length == 0) {

            this._listProducts.add(product);

            this._message.type = 'success';
            this._message.content = `${product.name} adicionado com sucesso!`;

            this._resetForm();
        } else {

            this._message.type = 'danger';
            this._message.content = `Erro ao adicionar:<br/>
                    ${errors.map(error => error).join('<br/>')}`;
        }
    }

    _isProductValid(product) {
        let validationsErrors = [];
        if (product.name == '')
            validationsErrors.push('O nome não pode ser vazio!');
        if (product.value <= 1.0)
            validationsErrors.push('O valor deve ser superior a 1.00 real!');

        return validationsErrors;
    }

    removeAllProducts() {
        this._listProducts.removeAll();
    }

    _resetForm() {

        this._inputName.value = '';
        this._inputValue.value = 0.1;
        this._inputCategory.value = 'Alimentação';

        this._inputName.focus();
    }

}
