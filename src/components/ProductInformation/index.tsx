import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import style from "./style.module.scss";

export function ProductInformation () {


	return (

		<section className={style.container}>
			<h1>HYPER X ON-EAR</h1>

			<div className={style.textGroupContainer}>
				<h4>Wireless over-ear headphones</h4>
				<div className={style.starContainer}>
					<AiFillStar size={20} color="#DC143C" />
					<AiFillStar size={20} color="#DC143C" />
					<AiFillStar size={20} color="#DC143C" />
					<AiOutlineStar size={20} color="#DC143C" />

					<p>4.2 (335)</p>
				</div>

			</div>

			<div className={style.textGroupContainer}>
				<h4>Driver unit</h4>
				<p>70 mm, dome type (CCAW Voice Col)</p>
			</div>

			<div className={style.textGroupContainer}>
				<h4>Frequency Response</h4>
				<p>4 Hz + 100.000 Hz</p>
			</div>

			<div className={style.priceContainer}>
				<h1>$89.99</h1>
				<button>ADD TO CART</button>
			</div>


		</section>
	);
}
