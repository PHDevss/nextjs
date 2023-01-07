import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Camisas, vestidos e roupas em geral"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>
      <main>  
        <h1 className={styles.title}>Seja bem vindo!</h1>
        <Image src="/images/city.jpg" width={400} height={500} alt="cidade a noite"/>
      </main>
    </>
  )
}
