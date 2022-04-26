import Layout from "../components/Layout";
import styles from "../styles/index.module.scss";
import Product from "../components/Products";

export default function home() {
  return (
    <body>
      <Layout title="Home | DigitalCur" desc="DigitalCur">
        <div className={styles.container}>
          <header className={styles.header}>
            <img src="/header.svg" alt="" />
          </header>
          <Product title="All our products" to="/search/"/>
          {/* <News /> */}
          <Product title="Physical Games" to="/search/physicalGames"/>
          <Product title="Digital Games" to="/search/digitalGames"/>
          <section className={styles.banner}>
            <img src="/banner.svg" alt="" />
          </section>
          <Product title="All Games" to="/search/"/>
          <Product title="Streaming" to="/search/streaming"/>
        </div>
        {/* <Footer></Footer> */}
      </Layout>
    </body>
  );
}
