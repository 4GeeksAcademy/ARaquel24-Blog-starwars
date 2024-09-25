import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = (props) => {
	const { store, actions } = useContext(Context);
	const urlString = props.url;
	let lastPart = "";
    try {
        const url = new URL(urlString); 
        lastPart = url.pathname.split("/").filter(Boolean).pop();
    } catch (error) {
        console.error("Invalid URL:", urlString);
    }
	return (
		<>
			
			<div className="overflow-x-hidden">
				<div className="card m-3" style={{width: "18rem"}}>
					<img src={rigoImage} />
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">Population: {props.population}</p>
						<p className="card-title">Terrain: {props.terrain }</p>
						<Link to={"/planet/"+ lastPart } className="btn btn-primary">Learn More!</Link>
						<button onClick={()=> actions.agregarFavoritoPlaneta(props.name)}>Favorite</button>
					</div>
				</div>
				
			</div>
		</>
	);
};