class Debits {
    constructor(initialValue) {
        this._initialValue = initialValue;
        this._debits = initialValue;
    }

    get initialValue() {
        return this._initialValue;
    }
    get debits() {
        return parseFloat(Math.round(this._debits * 100) / 100).toFixed(2);
    }

    addDebit(value) {
        this._debits -= value;
    }
    
    removeDebit(value) {        
        this._debits += value;
    }

    removeAll() {
        this._debits = this._initialValue;
    }

}