import { AppContext } from "../App";
import { useContext } from "react";

const Context = () => {
	const details = useContext(AppContext);
	return (
		<>
			{details && (
				<div className="container">
					<h2>Via Context</h2>
					<h3>Linguagem: {details.language}</h3>
					<h4>FW: {details.framework}</h4>
					<p>QTD: {details.projects}</p>
				</div>
			)}
		</>
	);
};

export default Context;
