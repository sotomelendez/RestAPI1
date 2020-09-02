const uploadFolder = __basedir + '/uploads/';
const fs = require('fs');
const multer = require('../config/multer.config.js');
let upload = multer.single("file");


// exports.uploadFile = (req, res) => {
// 	res.send('File uploaded successfully! -> filename = ' + req.file.filename);
// }

exports.uploadFile = (req, res) => {
	upload(req, res, function(err) {
		try {
			if(err) {
				res.status(400).json({ msg : err});
			}
			else {
				res.status(200).send();		
			}
		}
		catch(ex) {
			res.status(500).send();
		}
	});
}
 
exports.listUrlFiles = (req, res) => {
	fs.readdir(uploadFolder, (err, files) => {
		for (let i = 0; i < files.length; ++i) {
			files[i] = "http://localhost:8080/api/file/" + files[i];
		}
		
		res.send(files);
	})
}

exports.downloadFile = (req, res) => {
	let filename = req.params.filename;
	res.download(uploadFolder + filename);  
}