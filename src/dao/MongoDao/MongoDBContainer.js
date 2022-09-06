import mongoose from "mongoose"

export default class MongoDBContainer {
    constructor(collection, schema) {
        mongoose.connect("mongodb+srv://proyectoCoder:proyectoCoder@cluster0.6bm75ux.mongodb.net/ecommerce?retryWrites=true&w=majority", (err) => {
            if (err) console.log(err)
            else console.log("Connected database")
        })
        this.model = mongoose.model(collection, schema)
    }

    getAll = async () => {
        let res = await this.model.find()
        return res
    }

    save = async (element) => {
        console.log(element);
        let res = await this.model.create(element)
        return res
    }

    delete = async (id) => {
        let res = await this.model.findByIdAndDelete({ _id: id })
        return res
    }

    update = async (id, data) => {
        let res = await this.model.findOneAndUpdate({ _id: id }, { ...data }, { new: true })
        return res
    }

    getById = async (id) => {
        let res = await this.model.findById({ _id: id }, { _id: 0 })
        return res
    }
    // getProducts = async (id) => {
    //     let res = await this.model.findById({ _id: id }, { products: 1 })
    //     return res
    // }
}