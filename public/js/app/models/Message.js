export default class Message {

    constructor(content) {

        this._content = content || '';
        this._type = 'info';
    }

    get content() {

        return this._content;
    }

    set content(content) {

        this._content = content;
    }

    set type (type) {

        this._type = type;
    }

    get type() {

        return this._type;
    }
}