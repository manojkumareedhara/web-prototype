import React from 'react'
import { motion } from "framer-motion"

const Experiance = () => {
  return (
      <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container m-6 mb-20 mt-20'>
          <div className='delay-[300ms] duration-[600ms] taos:translate-y-[-200px] taos:opacity-0" data-taos-offset="500"'>
              <motion.img whileInView={{opacity:1,x:0}} initial={{x:100,opacity:0}} animate={{ x: -100,opacity:1 }} transition={{duration:0.5}} src='public/Fresh idea.png' width={400} height={450}/>
          </div>
          <div className='flex flex-col justify-end p-6'>
              <h2 className='font-montserrat font-bold text-4xl p-5'>10 years of service</h2>
              <p className='font-palanquin font-normal leading-normal '>Over 10 years of service in the information technology field and our experienced counselors are ready to help you!</p>
          </div>
          
     </section>
  )
}

export default Experiance