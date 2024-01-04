
import Link from 'next/link'

export default async function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-3xl'>Olá</h1>
      <p>Para acessar a pagina dashboard</p>

      <Link href='/dashboard'>
        Dashboard
      </Link>

      {JSON.stringify(user, null, 2)}
    </main>
  )
}
