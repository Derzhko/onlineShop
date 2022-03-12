import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"}
        ]
        this._brands = [
            {id: 1, name:"Samsung"},
            {id: 2, name:"Apple"}
        ]
        this._devices = [
            {id: 1, name: "12 pro", price: 100000, rating: 0, img: "bf92b742-d0e9-4eaf-b4fa-0e26c1b7a57a.jpg", typeId: 2, brandId: 2},
            {id: 2, name: "a51", price: 100000, rating: 0, img: "253f6672-96cb-40d9-8133-4bf1a930b26a.jpg", typeId: 2, brandId: 1},
            {id: 3, name: "macbook pro 13", price: 100000, rating: 0, img: "912037f8-7e92-4499-ba03-e3d2f32a6ca8.jpg", typeId: 3, brandId: 2},
            {id: 4, name: "10 mini", price: 100000, rating: 0, img: "bc228c75-8014-49fe-b0ad-aaa8eeb3b6ea.jpg", typeId: 2, brandId: 2},
            {id: 5, name: "forester", price: 100000, rating: 0, img: "673a5768-3117-4f7a-b53a-9a124d992134.jpg", typeId: 1, brandId: 3},
            {id: 6, name: "Lenovo bh10", price: 100000, rating: 0, img: "d4140139-f0c6-4735-bf35-3338fc0ebcaf.jpg", typeId: 3, brandId: 3}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}