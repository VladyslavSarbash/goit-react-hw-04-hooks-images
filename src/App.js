import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ButtonLoadMore from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [arrayImg, setArrayImg] = useState([]);
  const [modalImg, setModalImg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [arrayImg]);

  const onSubmit = ({ arrayImg, searchInput }) => {
    setArrayImg(arrayImg);
    setSearchInput(searchInput);
  };

  const loadMore = moreImg => {
    setArrayImg([...arrayImg, ...moreImg]);
  };

  const toggleModal = closeModalEsc => {
    setShowModal(!showModal);
    window.removeEventListener('keydown', closeModalEsc);
  };

  const openModal = e => {
    const { dataset, nodeName } = e.target;

    if (nodeName === 'IMG') {
      setModalImg(dataset.large);
      setShowModal(!showModal);
    }
  };

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalImg} alt="" />
        </Modal>
      )}
      <SearchBar onSubmit={onSubmit} setPage={setPage} />
      <ImageGallery arrayImg={arrayImg} openModal={openModal} />
      {arrayImg.length !== 0 && (
        <ButtonLoadMore
          searchInput={searchInput}
          loadMore={loadMore}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
}

export default App;
