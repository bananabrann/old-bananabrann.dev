import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import MarinesJpg from "../../res/jpg/me-training-exercise.jpg";
import AvenchesJpg from "../../res/jpg/avenches-austrians.jpg";
import GaBuildingJpg from "../../res/jpg/ga.jpg";
import DebbieJpg from "../../res/jpg/debbie.jpg";
import BananamanMarine from "../../components/BananamanMarine/BananamanMarine";
import BananamanArtist from "../../components/BananamanArtist/BananamanArtist";

import styles from "./about.module.scss";

export default function About() {
  return (
    <Layout title="bananabrann - about me">
      <div className={styles.container}>
        <h1>{`Before code, a little about me`}</h1>
        <p>
          &emsp;
          {`Born and raised outside Abilene, Texas, my career began when I enlisted into the United States Marine Corps after high school. After training in California, I had one of the coolest jobs in the Marines: performing music for foreign dignitaries and presidential audiences at home and abroad.`}
        </p>
        <div className={styles.images}>
          <Image
            src={MarinesJpg}
            quality={75}
            layout={"responsive"}
            alt={`Me, center, during a combat manuever exercise at training in Camp Pendleton, California.`}
          />
          <small>{`Me, center, during a combat manuever exercise at training in Camp Pendleton, California.`}</small>
        </div>

        <div className={styles.images}>
          <Image
            src={AvenchesJpg}
            quality={75}
            layout="responsive"
            alt={`Me, center, posing with representatives from Austria before an international joint military music performance near Geneva, Switzerland.`}
          />
          <small>{`Me, center, posing with representatives from Austria before an international joint military music performance near Geneva, Switzerland.`}</small>
        </div>

        <p>
          &emsp;
          {`I am very thankful for the opportunities the Marines gave me --I would have never been where I am today without the lessons and experiences the Marines gave me. However, staying for life wasn't for me. I decided to leave the Marines and make a career change. Having enjoyed teaching myself HTML in the later-half of my enlistment, I decided to take the leap into full-time software development and attended a full-time design and coding bootcamp in Washington, D.C. I graduated General Assembly's Web Development immersive course, now called "Software Engineering immersive."`}
        </p>

        <div className="flex gap-4 items-end flex-1">
          <div className={styles.images}>
            <Image
              src={GaBuildingJpg}
              quality={75}
              layout={"responsive"}
              alt={`Outside the building of General Assembly in downtown Washington, D.C.`}
            />
            <small>{`Outside the building of General Assembly in downtown Washington, D.C.`}</small>
          </div>

          <div className={styles.images}>
            <Image
              src={DebbieJpg}
              quality={75}
              layout={"responsive"}
              alt={`My last project at General Assembly. "Decibel Debbie" measures, calculates, and displays sounds around it.`}
            />
            <small>{`My last project at General Assembly. "Decibel Debbie" measures, calculates, and displays sounds around it.`}</small>
          </div>
        </div>

        <p>
          &emsp;
          {`During the last two weeks of General Assembly, I got a job offer and begun my career as a software engineer. Ever since then, it's been been full throttle ahead! I've mostly been employed in the U.S. public sector, building and maintaining websites and systems that help American citizens around the world get things done.`}
        </p>

        <div className="flex">
          <BananamanMarine />
          <BananamanArtist />
        </div>
      </div>
    </Layout>
  );
}
