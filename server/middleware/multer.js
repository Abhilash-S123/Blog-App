import multer from 'multer';


// Define storage (where files go)
const upload = multer({storage: multer.diskStorage({})})




export default upload;