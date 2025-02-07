import React from 'react'

const Button = ({ styles }) => {
  return (
    <a
      href="mailto:joel_designfactory@hotmail.com"  // Replace with your desired email address
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Contact Us
    </a>
  )
}

export default Button
