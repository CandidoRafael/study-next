import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <p className='bg-slate-700 font-bold text-blue-400'>Olá</p>
        
        <Link href='/'>
          Voltar para home
        </Link>
    </div>
  )
}

export default Dashboard