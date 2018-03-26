class SupermarketController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputName = $('#productName');
        this._inputValue = $('#productValue');
        this._inputCategory = $('#productCategory');
        this._listProducts = new Bind(new ProductsList(), new ProductsView($('#productsView')), 'add', 'removeAll');
    }

    addProduct(event) {
        event.preventDefault();

        let product = new Product(this._inputValue.value, this._inputName.value, this._inputCategory.value);
        this._listProducts.add(product);

        this._resetForm();
    }

    removeAllProducts(){
        this._listProducts.removeAll();
    }

    _resetForm() {

        this._inputName.value = '';
        this._inputValue.value = 0.1;
        this._inputCategory.value = 'Alimentação';

        this._inputName.focus();
    }

}
