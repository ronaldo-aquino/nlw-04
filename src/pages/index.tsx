import styles from "../styles/pages/Home.module.css";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
