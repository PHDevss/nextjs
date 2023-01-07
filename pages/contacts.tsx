import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Contacts() {
    return (
        <>
            <Head>
                <title>Contatos</title>
                <meta name="keywords" content="Camisas, vestidos e roupas em geral"></meta>
                <meta name="description" content="Encontre a melhor roupa para você"></meta>
            </Head>
            <h1>Página de Contatos</h1>
            <Link href="/">Voltar</Link>
        </>
    )
}