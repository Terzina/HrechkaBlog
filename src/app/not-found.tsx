import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold mb-4'>404 – Page Not Found</h1>
      <p className='mb-6'>Sorry, the page you are looking for does not exist.</p>
      <Link href='/' className='text-blue-600 underline'>
        Go back home
      </Link>
    </main>
  )
}

export default NotFound
