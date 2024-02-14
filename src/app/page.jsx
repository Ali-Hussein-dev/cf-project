import styles from "./page.module.css";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Gallary } from "../components/Gallary/Gallary";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Gallary />
      <Footer />
    </main>
  );
}
