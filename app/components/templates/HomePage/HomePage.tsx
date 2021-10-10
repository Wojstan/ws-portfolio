import Separator from "@element/Separator";
import Navbar from "@module/Navbar/Navbar";
import styles from "./HomePage.module.css";

const HomePage = () => (
  <>
    <header className={styles.about}>
      <Navbar />
      <img src={"/img/about/avatar.png"} alt="" />
      <article>
        <h1>Hi, I'm Wojtek</h1>
        <h3>
          {"<"}FRONT-END DEVELOPER {"/>"}
        </h3>
        <Separator width="300px" />
        <p>
          I am constantly developing in the latest frontend technologies. In the
          future I would like to work as frontend developer and specialize in
          React.js. I am passionate about creating and implementing web
          projects, I work well in a group and really want to get some
          professional experience. Besides, I love Premier League games, good
          music and Tarrantino movies.
        </p>
        <p></p>
      </article>
    </header>
    <main></main>
  </>
);

export default HomePage;
