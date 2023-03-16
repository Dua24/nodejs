const path = require('path');

const uploadSingleFile = async (file) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

    // get .png
    let extName = path.extname(file.name);
    // get name file
    let basename = path.basename(file.name, extName);
    // final new file name
    let file_name = basename + "-" + new Date().getTime() + extName;

    let uploadPath = path.resolve(__dirname, "../public/images/upload", file_name);

    //write with promise
    try {
        await file.mv(uploadPath)
        return {
            status: 'success',
            path: file_name,
            error: null
        }
    } catch (error) {
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        }
    }


    //write with callback
    sampleFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
}

const uploadMultiFile = async (files) => {
    //write with promise
    let result = []
    let totalUploaded = 0
    if (files) {
        for (let i = 0; i < files.length; i++) {
            // get .png
            let extName = path.extname(files[i].name);
            // get name files[i]
            let basename = path.basename(files[i].name, extName);
            // final new files[i] name
            let file_name = basename + "-" + new Date().getTime() + extName;

            let uploadPath = path.resolve(__dirname, "../public/images/upload", file_name);
            try {
                await files[i].mv(uploadPath)
                result.push(
                    {
                        status: 'success',
                        path: file_name,
                        fileName: files[i].name,
                        error: null
                    }
                )
                totalUploaded++
            } catch (error) {
                result = {
                    status: 'failed',
                    path: null,
                    fileName: files[i].name,
                    error: JSON.stringify(error)
                }

            }
        }
        return {
            countSuccess: totalUploaded,
            detail: result

        }
    }



}

module.exports = { uploadSingleFile, uploadMultiFile }