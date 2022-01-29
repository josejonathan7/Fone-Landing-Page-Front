import React from "react";
import style from "./style.module.scss";
import Logo from "../../../assets/logo.svg";
import { AiOutlineSearch, BsCart2, AiOutlineMenu } from "react-icons/all";

export function Menu () {

	return (
		<header className={style.container}>

			<div className={style.imageContainer}>
				<img src={Logo} />
			</div>

			<div className={style.buttonContainer}>
				<button>Home</button>

				<button>About</button>

				<button>Products</button>

				<button>Support</button>
			</div>

			<div className={style.iconsContainer}>
				<AiOutlineSearch size={25} />

				<BsCart2 size={25} />

				<AiOutlineMenu size={25} />

			</div>

		</header>
	);
}
