const express = require("express");
const router = express.Router();
const { readdirSync, statSync } = require('fs')
const { join } = require('path')

let myPhotoAlbums = {}

const source = '../Portfolio–User/public/images/photography';
const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
const folderNames = dirs(source)
folderNames.map(folder =>{
    myPhotoAlbums[folder] = {
        images: [],
        length: ""
    }
    const folderContents = `${source}/${folder}`
    readdirSync(folderContents).forEach(image =>{
        if(image.toLocaleLowerCase().includes('.png') || image.toLocaleLowerCase().includes('.jpg') || image.toLocaleLowerCase().includes('.jpeg')){
            myPhotoAlbums[folder].images.push(image)
        }
    })
    myPhotoAlbums[folder].length = readdirSync(folderContents).length
})

//console.log(myPhotoAlbums)

module.exports = router;