export class ProductModel {

    private _code: any;
    private _name: any;
    private _price: any;
    private _description: any;
    private _image: any;

    constructor(code?: string, name?: string, price?: number, description?: string, image?: string) {
        this._code = code;
        this._name = name;
        this._price = price;
        this._description = description;
        this._image = image;
    }

    // Setters //
    public set code(v : any) {
        this._code = v;
    }
    public set name(v : any) {
        this._name = v;
    }
    public set price(v : any) {
        this._price = v;
    }
    public set description(v : any) {
        this._description = v;
    }

    public set image(v : any) {
        this._image = v;
    }
    
    // getters //
    public get code() : any {
        return this._code;
    }

    public get name(): any {
        return this._name;
    }

    public get price(): any {
        return this._price;
    }

    public get description(): any {
        return this._description;
    }

    public get image() : any {
        return this._image;
    }
    
}