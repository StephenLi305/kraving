import React from 'react';
import './searchbar_item.css'
import { Link } from 'react-router-dom'

class SearchBarItem extends React.Component {

  render() {

    const { bus, formType, loc, handleClick, show } = this.props;
    if (formType === 'yelp' && show) {
      return (
        <Link to={`/${bus.id}`}>
        <div className="search-dropdown-item" onClick={() => handleClick('food')}>
          <div>
            <img className="search-dropdown-image" src={bus.image_url} alt={bus.image_url}/>
          </div>
          <div className="search-dropdown-text">
            <li className="search-dropdown-title">{bus.name}</li>
            <div className="search-dropdown-stars">
              <img className="search-stars" src={`/images/stars/${bus.rating}.png`} alt="star"></img>
              <li className="search-review-count">({bus.review_count})</li>
            </div>
          </div>
        </div>
        </Link>
      )
    } else if (formType === 'google' && show) {
      return (
        <div className="search-dropdown-item" onClick={() => handleClick('location', loc.description)}>
          <div className="search-dropdown-text">
            <li className="search-dropdown-title">{loc.description}</li>
          </div>
        </div>
      )
    } else {
      return null
    }

  }
}

export default SearchBarItem
