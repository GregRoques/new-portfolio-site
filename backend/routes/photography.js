const express = require("express");
const router = express.Router();
const path = require("path");
const { readdirSync, statSync } = require("fs-extra");
const fs = require('fs')
const { join } = require("path");

const source = path.join(__dirname, "../../frontend/public/images/photography");

const dirs = (p) =>
  readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

const photoFolders = dirs(source)

let myPhotoAlbums = {};
let photoHome ={}

function createAlbums(){
  photoFolders.map((folder, folderIndex) => {
    const folderContents = readdirSync(`${source}/${folder}`);
    const objectTitle = folder.toLowerCase();
    myPhotoAlbums[objectTitle] = {
      title: folder,
      images: [],
      albumLength: 0
    };
    folderContents.map((image) => {
      if (
        (image.toLocaleLowerCase().includes(".png") ||
          image.toLocaleLowerCase().includes(".jpg") ||
          image.toLocaleLowerCase().includes(".jpeg")) &&
        image.slice(0, 2) !== "._"
      ) {
        myPhotoAlbums[objectTitle].images.push(image);
        myPhotoAlbums[objectTitle].albumLength++
      }
    });
  });
  photoHome = {
    albums: Object.values(myPhotoAlbums).map((album) => {
      return {
        title: album.title,
        images: album.images.slice(0, 5),
      };
    }),
    albumsLength: photoFolders.length
  } 
}

createAlbums()


setInterval(()=>{
  createAlbums()
}, 604800000)

router.post("/", (req, res, next) => {
  const { album, lengthStart } = req.body;
  console.log(album)
  if (album === "ALL") {
    if (photoHome.albumsLength > 0) {
      let currResponseHome = {
        albums: photoHome.albums.slice(lengthStart, lengthStart + 25),
      };
      if (lengthStart === 0) {
        currResponseHome.albumLength = photoHome.albumsLength;
      }
    //   console.log(currResponseHome)
      res.json(currResponseHome);
    }
  } else {
      if (myPhotoAlbums[album]) {
        let currResponseAlbum = {
          images: myPhotoAlbums[album].images.slice(lengthStart, lengthStart + 25),
        };
        if (lengthStart === 0) {
          currResponseAlbum.albumLength = myPhotoAlbums[album].albumLength;
          currResponseAlbum.title = myPhotoAlbums[album].title;
        }
        console.log(currResponseAlbum)
        return res.json(currResponseAlbum);
      } else{
        res.json(error=true)
      }
  } 
});

module.exports = router;
