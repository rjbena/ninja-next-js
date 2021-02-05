import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        voluptatum, quidem illo obcaecati id aliquid voluptates consequuntur
        odit doloremque dolorum eum explicabo repellendus odio corrupti? Ullam
        officiis ratione ad accusamus.
      </p>
      <Footer />
    </div>
  );
}
