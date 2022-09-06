import FileContainer from "./FileContainer.js";
import __dirname from "../../../utils.js";


export default class Products extends FileContainer {
    constructor() {
        super(__dirname + "/src/files/products.json")
    }
}