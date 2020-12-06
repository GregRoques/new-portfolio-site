// const express = require("express");
// const router = express.Router();
// const { readdirSync, statSync } = require("fs-extra");
// const { join } = require("path");

// const source = "../../photography";

// const dirs = (p) =>
//   readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

// const photoFolders = dirs(source);

// let myPhotoAlbums = {};
// photoFolders.map((folder, folderIndex) => {
//   const folderContents = readdirSync(`${source}/${folder}`);
//   const folderTitle = folder.replace("./", "").split("/")[0];
//   myPhotoAlbums[folder] = {
//     title: folderTitle,
//     reference: folder,
//     images: [],
//     albumLength: folderContents.length
//   };
//   folderContents.map((image) => {
//     if (
//       (image.toLocaleLowerCase().includes(".png") ||
//         image.toLocaleLowerCase().includes(".jpg") ||
//         image.toLocaleLowerCase().includes(".jpeg")) &&
//       image.slice(0, 2) !== "._"
//     ) {
//       myPhotoAlbums[folderTitle].images.push(image);
//     }
//   });
// });

// const photoHome = {
//   albums: Object.values(myPhotoAlbums).map((album) => {
//     return {
//       title: album.title,
//       images: album.images.slice(0, 5),
//       reference: album.reference
//     };
//   }),
//   albumsLength: myPhotoAlbums.length
// } 

// router.post("/", isAuthenticated, (req, res, next) => {
//   const { album } = req.body;
//   if (album === "ALL") {
//     if (photoHome.albumsLength > 0) {
//       const { lengthStart } = req.body;
//       let currResponseHome = {
//         albums: photoHome.albums.slice(lengthStart, lengthStart + 25),
//       };
//       if (lengthStart === 0) {
//         currResponseHome.albumLength = photoHome.albumsLength;
//       }
//       res.json(currResponseHome);
//     }
//   } else {
//     if (myPhotoAlbums[album] > 0) {
//       const { lengthStart } = req.body;
//       let currResponseAlbum = {
//         images: myPhotoAlbums[album].images.slice(lengthStart, lengthStart + 25),
//       };
//       if (lengthStart === 0) {
//         currResponseAlbum.albumLength = myPhotoAlbums[album].albumLength;
//         currResponseAlbum.title = myPhotoAlbums[album].title;
//         currResponseAlbum.reference = myPhotoAlbums[album].reference;
//       }
//       res.json(currResponseAlbum);
//     }
//   }
// });

// module.exports = router;
