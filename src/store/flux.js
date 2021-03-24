const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			first_name: "Start",
			last_name: "Wars",
			//favoritos: ["uno", "dos", "tres"]
			favoritos: [],
			detPeople: [],
			detPlanet: [],
			detVehicle: []
		},
		actions: {
			onClick: () => {
				alert("Bang");
			},
			detallePeople: (id) =>{
					fetch("https://www.swapi.tech/api/people/" + id)
					.then(response => response.json())
 					.then(data => setStore({detPeople:data.results}))
					.catch(error => console.error(error));
			},
			eliminaFav: (indice) => {
				const store = getStore();
				const {favoritos} = store;		
				setStore({favoritos: favoritos.filter((item, index) => 
					{if (index !== indice) 
						return item;}
				)})
			}
		}
	};
};

export default getState;

