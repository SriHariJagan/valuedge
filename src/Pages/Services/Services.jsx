import React from 'react'
import styles from './services.module.css'

import { servicesCardData, serviceWorkData } from '../../constants'

import ServicesCard from '../../Components/ServicesCard/ServicesCard'
import ServicesWorkCard from '../../Components/ServicesWorkCard/ServicesWorkCard'

const Services = () => {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.serviceContainer}>
            {servicesCardData.map((data) => <ServicesCard key={data.id} {...data}/>)}
        </div>

        <div className={styles.aboutWork}>
            <div className={styles.aboutWorkData}>
              {serviceWorkData.map(data => <ServicesWorkCard key={data.id} {...data}/>)}
            </div>
        </div>
    </div>
  )
}

export default Services