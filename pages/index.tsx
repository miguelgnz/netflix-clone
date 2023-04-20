import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'

import useCurrentUser from '@/hooks/useCurrentUser'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default function Home() {
  const { user, isLoading, error } = useCurrentUser()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error: {error.message}</p>
  }

  return (
    <>
      <h1 className="text-2xl text-green-500 ">NETFLIX CLONE</h1>
      <h1 className="text-2xl text-green-500 ">Welcome {user?.email}</h1>
      <button className='h-1- w-full bg-white' onClick={() => signOut()}>
        Logout
      </button>
    </>
  )
}
