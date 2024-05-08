import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt='Me Sitting with Laptop' className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor Icon' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>As a front-end developer, I'm developing and refining my knowledge and skills to work on websites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt='Server Icon' />
                        <div className={styles.aboutItmeText}>
                            <h3>Backend Developer</h3>
                            <p>Along with working with backend developers, I have expanded my knowledge and skill set in system architecture and API creation.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt='UI Icon' />
                        <div className={styles.aboutItmeText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
