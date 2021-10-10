import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ arrayImg, openModal }) {
  return (
    <ul className="ImageGallery" onClick={openModal}>
      <ImageGalleryItem arrayImg={arrayImg} />
    </ul>
  );
}

ImageGallery.propTypes = {
  arrayImg: PropTypes.array,
  openModal: PropTypes.func,
};
