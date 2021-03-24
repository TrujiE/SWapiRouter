const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			first_name: "Start",
			last_name: "Wars",
			//favoritos: ["uno", "dos", "tres"]
			favoritos: [],
			detalle: {}
		},
		actions: {
			onClick: () => {
				alert("Bang");
			},
			detalle: (id) =>{
					fetch("https://www.swapi.tech/api" + id)
					.then(response => response.json())
 					.then(data => setStore({detalle:data.result.properties}))
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

