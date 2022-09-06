import FileContainer from "./FileContainer.js";
import __dirname from "../../../utils.js";

export default class Cart extends FileContainer {
    constructor() {
        super(__dirname + "/src/files/cart.json")
    }
}