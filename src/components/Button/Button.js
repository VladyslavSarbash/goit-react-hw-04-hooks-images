import { useState } from 'react';
import PropTypes from 'prop-types';
import LoaderCircle from '../Loader/Loader';
import FetchAPI from '../API/API';

export default function ButtonLoadMore({ searchInput, loadMore }) {
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const loadMoreBtn = () => {
    setLoader(true);

    FetchAPI(searchInput, page + 1)
      .then(data => loadMore(data.hits))
      .then(setPage(page + 1))
      .finally(setLoader(false));
  };

  if (loader) {
    return LoaderCircle();
  }

  if (!loader) {
    return (
      <div className="Btn_load-more">
        <button className="Button" type="button" onClick={loadMoreBtn}>
          Load more
        </button>
      </div>
    );
  }
}

ButtonLoadMore.propTypes = {
  searchInput: PropTypes.string,
  loadMore: PropTypes.func,
};
