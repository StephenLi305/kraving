import React from 'react';
import { connect } from 'react-redux';
import './index.css'
const mapStateToProps = state => {
  // city: return name of city we're looking for
  //businesses: return an array we will map over of ALL businesses in our database
  return({
    // city: this.state.city,
    // businesses: this.state.businesses
  })
}



class IndexPage extends React.Component {


  searchBar(){
      //search bar will go here
    return(
      <div className="search-container">

      </div>
    )
  }




  businessGrid(){

    const seedData = [
    {
      id: 1,
      image: "https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg",
      name: "McDonald's",
      price: "$",
      cuisines: "American",
      rating: 4.4
    },
    {
      id: 2,
      image: "https://duyt4h9nfnj50.cloudfront.net/resized/2926d161670705623b4940e66693904b-w640-b3.jpg",
      name: "The Posh Bagel",
      price: "$",
      cuisines: "Breakfast and Brunch",
      rating: 4.7
    },
    {
      id: 3,
      image: "https://duyt4h9nfnj50.cloudfront.net/resized/70f60c3fc92c8b234d34eb9ad12c6a80-w2880-49.jpg",
      name: "The Halal Guys",
      price: "$$",
      cuisines: "Halal",
      rating: 4.6
    }
  ];

    // map over each business
    const mapBusinesses =
      seedData.map( business => {
          //map over each cuisine since businesses can have multiple
          // const cuisines = business.cuisines.map( cuisine => {
          //   return(
          //     <li>{cuisine}</li>
          //   )
          // })
            return(
              <div className="business-card-container" key={business.id}>
                <div className="business-card-image"><img src={business.image}/></div>
                <div className="business-card-name">{business.name}</div>
                <div className="business-card-price">{business.price}</div>
                <div className="business-card-cuisine">
                {business.cuisines}
                </div>
                <div className="business-card-rating">{business.rating}</div>
              </div>
        )
      })

    return(
      <div className="business-list-container">
        {mapBusinesses}
      </div>
    )
  }


  render(){
    const seedCity = "San Francisco"
    return(
      <div className="index-page-container">
        {this.searchBar()}
        <h1 className="index-title">Food Delivery in {seedCity}</h1>
        {this.businessGrid()}
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(IndexPage);
