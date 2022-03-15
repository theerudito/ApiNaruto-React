export const CardApp = ({ item }) => {
	//console.log(item)
	return (
		<div id="container">
			<img src={item.images[0]} alt="logo" id="avatar" />
			<h6 key={item.id} id="id">
				N°: {item.id}
			</h6>
			<hr />
			<div id="info">
				<h4 id="name">Name: {item.name}</h4>
				<h4 id="clan">Clan: {item.info.Clã}</h4>
			</div>
		</div>
	);
};
