import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hii, I'm Ayushi Hothi</h1>
                <p className={styles.description}>I was born and raised in Surat, and in 2024 I graduated with a Bachelor of Computer Application (BCA) from Veer Narmad South Gujarat University. During my time in college, I solidified my understanding of front-end development, backend development and web design principles. I always try to learn something new and stay current with advancements in business and technology.</p>
                <a href="mailto: ayushihothi@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt='Hero Image of Me' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
