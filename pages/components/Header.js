import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "../../images/watermark.png";

function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello, <span>User</span>
					</h2>
					<p>6 more days to complete trial.</p>
				</div>
				<div className={styles.profile}>
					<img src={Image} alt="profile" className={styles.image} />
				</div>
			</div>
		</div>
	);
}

export default Header;
