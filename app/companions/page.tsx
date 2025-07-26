import CompanionCard from '@/components/CompanionCard';
import { getAllCompanions } from '@/lib/actions/companions.actions';
import { subjectsColors } from '@/constants/index';
import React from 'react'
import SearchInput from '@/components/searchInput';
import SubjectFilter from '@/components/subjectFilter';


const companionsLibrary = async({searchParams}: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";
  const companions = await getAllCompanions({subject, topic});

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>
        <div className='flex gap-4'>
          <SearchInput/>
          <SubjectFilter/>
        </div>
      </section>
      <section className='companions-grid'>
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={subjectsColors[companion.subject.toLowerCase() as keyof typeof subjectsColors] || '#FFFFFF'} // Default to white if no match
          />
        ))}
      </section>
    </main>
  )
}

export default companionsLibrary