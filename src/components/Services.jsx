import React from 'react'
import { services_list } from '../constants'
import ServiceCard from '../../sub_components/ServiceCard'
const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9 p-4'>
        {services_list.map((service) => (
            <ServiceCard key={service.label} {...service} />
        ))}
   </section>
  )
}

export default Services