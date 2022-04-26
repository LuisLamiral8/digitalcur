import Layout from "../components/Layout";
import styles from "../styles/index.module.scss";
import Product from "../components/Products";

export default function Home() {
  return (
    <body>
      <Layout title="Home | DigitalCur" desc="DigitalCur">
        <div className={styles.container}>
          <header className={styles.header}>
            <img src="/header.svg" alt="" />
          </header>
          <Product title="All our products" to="/search/Index"/>
          {/* <News /> */}
          <Product title="Physical Games" to="/search/PhysicalGames"/>
          <Product title="Digital Games" to="/search/DigitalGames"/>
          <section className={styles.banner}>
            <img src="/banner.svg" alt="" />
          </section>
          <Product title="All Games" to="/search/Index"/>
          <Product title="Streaming" to="/search/Streaming"/>
        </div>
        {/* <Footer></Footer> */}
      </Layout>
    </body>
  );
}
