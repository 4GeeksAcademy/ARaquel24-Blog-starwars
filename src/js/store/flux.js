const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "1",
					initial: "white"
				}
			],
			character: [
				{
					name: "FIRST",
					uid: "2",
					initial: "white"
				},
				{
					name: "SECOND",
					uid : "white",
					initial: "white"
				}
			],
			planet: [
				{
					name: "FIRST",
					uid: "2",
					initial: "white"
				},
				{
					name: "SECOND",
					uid : "white",
					initial: "white"
				}
			],
			favoritePersonaje: [''],
			favoritePlaneta: [''],
			

			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			agregarFavorito: (namePersonaje) => {
				const store = getStore();
				if (store.favoritePersonaje.includes(namePersonaje)) {
					setStore({favoritePersonaje: store.favoritePersonaje.filter((personaje)=> personaje != namePersonaje)});
				} else {
					setStore({ favoritePersonaje:[...store.favoritePersonaje, namePersonaje ]});

				}
			},
			agregarFavoritoPlaneta: (namePlaneta) => {
				const store = getStore();
				if (store.favoritePlaneta.includes(namePlaneta)) {
					setStore({favoritePlaneta: store.favoritePlaneta.filter((planeta)=> planeta != namePlaneta)});
				} else {
					setStore({ favoritePlaneta:[...store.favoritePlaneta, namePlaneta ]});

				}
			},

			loadSomeData: () => {
				console.log("se cargo la pagina desde flux")
				fetch('https://swapi.dev/api/people')
				.then((response) => response.json())
				.then((data) => setStore({character: data.results}))
			
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadSomeDataPlanet: () => {

				console.log("se cargo la pagina desde flux")
				fetch('https://swapi.dev/api/planets')
				.then((response) => response.json())
				.then((data) => setStore({planet: data.results}))
			
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
