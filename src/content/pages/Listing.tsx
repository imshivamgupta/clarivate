import { useEffect, useState } from 'react';
import Button from '../../content/components/Button';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../Context';
import { ListItem } from '../../interfaces';
import Loader from '../../content/components/Loader';

const Listing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    data,
    setData,
    fetchData,
    addToFavorites,
    removeFromFavorites,
    favorites,
  } = useMyContext();
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener
    };
  }, [handleScroll]);

  const loadMoreData = async () => {
    setIsLoading(true);
    const nextPage = page + 1;
    try {
      const newData = await fetchData(nextPage);
      // @ts-ignore
      setData((prevData: ListItem[]) => [...prevData, ...newData]);
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error here if needed
    } finally {
      setIsLoading(false);
    }
  };

  const isFavorite = (id: number) =>
    favorites.some((item: any) => item.id === id);

  useEffect(() => {
    // loadMoreData();
  }, []); // Load data initially

  return (
    <section className="listing">
      <div className="header">
        <Button path="/">← Back</Button>
        <h1>
          Listing<sup>{data.length || 0}</sup>
        </h1>
      </div>
      <main>
        <div className="listed">
          {data.length ? (
            data.map((el: ListItem, index: number) => (
              <div className="list list-item" key={index}>
                <img src={el.thumbnailUrl} alt={el.title} />
                <h3>{el.title}</h3>
                <div className="btn-wrapper">
                  <p>Album ID: {el.albumId}</p>
                  <Link to={el.url}>Visit Site</Link>
                </div>
                {isFavorite(el.id) ? (
                  <button
                    className="remove"
                    onClick={() => removeFromFavorites(el.id)}
                  >
                    Remove from Favorites
                  </button>
                ) : (
                  <button onClick={() => addToFavorites(el)}>
                    Add to Favorites
                  </button>
                )}{' '}
              </div>
            ))
          ) : (
            <Loader />
          )}
          {isLoading && <Loader />}
        </div>
      </main>
    </section>
  );
};

export default Listing;
