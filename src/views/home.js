import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home(){
	
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [resultado, setResultado] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(response => response.json())
			.then(data => setTareas(data))
			.catch(error => console.error(error));
	},[]);

	const listaPeople = () => {

		let nombre = 
		<div>
			{tareas.results
				? tareas.results.map((elemento, indice) => { 
				return (<div id={indice} key={indice}>{elemento.uid} &nbsp; {elemento.name}&nbsp;{elemento.url}</div>);
//				for(i=0; i>{indice}; i=i+1;){
					
//				}
				
			})
			: "loading..."}
			</div>;

		return(
			nombre
		);
	}



return (
	<div className="container">	
		<h4 style={{color: "red"}}> Characters </h4>
		<div className="card" style={{width: "18rem"}}>
		  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
		  <div className="card-body">
		    <h5 className="card-title">{listaPeople()}</h5>
		    <p className="card-text">Gender: </p>
		    <p className="card-text">Hair Color: </p>
		    <p className="card-text">Eye-Color: </p>
		    <Link to="/people" className="btn btn-outline-primary">Learn more!</Link>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
		  </div>
		</div>
		<br />

		<h4 style={{color: "red"}}> Planets </h4>
		<div className="card" style={{width: "18rem"}}>
		  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
		  <div className="card-body">
		    <h5 className="card-title">Card title</h5>
		    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <Link to="/planets" className="btn btn-outline-primary">Learn more!</Link>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
		  </div>
		</div>
		
		<br />
		
		<h4 style={{color: "red"}}> Vehicles </h4>
		<div className="card" style={{width: "18rem"}}>
		  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
		  <div className="card-body">
		    <h5 className="card-title">Card title</h5>
		    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <Link to="/vehicles" className="btn btn-outline-primary">Learn more!</Link>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
		  </div>
		</div>				
	</div>
	);



}

export default Home;