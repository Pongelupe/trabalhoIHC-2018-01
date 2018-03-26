class Product {

    constructor(value, name, category) {
        this._value = value;
        this._name = name;
        this._category = category;
    }

    get value() {
        return this._value;
    }

    get name() {
        return this._name;
    }

    get category() {
        return this._category;
    }
}