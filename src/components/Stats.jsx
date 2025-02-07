import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className="flex flex-col items-center">
      {/* Header */}
      <h2 className="w-full text-center text-white text-3xl font-bold mb-8">
        Get up to
      </h2>

      {/* Stats */}
      <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex-1 flex justify-start items-center flex-row gap-2 m-3"
          >
            <h4 className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
              {stat.title}
            </h4>
            <p className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
