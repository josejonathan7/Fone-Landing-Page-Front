import React from "react";
import style from "./style.module.scss";
import { Footer, Menu, ProductInformation } from "../../components";
import Fone from "../../../assets/fone.png";

export default function Home () {


	return (
		<div className={style.container}>
			<Menu />

			<main className={style.mainContainer}>

				<div className={style.imageContainer}>
					<img src={Fone}  />
				</div>

				<ProductInformation />

			</main>

			<Footer />

		</div>
	);
}
