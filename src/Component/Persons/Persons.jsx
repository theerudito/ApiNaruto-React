import { useEffect, useState } from "react";
import { GetNaruto } from "../../Helpers/GetApi";
import { CardApp } from "./Card";

const inicialState = [
	{
		id: Date.now(),
		name: "Naruto",
		info: { Clã: "" },
		images: [
			"https://i.pinimg.com/236x/33/ae/6d/33ae6d8cf36e1c309394638bf08d7fe3.jpg",
			"https://i.pinimg.com/236x/0a/66/6c/0a666cb60952d415c16e247c96291789.jpg",
			"https://www.hoyfortnite.com/images/skins/Naruto%20Uzumaki_1.png"
		]
	},
	{
		id: Date.now(),
		name: "Sasuke",
		info: { Clã: "" },
		images: [
			"https://i.pinimg.com/564x/72/f2/3f/72f23f72bdb02f7aa37d9906b34fdf66.jpg",
			"https://cdn.pixabay.com/photo/2020/11/14/19/52/sasuke-5743769_1280.png",
			"https://i.pinimg.com/564x/da/4b/0f/da4b0f17e44653962f925668cde7b472.jpg"
		]
	},
	{
		id: Date.now(),
		name: "Sakura",
		info: { Clã: "" },
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWbOLG-D3OOKSYKFZHtfqVfEwh1uLNR2W2xqnSezV88trxFTS_dx6XJ3mLbMF8mz8RKM&usqp=CAU",
			"https://i.pinimg.com/236x/ab/02/2f/ab022fd08749053801fd51ad89746281.jpg",
			"https://i.pinimg.com/236x/8b/68/e0/8b68e09029c1c5a97dadf9ad8f637f34.jpg"
		]
	}
];

export const Person = () => {
	const [avatar, setAvatar] = useState(inicialState);
	//console.log(avatar);

	const GetShinobis = async () => {
		const updatesShinobis = await GetNaruto();
		//console.log(updatesShinobis);
		setAvatar(updatesShinobis);
	};

	useEffect(() => {
		GetShinobis();
	}, []);

	return (
		<>
			<div id="body">
				{avatar.map((item, key) => (
					//console.log(item)
					<CardApp item={item} key={key} />
				))}
			</div>
		</>
	);
};
