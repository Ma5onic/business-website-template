import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section
      id="CTA"  // <-- Added id attribute to target from navbar
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Transform Your Windows Today!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elevate your space with innovative window privacy solutions from Mark Designs.
          Our advanced films reduce heat, block harmful UV rays, and ensure complete privacy
          while enhancing your home or business’s aesthetic appeal.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
