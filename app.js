import express from "express";
import prodRouter from "./src/routes/productsRouter.js"

const app = express()


const PORT = process.env.PORT || 8080


app.use(express.json())
app.use("/api/products", prodRouter)

const server = app.listen(PORT, () => console.log("Server connect on port " + PORT))