class Product {

    constructor(value, name, category) {
        this._id = IdGenerator.createNewId();
        this._value = value;
        this._name = name;
        this._category = category;
    }


    get id() {
        return this._id;
    }

    get value() {
        return parseFloat(Math.round(this._value * 100) / 100).toFixed(2);
    }

    get name() {
        return this._name;
    }

    get category() {
        return this._category;
    }
}