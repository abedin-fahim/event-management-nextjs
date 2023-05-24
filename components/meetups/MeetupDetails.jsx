import styles from './MeetupDetails.module.css';

const MeetupDetails = ({ image, title, address, description }) => {
  return (
    <section className={styles.details}>
      <img
        src={image}
        alt={title}
      />
      <h4>{title}</h4>
      <p>{address}</p>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetails;
