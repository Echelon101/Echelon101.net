import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";

import * as styles from "./index.module.scss";
import Layout from "../layouts/DefaultLayout";
import { StaticImage } from "gatsby-plugin-image";
import {Steam, Twitch, Twitter, Youtube} from "@icons-pack/react-simple-icons";
import {Axe, Gamepad2} from "lucide-react";

const IndexPage = ({ data }) => <Layout topBarHome={true}>
    <SEO description="Echelon101 - Gamer, Coder, IT system administrator - Learn more about me here!" title="Echelon101" />
        <div className={styles.hero}>
            {/*<div className={styles.heroHalo}></div>
            <div className={styles.heroImage}>
                <StaticImage
                    src="../assets/timo.jpg"
                    placeholder="tracedSVG"
                    quality="100"
                    alt="Chibi drawing of Unkn0wnCat created by @Pericote9"
                    fit="contain"
                    layout="constrained"
                />
            </div>*/}
            <div className={styles.heroBoxBg}></div>
            <div className={styles.heroBox}>
                <div>
                    <span className={styles.name}>Echelon101</span>
                    <span className={styles.description}>Gamer, IT system administrator, Coder</span>
                    
                    <a href="https://www.twitch.tv/sorcererofroarhaven" target="_blank" rel="noreferrer"><Twitch/> SorcererOfRoarhaven</a>
                    <a href="https://twitter.com/timomrx" target="_blank" rel="noreferrer"><Twitter/> @Timomrx</a>
                    <a href="https://steamcommunity.com/id/Echelon101" target="_blank" rel="noreferrer"><Steam/> OmenDarkly</a>
                    <a href="https://kreig.de/de/members/d7d0aaa7-fda9-57ad-924c-2ebe5d64e15e" target="_blank" rel="noreferrer"><Gamepad2/> My Clan (KREIG)</a>
                </div>
            </div>

            {/*<a className={styles.artCredit} href="https://twitter.com/Pericote9" target="_blank" rel="noopener">Chibi drawn by @Pericote9</a>*/}
        </div>
</Layout>;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/home_about.md$/" } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;

export default IndexPage;
