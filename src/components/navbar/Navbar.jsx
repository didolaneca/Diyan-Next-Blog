import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="styles.container">
			<div className={styles.social}>
				<Image
					src="/facebook.png"
					alt="facebook icon"
					width={24}
					height={24}
				/>
				<Image
					src="/instagram.png"
					alt="instagram icon"
					width={24}
					height={24}
				/>
				<Image
					src="/tiktok.png"
					alt="tiktok icon"
					width={24}
					height={24}
				/>
				<Image
					src="/youtube.png"
					alt="youtube icon"
					width={24}
					height={24}
				/>
			</div>
			<div className={styles.logo}>Diyan Blog</div>
			<div className={styles.links}>
				<Link href="/" className={styles.link}>
					Homepage
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
