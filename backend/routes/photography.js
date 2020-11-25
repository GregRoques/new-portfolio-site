const express = require("express");
const router = express.Router();
const { readdirSync, statSync } = require("fs-extra");
const { join } = require("path");

const source = "../../photography";

const dirs = (p) =>
  readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

const photoFolders = dirs(source);

let myPhotoAlbums = {};
photoFolders.map((folder, folderIndex) => {
  const folderContents = `${source}/${folder}`;
  const folderTitle = folder.replace("./", "").split("/")[0];
  myPhotoAlbums[folderTitle] = {
    title: folderTitle,
    images: [],
  };
  readdirSync(folderContents).map((image) => {
    if (
      (image.toLocaleLowerCase().includes(".png") ||
        image.toLocaleLowerCase().includes(".jpg") ||
        image.toLocaleLowerCase().includes(".jpeg")) &&
      image.slice(0, 2) !== "._"
    ) {
      myPhotoAlbums[folderTitle].images.push(image);
    }
  });
});

const photoHome = Object.values(myPhotoAlbums).map((album) => {
  return {
    title: album.title,
    images: album.images.slice(0, 5),
  };
});

router.post("/", isAuthenticated, (req, res, next) => {
  const { album } = req.body;
  if (album === "ALL") {
    return res.json(photoHome);
  } else {
    return res.json(myPhotoAlbums[album]);
  }
});

module.exports = router;
