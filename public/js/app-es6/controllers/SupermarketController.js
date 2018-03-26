class SupermarketController {

    constructor() {
        this._init();

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

    _init() {
        swal({
            closeOnEsc: false,
            closeOnClickOutside: false,
            text: "Insira o valor que será gasto nesta compra!",
            content: {
                element: "input",
                attributes: {
                    value: "0.00",
                    type: "Number",
                    step: "0.01"
                },
            }
        }).then(value => {
            if (!value)
                this._init();
            else {
                this._initialValue = value;
                document.querySelector('#initialValue').innerHTML = value;
                let debitsView = document.querySelector('#debits');
                this._debits = new Bind(new Debits(value),
                    new DebitsView(debitsView), 'addDebit', 'removeAll');
            }
        });
    }

    addProduct(event) {
        event.preventDefault();

        let product = new Product(this._inputValue.value, this._inputName.value, this._inputCategory.value);
        let errors = this._isProductValid(product);
        if (errors.length == 0) {

            this._listProducts.add(product);

            this._message.type = 'success';
            this._message.content = `${product.name} adicionado com sucesso!`;

            this._debits.addDebit(product.value);

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
        swal({
            icon: 'warning',
            text: "Deseja limpar sua lista?",
            buttons: ["Cancelar", true]
        })
            .then(value => {
                if (value) {
                    this._listProducts.removeAll();
                    this._debits.removeAll();
                }
            });
    }

    _resetForm() {

        this._inputName.value = '';
        this._inputValue.value = 0.1;
        this._inputCategory.value = 'Alimentação';

        this._inputName.focus();
    }

}