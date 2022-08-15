import ProductsContenedor from "../contenedores/productsContenedor.js"
const productsC = new ProductsContenedor()




const productsController = {

    getAllProducts: async (req, res) => {
        try {

            let products = await productsC.getAllProducts()
            res.json({ status: 200, products })
        } catch (err) {
            console.log(err);
        }
    },
    getById: ("/:id", async (req, res) => {
        try {
            let products = await productsC.getById(parseInt(req.params.id))
            if (products === null) return res.json({ message: `El Producto con id: ${req.params.id} no existe` })
            res.json({ status: 200, products })
        } catch (err) {
            console.log(err);
        }
    }),
    addProduct: async (req, res) => {
        let product = req.body
        console.log(product);
        if (product === undefined) return res.json({ status: 400, message: "El producto no se envio correctamente" })
        if (product.name === "" || product.price === "" || product.thumbnail === "" || product.description === "" || product.code === "") return res.json({ status: 400, message: "El producto no se envio correctamente" })
        let saveProduct = await productsC.saveProduct(product)
        res.json({ status: 200, message: "El producto se cargo correctamente", products: [...saveProduct] })
    },
    delete: async (req, res) => {
        let deleted = await productsC.delete(req.params.id)
        if (deleted) return res.send("Producto no encontrado")
        res.json({ status: 200, message: `Producto con id: ${req.params.id} eliminado` })
    },
    updateById: async (req, res) => {
        let respuesta = await productsC.updateById(req.params.id, req.body)
        if (!respuesta) return res.json({ status: 400, message: "El producto no fue encontrado" })
        res.json({ status: 200, respuesta })
    }

}
export default productsController