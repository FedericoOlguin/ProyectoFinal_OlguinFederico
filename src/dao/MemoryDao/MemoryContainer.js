export default class MemoryContainer {
    constructor() {
        this.data = []
    }

    getAll = () => {
        return this.data
    }

    save = (element) => {
        if (this.data.length === 0) {
            element._id = 1
            this.data.push(element)
            return element
        } else {
            element._id = (this.data[this.data.length - 1]._id + 1)
            this.data.push(element)
            return element
        }
    }
    update = (id, update) => {
        let newData = this.data
        newData.map(element => element.id === id ? { ...element, ...update } : { ...element })
        this.data = newData
        return this.data
    }

    delete = (id) => {
        let newData = this.data.filter(ele => ele.id !== id)
        this.data = newData
        return this.data
    }
    getById = (id) => {
        return this.data.find(element => element._id === id)
    }
}