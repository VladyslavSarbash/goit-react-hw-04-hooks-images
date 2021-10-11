import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoaderCircle from '../Loader/Loader';
import FetchAPI from '../API/API';

export default function ButtonLoadMore({ searchInput, loadMore }) {
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    setLoader(true);

    FetchAPI(searchInput, page)
      .then(data => loadMore(data.hits))
      .finally(setLoader(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loader) {
    return LoaderCircle();
  }

  if (!loader) {
    return (
      <div className="Btn_load-more">
        <button
          className="Button"
          type="button"
          onClick={() => setPage(page + 1)}
        >
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
