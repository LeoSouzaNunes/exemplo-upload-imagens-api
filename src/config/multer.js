import multer from "multer";
import path from "path";

const multerConfig = {
    dest: path.resolve("src", "temp", "data"),

    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve("src", "temp", "data"));
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        },
    }),
};
export default multerConfig;
