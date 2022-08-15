import CartContenedor from "../contenedores/cartContenedor.js";

const cartC = new CartContenedor()


const CartController = {
    createCart: async (req, res) => {
        try {
            let idCart = await cartC.createCart()
            res.json({ status: 200, idCart })
        } catch (err) {
            res.json({ status: 500, message: "Algo salio mal, vuelava a intentar nuevamente mas tarde" })
        }
    },
    deleteCart: async (req, res) => {
        try {
            let array = await cartC.deleteCart(req.params.id)
            if (!array) return res.json({ status: 400, message: "El producto no se encontro o ya fue eliminado" })
            res.json({ status: 200, array })
        } catch (err) {
            res.json({ status: 500, message: "Algo salio mal, vuelava a intentar nuevamente mas tarde" })
        }
    },
    getProductsCart: async (req, res) => {
        try {
            let cart = await cartC.getCartById(req.params.id)
            res.json({ status: 200, products: cart.products })
        } catch (err) {
            res.json({ status: 500, message: "Algo salio mal, vuelava a intentar nuevamente mas tarde" })
        }
    },
    addProducts: async (req, res) => {
        const prod = req.body
        try {
            let cart = await cartC.addProduct(req.params.id, prod)
            if (!cart) return res.json({ status: 400, message: "EL carrito no existe" })
            res.json({ status: 200, cart })

        } catch (err) {
            res.json({ status: 500, message: "Algo salio mal, vuelava a intentar nuevamente mas tarde" })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            let cart = await cartC.deleteProduct(req.params.id, req.params.id_prod)
            if (!cart) return res.json({ status: 400, message: "No se econtro el producto" })
            res.json({ status: 200, cart })
        } catch (err) {
            res.json({ status: 500, message: "Algo salio mal, vuelava a intentar nuevamente mas tarde" })
        }
    },

}


export default CartController