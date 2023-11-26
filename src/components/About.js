import React from "react";

function About() {
  return (
    <div className="about" style={{paddingBottom:"300px"}}>
      <div class="row align-items-center ">
        <div class="App-header">
          <h1>Travel Report</h1>
          <p>Explore insights and statistics about our travel destinations.</p>
        </div>
        <div>
          <h1>Destinations Overview</h1>
          <p>
            Here is a summary of key information about our travel destinations:
          </p>
          <ul>
            <li>Total number of destinations: 4</li>
            <li>Most popular destination: Bali</li>
            <li>Total number of visitors: 100</li>
          </ul>
        </div>
        <div >
          <h1>Customer Feedback</h1>
          <p>
            Read what our customers have to say about their travel experiences:
          </p>
          <textarea
            placeholder="I had an amazing time exploring Rome. The sights were breathtaking, and the people were so welcoming. Definitely a trip to remember!                         
                __John Doe"
            style={{ height: "100px", width: "80%" }}
          ></textarea>
          <textarea
            placeholder="The travel arrangements were seamless, and the recommended activities in Bali were spot on. Thank you for a fantastic experience!
          __Jane Smith"
            style={{ height: "100px", width: "80%" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default About;
