import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useActionData } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacters = (props) => {
	const urlString = props.url;
	let lastPart = "";
	const { store, actions } = useContext(Context);
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
						<p className="card-text">Gender: {props.gender}</p>
						<p className="card-title">Hair Color: {props.hair_color}</p>
						<p className="card-title">Eye Color: {props.eye_color}</p>
						<Link to={"/character/"+ lastPart } className="btn btn-primary">Learn More!</Link>
						<button onClick={()=> actions.agregarFavorito(props.name)}>Favorite</button>
					</div>
				</div>
				
			</div>
		</>
	);
};