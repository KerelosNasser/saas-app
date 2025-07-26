import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { getUserCompanions, getUserSessions } from '@/lib/actions/companions.actions';
import CompanionsList from '@/components/CompanionsList';

// Add this line to force dynamic rendering
export const dynamic = 'force-dynamic';

async function Profile() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }
  const companions = await getUserCompanions(user.id);
  
  const sessions = await getUserSessions(user.id);


  return (
    <main className='min-lg:w-3/4'>
      <section className='flex justify-between gap-4 max-sm:flex-col items-center'>
        <div className='flex gap-4 items-center'>
        <img src={user.imageUrl} alt={user.firstName} height={110} width={110} className="rounded-full" />
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold'>{user.firstName} {user.lastName}</h1>
          <p className='text-lg'>{user.emailAddresses[0].emailAddress}</p>
        </div>
        </div>
        <div className='flex gap-4'>
          <div className='border border-black-lg p-3 gap-2 flex flex-col h-fit'>
            <div className='flex gap-2 items-center'>
              <img src="/icons/check.svg" alt="check" width={22} height={22} />
              <p className='font-bold text-2xl'>{sessions.length}</p>
            </div>
            <div>Lessons Completed</div>
          </div>
                    <div className='border border-black-lg p-3 gap-2 flex flex-col h-fit'>
            <div className='flex gap-2 items-center'>
              <img src="/icons/cap.svg" alt="check" width={22} height={22} />
              <p className='font-bold text-2xl'>{companions.length}</p>
            </div>
            <div>Lessons Completed</div>
          </div>
        </div>
      </section>
      <Accordion type="multiple" >
              <AccordionItem value="companions">
          <AccordionTrigger className='text-2xl font-bold'> my Companions({companions.length})</AccordionTrigger>
          <AccordionContent>
            <CompanionsList companions={companions} title="my Companions" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="recent">
          <AccordionTrigger className='text-2xl font-bold'>Recent Lessons</AccordionTrigger>
          <AccordionContent>
            <CompanionsList companions={companions} title="Recent Lessons" />
          </AccordionContent>
        </AccordionItem>
                <AccordionItem value="completed">
          <AccordionTrigger className='text-2xl font-bold'>Completed Lessons</AccordionTrigger>
          <AccordionContent>
            <CompanionsList companions={sessions} title="Completed Lessons" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

export default Profile
