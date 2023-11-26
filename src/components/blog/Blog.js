import React from "react";
import { Outlet, useState } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";

function Blog() {
  return (
    <div className="App">
        <header class="App-header">
        <h1>Explore Our Destinations</h1>
      </header>
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
            <h5 class="card-title">Bali</h5>
            <p class="card-text">Discover the beauty of Bali.</p>
            <a href="Bali.html" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4" style={{paddingBottom:"300px"}}>
        <div class="card">
          <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Rome" class="card-img-top" alt="Italy"/>
          <div class="card-body">
            <h5 class="card-title">Rome</h5>
            <p class="card-text">Discover the beauty of Rome.</p>
            <a href="Rome.html" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>


        </div>
      </div>
      
    </div>
    
  );
}

export default Blog;
