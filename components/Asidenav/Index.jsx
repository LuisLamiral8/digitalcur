
import styles from "./Asidenav.module.scss";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/router";

const Asidenav = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    router.push("/user/login");
  };
  const handleClick3 = (e) => {
    e.preventDefault();
    router.push("/search/");
  };
  const handleClick4 = (e) => {
    e.preventDefault();
    router.push("/cart");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.standardNav}>
        <div className={styles.logo}>
          <Image src="/icons/logo.svg" width={150} height={50} alt=""/>
        </div>
        <div className={styles.catalogBtn}>
          <button type="button" onClick={handleClick}>
            Go to catalog
          </button>
        </div>
        <div className={styles.section1}>
          <div className={styles.item}>
            <Image src="/icons/user.svg" width={25} height={25} alt="" />
            <Link href="/user/login">
              <a>Log-in</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Image src="/icons/search.svg" width={25} height={25} alt="" />
            <Link href="/search/">
              <a>Search</a>
            </Link>
          </div>
        </div>
        <div className={styles.categoryTitle}>
          <h2>CATEGORY</h2>
          <Image src="/icons/uparrow.svg" width={25} height={25} alt="" />
        </div>
        <div className={styles.section2}>
          <div className={styles.item}>
            <Image src="/icons/physicalgames.svg" width={25} height={25} alt="" />
            <Link href="/search/physicalGames">
              <a>Physical Games</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Image src="/icons/digitalgames.svg" width={25} height={25} alt=""/>
            <Link href="/search/digitalGames">
              <a>Digital Games</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Image src="/icons/games.svg" width={25} height={25} alt=""/>
            <Link href="/search/">
              <a>Games</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Image src="/icons/streaming.svg" width={25} height={25} alt=""/>
            <Link href="/search/streaming">
              <a>Streaming</a>
            </Link>
          </div>
        </div>
        <div className={styles.span}>
          <Image src="/icons/span.svg" width={175} height={2} alt=""/>
        </div>
        <div className={styles.section3}>
          <div className={styles.item}>
            <Image src="/icons/help.svg" width={25} height={25} alt=""/>
            <a>Help</a>
          </div>
          <div className={styles.item}>
            <Image src="/icons/info.svg" width={25} height={25} alt=""/>
            <a>Conditions</a>
          </div>
          <div className={styles.item}>
            <Image src="/icons/contract.svg" width={25} height={25}alt="" />
            <a>Confidentiality</a>
          </div>
        </div>
      </div>
      <div className={styles.responsiveNav}>
        <button type="button" onClick={handleClick}><img src="/icons/home.svg" alt="" /></button>
        <button type="button" onClick={handleClick2}><img  src="/icons/user.svg" alt="" /></button>
        <img className={styles.responsiveAvatar} src="/smallhelena.svg" alt="" />
        <button type="button" onClick={handleClick3}><img src="/icons/games.svg" alt="" /></button>
        <button type="button" onClick={handleClick4}><img src="/icons/bag.svg" alt="" /></button>
      </div>
    </nav>
  );
};

export default Asidenav;
