import Link from 'next/link'
import React from 'react'

function CTA() {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>start learning your way</div>
      <div>
        <h2 className='text-4xl font-bold '>Build and Personalize your own companion</h2>
        <p className='text-lg'>Get access to a community of like-minded learners and start your journey to a better life.</p>
      </div>
      <img src="/images/cta.svg" alt="" className='cta-image' />
      <div className='cta-actions'>
        <button className='btn-primary bg-amber-600'>
          <img src="/icons/plus.svg" alt="plus" width={16} height={16} />
          <Link href='/companions/new'>build a new companion</Link>
        </button>
      </div>
    </section>
  )
}

export default CTA