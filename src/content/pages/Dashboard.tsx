import React from 'react';
import Button from '@/content/components/Button';
import { useMyContext } from '@/Context';
import { Link } from 'react-router-dom';
import { ListItem } from '@/interfaces';

const Dashboard = () => {
  const { favorites } = useMyContext();
  return (
    <section className="dashboard ">
      <h1>
        Dashboard<sup>{favorites.length || 0}</sup>
      </h1>
      <main>
        <div className="header">
          <div className="nav">Favourite Items</div>
          <Button path="/list">Goto Listing →</Button>
        </div>

        <div className="favorites-list listed">
          {favorites.length ? (
            favorites.map((item: ListItem, index: number) => (
              <div className="favorite-item list list-item" key={index}>
                <img src={item.thumbnailUrl} alt={item.title} />
                <h3>{item.title}</h3>
                <div className="btn-wrapper">
                  <p>Album ID: {item.albumId}</p>
                  <Link to={item.url}>Visit Site</Link>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%' }}>
              Sorry, You don't have any item.
            </p>
          )}
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
