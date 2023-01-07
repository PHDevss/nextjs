import Link from "next/link";

import { useRouter } from "next/router";

export async function getStaticProps(context: any){
    const { params } = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)

    const todo = await data.json()

    return {
        props: { todo }
    }
}

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    
    const data = await response.json()

    const paths = data.map((todo: { id: number; }) => {
        return {
            params: {
                todoId: `${todo.id}`,
            }
        }
    })

    return { paths, fallback: false}
}

export default function Todo({todo}: any) {

    const router = useRouter()

    const todoId = router.query.todoId

    return (
        <>
            <h1>Exibindo o TodoId: {todoId} = via objeto: {todo.id}</h1>
            <h3>Texto: {todo.title}</h3>
            <p>Comentário: la la la 1 <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: la la la 2 <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link></p>
            <p>Comentário: la la la 3 <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link></p>
            <br />
            <Link href="/todos">Voltar</Link>
        </>
    )
}