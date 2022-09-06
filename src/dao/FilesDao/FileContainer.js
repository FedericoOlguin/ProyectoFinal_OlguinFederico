import fs from "fs"




export default class FileContainer {
    constructor(path) {
        this.data = path
    }

    getAll = async () => {
        try {
            let res = await fs.promises.readFile(this.data, "utf-8")
            return JSON.parse(res)

        } catch (err) {
            console.log(err);
        }
    }

    save = async (element) => {
        let data = this.getAll()
        if (this.data.length === 0) {
            element._id = 1
            data.push(element)
            let res = await fs.promises.writeFile(this.data, JSON.stringify(data, null, 2))
            return element
        } else {
            element._id = (this.data[this.data.length - 1]._id + 1)
            data.push(element)
            let res = await fs.promises.writeFile(this.data, JSON.stringify(data, null, 2))
            return element
        }
    }

    delete = async (id) => {
        let all = await this.getAll()
        if (all.find(res => res.id + "" === "" + id)) {
            let resFil = all.filter(element => element.id + "" !== id + "")
            await fs.promises.writeFile(this.data, JSON.stringify(resFil))
            return true
        } else {
            return false
        }
    }

    update = async (id, data) => {
        let array = await this.getAll()
        let index = array.indexOf(res => res.id + "" === "" + id)
        data.id = id
        array.splice(index, 1, data)
        let res = await fs.promises.writeFile(this.data, JSON.stringify(array))
        return res
    }

    getById = async (id) => {
        let array = await this.getAll()
        let res = array.filter(res => res.id + "" === "" + id)
        return res
    }
}
