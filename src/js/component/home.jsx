import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState()
	const [toDos, setToDos] = useState([])
	return (
		<div className="container mt-4">
			<h1 className="text-center">My Todo List  </h1>
			<ul>
				<li>
					<input 
					type="text"
					
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							setToDos(toDos.concat([inputValue]));
							setInputValue("");
						}

					}}
					
					
					placeholder="What do you need to do"></input> 
				</li>
				{toDos.map((t) => (
					<li>
						{t}
					</li>

				))}

					
					

			</ul>
		</div>
	);
};

export default Home;
