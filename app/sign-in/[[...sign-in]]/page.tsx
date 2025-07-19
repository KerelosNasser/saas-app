import { SignIn } from '@clerk/nextjs'

function signIn() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <SignIn />
    </main>
  )
}

export default signIn