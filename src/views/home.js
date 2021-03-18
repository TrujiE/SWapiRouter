import React, { useState, useEffect } from "react";


function Home(){

return (
	<div className="container">	
		<h4 style={{color: "red"}}> Characters </h4>
		<div className="card" style={{width: "18rem"}}>
		  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
		  <div className="card-body">
		    <h5 className="card-title">Card title</h5>
		    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <a href="#" className="btn btn-outline-primary">Learn more!</a>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
		  </div>
		</div>
		<br />
		<h4 style={{color: "red"}}> Planets </h4>
		<div className="card" style={{width: "18rem"}}>
		  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
		  <div className="card-body">
		    <h5 className="card-title">Card title</h5>
		    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <a href="#" className="btn btn-outline-primary">Learn more!</a>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
		  </div>
		</div>
		<br />
		<h4 style={{color: "red"}}> Vehicles </h4>
		<div className="card" style={{width: "18rem"}}>
		  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
		  <div className="card-body">
		    <h5 className="card-title">Card title</h5>
		    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <a href="#" className="btn btn-outline-primary">Learn more!</a>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
		  </div>
		</div>				
	</div>
	);



}

export default Home;