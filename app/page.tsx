import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <>
    <main>
      <h1 >Popular companions</h1>
    <section className='home-section'>
      <CompanionCard
        ID='123'
        name='neura the brainy explorer'
        topic='neural network of the brain'
        subject='science'
        duration= {45}
        color= '#FFD6DB'
      />
      <CompanionCard
        ID='456'
        name='countasy the number wizard'
        topic='derivatives & integrals'
        subject='math'
        duration= {30}
        color= '#FFD6DB'
      />
      <CompanionCard
        ID='789'
        name='verba the vocabulary builder'
        topic='language'
        subject='english'
        duration= {45}
        color= '#FFD6DB'
      />
    </section>
    <section className='home-section'>
      <CompanionsList
      title="Recent completed sessions"
      companions={recentSessions}
      className="w-2/3 max-lg:w-full"
      />
      <CTA />
    </section>
    </main>
    </>
  )
}

export default Page