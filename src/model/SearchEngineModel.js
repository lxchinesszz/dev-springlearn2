/**
 * name: 'Google',
 * slogan: '使用谷歌试试手气吧',
 * href: 'https://www.google.com/search?q=',
 */
export default class SearchEngineModel {
    constructor(name, slogan, href) {
        this.name = name;
        this.slogan = slogan;
        this.href = href;
    }
    get getName() {
        return this.name;
    }
    set setName(value) {
        this.name = value;
    }
    get getSlogan() {
        return this.slogan;
    }
    set setSlogan(value) {
        this.slogan = value;
    }
    get getHref() {
        return this.href;
    }
    set setHref(value) {
        this.href = value;
    }
}
//# sourceMappingURL=SearchEngineModel.js.map