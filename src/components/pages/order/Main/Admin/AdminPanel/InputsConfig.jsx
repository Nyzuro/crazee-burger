import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const getInputsConfig = (newProduct) => [
	{
		id: 1,
		type: "text",
		name: "title",
		value: newProduct.title,
		Icon: <FaHamburger />,
		className: "add-product-input",
		placeholder: "Nom du produit (ex: Super Burger)",
	},

	{
		id: 2,
		type: "url",
		name: "imageSource",
		value: newProduct.imageSource,
		Icon: <BsFillCameraFill />,
		className: "add-product-input",
		placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
	},

	{
		id: 3,
		type: "text",
		name: "price",
		value: newProduct.price ? newProduct.price : "",
		Icon: <MdOutlineEuro />,
		className: "add-product-input",
		placeholder: "Prix",
	},
];
