import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/admin.module.scss";
const index = () => {
  return (
    <Layout
      title="Admin | DigitalCur"
      desc="DigitalCur"
      icon1="/icons/gamesphysical.svg"
      icon2="/icons/gamesdigital.svg"
      icon3="/icons/games.svg"
      icon4="/icons/gamesstreaming.svg"
      class1="item"
      class2="item"
      class3="item"
      class4="item"
    >
      <div className={styles.container}>
        <form className={styles.form} action="">
          <div className={styles.title}>
            <h2>UPLOAD A GAME</h2>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>
              <p>Title:</p>
              <input type="text" placeholder="-" />
            </div>
            <div className={styles.inputDesc}>
              <p>Description:</p>
              <textarea placeholder="-" name="" id="" cols="50" rows="5"></textarea>
            </div>
            <div className={styles.inputImages}>
              <p>Images:</p>
              <div className={styles.fileSelect}>
                <input type="file" id="src-file1" aria-label="Image" multiple />
              </div>
            </div>
            <div className={styles.inputCategory}>
              <p>Category</p>
              <select name="Category">
                <option value="-" selected>
                  -
                </option>
                <option value="value1">Physical Game</option>
                <option value="value2">Digital Game</option>
                <option value="value3">Streaming</option>
              </select>
            </div>
            <div className={styles.inputTag}>
              <p>Tags</p>
              <select name="Category">
                <option value="-" selected>
                  -
                </option>
                <option value="value1">Action</option>
                <option value="value2">Metroidvania</option>
                <option value="value3">Shooter</option>
                <option value="value4">Survival</option>
                <option value="value5">Indie</option>
                <option value="value6">Long story</option>
                <option value="value7">MMORPG</option>
                <option value="value8">RPG</option>
                <option value="value9">Multiplayer</option>
                <option value="value10">Multiplayer COOP</option>
                <option value="value11">Online</option>
              </select>
            </div>
            <div className={styles.inputPrice}>
              <p>Price:</p>
              <input type="text" placeholder="-" />
            </div>
          </div>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default index;
