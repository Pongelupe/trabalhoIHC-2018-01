export default class MessageView {

    constructor(target) {
        this._target = target;
    }

    _build(model) {
        return model.content ? `<p class="alert alert-${model.type}">${model.content}</p>` : '<p></p>';
    }

    update(model) {
        this._target.innerHTML = this._build(model);
    }
}