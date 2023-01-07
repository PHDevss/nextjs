import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from '../styles/MainContainer.module.css'

interface Props {
    children?: ReactNode
}

export default function MainContainer({children}: Props) {
    return (
        <>
            <Navbar />
                <div className={styles.container}>{children}</div>
            <Footer />
        </>
    )
}