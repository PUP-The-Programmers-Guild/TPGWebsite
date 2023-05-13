import styles from "../../styles/base/roundbutton.module.css";

export default function RoundButton(props: { url: string; text: string }) {
  return (
    <a href={props.url} className={styles.roundButton}>
      {props.text}
    </a>
  );
}
