import CompanionForm from "@/components/companionForm"
import { newCompanionPermissions } from "@/lib/actions/companions.actions";
import { auth } from "@clerk/nextjs/server"
import Link from "next/link";
import { redirect } from "next/navigation";

async function New() {
  const{userId} = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const canCreateCompanion = newCompanionPermissions();

  return (
    <main className='min-lg:w-1/3 min-md:2/3 min-sm:w-full justify-center flex flex-col'>
     { await canCreateCompanion ? (
        <article className='w-full flex flex-col gap-2'>
          <h1 className='text-3xl font-bold'>Create a New Companion</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <img src="/images/limit.svg" alt="companion limit" height={360} width={360}/>
          <div className="cta-badge">
            upgrade your plan
          </div>
          <h2 className="text-xl font-bold">
            You have reached the maximum number of companions for your current plan.
          </h2>
          <p className="text-sm">
            You can upgrade your plan to create more companions.
          </p>
          <Link href="/subscription" className="btn-primary justify-center w-full">
            Upgrade Plan
          </Link>
        </article>
      )}
    </main>
  )
}

export default New