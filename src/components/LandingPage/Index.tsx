import React from "react";
import { Typography } from "@mui/material";
import type { GetStaticProps } from "next";
import Head from "next/head";
import useStyles from "./styles";
import SearchField from "../SearchField";

const LandingPage: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <section style={{}}>
      <div>
        <Head>
          <title>Rumir Store</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={classes.main}>
          <div className={classes.titleWrapper}>
            <div className={classes.titleContainer}>
              <span className={classes.title}>What book is on your mind</span>
              <SearchField fullWidth />
            </div>
          </div>
        </main>

        {/* <footer className={styles.footer}></footer> */}
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      mainPage: true,
    },
  };
};

export default LandingPage;
