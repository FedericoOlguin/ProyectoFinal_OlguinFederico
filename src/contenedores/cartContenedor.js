import fs from "fs"
import __dirname from "../../utils.js"

const path = "./src/files/cart.json"


class CartContenedor {
    getAllCarts = async () => {
        try {
            if (fs.existsSync(path)) {
                let dataFile = await fs.promises.readFile(path, "utf-8")
                return JSON.parse(dataFile)
            } else {
                return []
            }
        } catch (err) {
            console.log("No se puede leer el archivo " + err);
        }
    }
    getCartById = async (id) => {
        try {
            if (fs.existsSync(path)) {
                let dataFile = await fs.promises.readFile(path, "utf-8")
                let retornar = JSON.parse(dataFile).find(res => res.id + "" === id + "")
                if (retornar === undefined) {
                    console.log("El usuario con el id: " + id + " no existe");
                    return null
                } else {
                    return retornar
                }
            } else {
                return []
            }
        } catch (err) {
            console.log("No es posible leer el archivo " + err);
        }
    }
    createCart = async () => {
        let carts = await this.getAllCarts()
        let cart = {
            timestamp: Date.now(),
            products: []
        }
        try {
            if (carts.length === 0) {
                cart.id = 1
                carts.push(cart)
                await fs.promises.writeFile(path, JSON.stringify(carts, null, 2))
                return cart.id
            } else {
                cart.id = (carts[carts.length - 1].id + 1)
                carts.push(cart)
                await fs.promises.writeFile(path, JSON.stringify(carts, null, 2))
                return cart.id
            }

        } catch (err) {
            console.log("No se pudo crear el carrito " + err);
        }
    }
    deleteCart = async (idCart) => {
        let carts = await this.getAllCarts()
        try {
            if (carts.find(res => res.id + "" === "" + idCart)) {
                let newArray = carts.filter(res => res.id != idCart)
                await fs.promises.writeFile(path, JSON.stringify(newArray, null, 2))
                return newArray
            } else {
                return false
            }
        } catch (err) {
            console.log("No se puede escribir el archivo " + err);
        }
    }
    addProduct = async (idCart, product) => {
        let carts = await this.getAllCarts()
        console.log(product);
        try {
            let cart = carts.find(cart => cart.id + "" === idCart + "")
            console.log(cart.products);
            if (!cart) return false
            console.log(cart.products.find(prod => prod.id_prod + "" === product.id_prod + ""));
            if (cart.products.find(prod => prod.id_prod + "" === product.id_prod + "")) {
                cart.products.push(product)
            } else {
                let newList = cart.products.map(prod => prod.id_prod + "" === product.id_prod + "" ? { ...prod, quantity: prod.quantity + product.quantity } : { ...prod })
                cart.products = [...newList]
                let index = carts.indexOf(cart => cart.id + "" === cart.id + "")
                carts.splice(index, 1, cart)
            }
            fs.promises.writeFile(path, JSON.stringify(carts, null, 2))

            return carts

        } catch (err) {
            console.log("No se puede escribir el archivo " + err);
        }
    }
    deleteProduct = async (idCart, idProd) => {
        let carts = await this.getAllCarts()

        try {
            let cart = carts.find(cart => cart.id + "" === idCart + "")
            if (!cart) return false
            cart.products = [...cart.products.filter(prod => prod.id_prod + "" !== idProd + "")]
            let index = carts.indexOf(cart => cart.id + "" === cart.id + "")
            carts.slice(index, 1, cart)
            fs.promises.writeFile(path, JSON.stringify(carts, null, 2))

            return cart

        } catch (err) {
            console.log("No se puede escribir el archivo " + err);
        }
    }

}

export default CartContenedor