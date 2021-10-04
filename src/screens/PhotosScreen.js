
import { Photos } from '../Components';
import {
  PhotosContainer,
} from "./screens.components";

const PhotosScreen = ({ photos }) => {

  return (
    <PhotosContainer>
      {
        !photos.length && 
        <p>No photos Available</p>
      }
      {photos.map(photo => 
        <Photos key={photo._id} photo={photo}></Photos>
      )}
    </PhotosContainer>
)
}

export default PhotosScreen;