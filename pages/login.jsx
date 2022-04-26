// import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/User.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <Layout title="Login | DigitalCur" desc="DigitalCur">
      <div className={styles.containerLogin}>
        <div className={styles.login}>
          <h2>LOGIN</h2>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <div className={styles.info}>
            <Link href="/register">
              <a>CREATE ACCOUNT</a>
            </Link>
            <a href="#">I FORGOT THE PASSWORD</a>
          </div>
          <button onClick={() => router.push("/user")} className={styles.submit} type="submit">
            Log in
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
