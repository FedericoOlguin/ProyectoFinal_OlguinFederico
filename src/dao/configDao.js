const persistence = "MONGO"


let productsService;
let cartService
switch (persistence) {
    case "MEMORY":
        const { default: MemProduct } = await import("./MemoryDao/Products.js")
        const { default: MemCart } = await import("./MemoryDao/Carts.js")
        productsService = new MemProduct()
        cartService = new MemCart()
        break
    case "MONGO":
        const { default: MongoProduc } = await import("./MongoDao/Products.js")
        const { default: MongoCart } = await import("./MongoDao/Carts.js")
        productsService = new MongoProduc()
        cartService = new MongoCart()
        break;
    case "FILE":
        const { default: FileProduct } = await import("./FilesDao/Poducts.js")
        const { default: FileCart } = await import("./FilesDao/Carts.js")
        productsService = new FileProduct()
        cartService = new FileCart()
        break
}


const service = {
    productsService,
    cartService
}


export default service 