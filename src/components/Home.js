import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function Home() {
  return (
    <div className="App">
      <div class="home">
      <header className="App-header">
        <h1>Welcome to The TravelBae</h1>
        <p>Explore exciting destinations with us!</p>
      </header>
      </div>
      <div class="container">
      <div class="row my-5">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Italy" class="card-img-top" alt="Italy"/>
          <div class="card-body">
            <h5 class="card-title">Italy</h5>
            <p class="card-text">Discover the beauty of Italy.</p>
            <a href="Italy.html" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Tokyo" class="card-img-top" alt="Italy"/>
          <div class="card-body">
            <h5 class="card-title">Tokyo</h5>
            <p class="card-text">Discover the beauty of Tokyo.</p>
            <a href="Tokyo.html" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Bali" class="card-img-top" alt="Italy"/>
          <div class="card-body">
            <h5 class="card-title">Destination1</h5>
            <p class="card-text">Discover the beauty of Bali.</p>
            <a href="Bali.html" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
      </div>
      <div class="down"style={{textAlign:"center",paddingBottom:"200px"}}>
       <h2 >Discover More</h2>
        <p>Explore our handpicked destinations and create memories that last a lifetime.</p>
        <a href="blog" class="btn btn-primary">
            View All Directions
          </a>
      </div>
    </div>
    </div>
  );
}

export default Home;
