export default class ProxyFactory {

    static build(obj, props, action) {

        return new Proxy(obj, {

            get(target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {

                    return function() {
                        let appliedProps = Reflect.apply(target[prop], target, arguments);
                        action(target);
                        return appliedProps;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {

                let appliedProps = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) action(target);
                return appliedProps;
            }
        });
    }

    static _isFunction(func) {

        return typeof(func) == typeof(Function);
    }
}