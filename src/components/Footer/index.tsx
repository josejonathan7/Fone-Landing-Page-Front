import React from "react";
import { BiStats, FaBluetoothB, AiOutlineVideoCamera } from "react-icons/all";
import style from "./style.module.scss";

export function Footer () {


	return (
		<footer className={style.container}>

			<div className={style.descriptionContainer}>
				<BiStats size={25} />
				<p>
					High-Resolution Audio compatible
				</p>
			</div>

			<div className={style.descriptionContainer}>
				<FaBluetoothB size={25} />
				<p>
					Wireless connectivity using bluetooth
				</p>
			</div>

			<div className={style.descriptionContainer}>
				<AiOutlineVideoCamera size={35} />
				<p>
					A powerful battery that lasts up to 4 hours of use
				</p>
			</div>


		</footer>
	);
}



