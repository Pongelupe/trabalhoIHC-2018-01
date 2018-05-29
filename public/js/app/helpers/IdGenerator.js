export default class IdGenerator {

    static createNewId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

}