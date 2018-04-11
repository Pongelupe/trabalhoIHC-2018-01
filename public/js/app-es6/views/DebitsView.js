class DebitsView {

    constructor(target) {
        this._target = target;
    }

    _build(model) {
        return model.debits > 0 ? `<span class="text-success">${model.debits}</span>` :
            `<span class="text-danger">${model.debits}</span>`;
    }

    update(model) {
        this._target.innerHTML = this._build(model);
    }
}
