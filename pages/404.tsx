import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Página não encontrada =/</h1>
            <br />
            <h3>Erro 404</h3>
            <br />
            <Link href="/">Voltar para home</Link>
        </>
    )
}