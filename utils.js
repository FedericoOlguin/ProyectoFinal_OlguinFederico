import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default __dirname


export const authorization = {

    isAdmin: (req, res, next) => {
        if (req.user) {
            next()
        } else {
            res.json({ status: 401, message: "Unauthorized" })
        }

    }
}






