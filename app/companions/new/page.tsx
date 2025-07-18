import CompanionForm from "@/components/companionForm"

function New() {

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