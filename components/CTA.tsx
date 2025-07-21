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
      <img src="/images/cta.svg" alt="Decorative illustration of companions" className='cta-image' />
      <div className='cta-actions'>
        <Link href='/companions/new' className='btn-primary bg-amber-600 flex items-center gap-2'>
          <img src="/icons/plus.svg" alt="plus" width={16} height={16} />
          build a new companion
        </Link>
      </div>
    </section>
  )
}

export default CTA