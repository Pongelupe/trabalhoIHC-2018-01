import Bind from '../helpers/Bind'
import Product from '../models/Product'
import ProductsList from '../models/ProductsList'
import ProductsView from '../views/ProductsView'
import Message from '../models/Message'
import MessageView from '../views/MessageView'
import Debits from '../models/Debits'
import DebitsView from '../views/DebitsView'

export default class SupermarketController {

    constructor() {
        this._init();

        let $ = document.querySelector.bind(document);

        this._inputName = $('#productName');
        this._inputValue = $('#productValue');
        this._inputCategory = $('#productCategory');
        this._listProducts = new Bind(new ProductsList(),
            new ProductsView($('#productsView')), 'add', 'remove', 'removeAll');
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
                    step: "0.01",
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
                    new DebitsView(debitsView), 'addDebit', 'removeDebit', 'removeAll');
            }
        });
    }

    deleteProduct(idProduct) {
        let product = this._listProducts.remove(idProduct);

        this._message.type = 'success';
        this._message.content = `${product.name} removido com sucesso!`;

        this._debits.removeDebit(parseFloat(product.value));
    }

    addProduct(event) {
        event.preventDefault();
        let product = new Product(this._inputValue.value, this._inputName.value, this._inputCategory.value);
        this._addProduct(product);

    }

    info() {
        swal("Ooopsy Daisy!", "Não encontrou o que procurava? Nossa equipe está elaborando novos produtos =)", "info");
    }

    _addProduct(product) {
        let errors = this._isProductValid(product);
        if (errors.length == 0) {

            this._listProducts.add(product);

            this._message.type = 'success';
            this._message.content = `${product.name} adicionado com sucesso!`;

            this._debits.addDebit(product.value);

            this._resetForm();
            this._suggestProduct();
        } else {

            this._message.type = 'danger';
            this._message.content = `Erro ao adicionar:<br/>
                    ${errors.map(error => error).join('<br/>')}`;
        }
    }

    _suggestProduct() {
        if (this._listProducts.length % 3 == 0) {
            let productSugested = this._listProducts.sugestNew();
            swal({
                closeOnClickOutside: false,
                icon: 'warning',
                text: `Deseja adicionar ${productSugested.name} a sua lista?\n
                Por apenas R$ ${productSugested.value}`,
                buttons: ["Não por agora", true]
            })
                .then(value => {
                    if (value)
                        this._addProduct(productSugested);
                });
        }
    }

    _isProductValid(product) {
        let validationsErrors = [];
        if (product.name == '')
            validationsErrors.push('O nome não pode ser vazio!');
        if (product.value <= 1.0)
            validationsErrors.push('O valor deve ser superior a 1,00 real!');

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
        this._inputValue.value = 0.0;
        this._inputCategory.value = 'Alimentação';

        this._inputName.focus();
    }

}
