import React, { useState, useEffect } from "react";
import { Image, Card } from "react-bootstrap";

const Home = () => {	
	const [data, setImgData] = useState([]);
	
	useEffect(() => {loadData();}, []);
	
	const loadData = async () => {
		const response = await fetch("https://raw.githubusercontent.com/Pokosenko-Igor/Fake_Api/main/db.json"),
		responseJson = await response.json();
		setImgData(responseJson.images);
	}
	
	return (
		<div className="mt-5">
			<Card>
				{
					data.map((data, index) => {
						return (
							<div className="m-2 mt-4">
								<Card.Link href={data.url}>
									<Card.Img src={data.src} />
								</Card.Link>
							</div>
						)
					})
				}
			</Card>
		</div>
	)

}

export default Home;
