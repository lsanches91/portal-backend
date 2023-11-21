import multer from "multer";
import path from "path";

export default {
    storage: multer.diskStorage({
        //__dirname -> diretorio atual = /src/config
        //destination: path.join(__dirname, "..", "..", "uploads"),
        destination: (request, file, cb) => {
            cb(null, path.resolve("./uploads"));
        },
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        }
    })
}