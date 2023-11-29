import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
	// temporary implementation
	const status = "not authenticated";
	return (
		<>
			{status === "not authenticated" ? (
				<Link href="/login">Login</Link>
			) : (
				<>
					<Link href="/write">Write</Link>
					<span className={styles.link}>Log Out</span>
				</>
			)}
		</>
	);
};

export default AuthLinks;
