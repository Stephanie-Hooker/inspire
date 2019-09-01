import ImageService from "../services/image-service.js";

const _imageService = new ImageService()

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)

function _drawImage() {
  document.body.style.backgroundImage = `url('${_imageService.Image.large_url}')`;
}

export default class ImageController {
  constructor() {
    _imageService.addSubscriber('image', _drawImage)
    _imageService.getImage()
  }


}

