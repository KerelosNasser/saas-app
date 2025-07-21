import CompanionForm from "@/components/companionForm"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

async function New() {
  const{userId} = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className='min-lg:w-1/3 min-md:2/3 min-sm:w-full justify-center flex flex-col'>
      <article className='w-full flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>Create a New Companion</h1>
        <CompanionForm />
      </article>
    </main>
  )
}

export default New