const cloudinary = require('cloudinary').v2; //require
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({                          //configure
  cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
  api_key : process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret : process.env.CLOUDINARY_CLOUD_API_SECRET
});


const storage = new CloudinaryStorage({      //Storage folder
  cloudinary: cloudinary,
  params: {
    folder: 'staysphere_DEV',
    allowedFormats: ["png","jpg","jpeg"],
  },
});


module.exports = {
    cloudinary,
    storage,
}