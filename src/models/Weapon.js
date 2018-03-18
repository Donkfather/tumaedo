export default class Weapon {
    constructor({id, name, img}) {
        this.id = id;
        this.name = name;
        this.img = (img) ? img : '/public/images/scarlet.png';
    }
}