import { Router } from "express"
import ProductsContenedor from "../contenedores/productsContenedor.js"
import productsController from "../controllers/productsController.js"
const productsC = new ProductsContenedor()
const router = Router()


router.route("/")
    .get(productsController.getAllProducts)
    .post(productsController.addProduct)

router.route("/:id")
    .get(productsController.getById)
    .delete(productsController.delete)
    .put(productsController.updateById)



export default router