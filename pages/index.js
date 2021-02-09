import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        voluptatum, quidem illo obcaecati id aliquid voluptates consequuntur
        odit doloremque dolorum eum explicabo repellendus odio corrupti? Ullam
        officiis ratione ad accusamus.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
