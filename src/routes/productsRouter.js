import { Router } from "express"
import productsController from "../controllers/productsController.js"
import { authorization } from "../../utils.js"
const { isAdmin } = authorization
const router = Router()


router.route("/")
    .get(productsController.getAllProducts)
    .post(isAdmin, productsController.addProduct)

router.route("/:id")
    .get(productsController.getById)
    .delete(isAdmin, productsController.delete)
    .put(isAdmin, productsController.updateById)



export default router