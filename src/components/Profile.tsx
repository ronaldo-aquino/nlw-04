import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ronaldo-aquino.png" alt="Ronaldo Aquino" />
      <div>
        <strong>Ronaldo Aquino</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
          </p>
      </div>
    </div>
  );
};

export default Profile;
