import React from 'react'
import Button from './Button'
import ExperienceCard from './ExperienceCard'
import octanetImg from '../assets/Logo/CampanyLogo/octanet.png'
import samsungImg from '../assets/Logo/CampanyLogo/icons8-samsung-480.png'

function SectionFour() {
  return (
    <div id='experience' className='bg-gray-900 flex justify-center text-gray-400 font-serif pb-10  '>
        <div className='w-11/12 items-center flex flex-col justify-center '>

            <div className='flex mx-auto'>
                <Button text={"Experiences"}/>
            </div>
            <p className='text-xl mt-8'>Here is a quick summary of most recent Experiences: </p>

            <ExperienceCard 
                 logo={octanetImg} 
                 company={"Google"} 
                 title={"Software Engineer"} 
                 date={"Nov-2021 to Nov-24"} 
                 points={["one","two"]}
            />
            <ExperienceCard 
                 logo={samsungImg} 
                 company={"Google"} 
                 title={"Software Engineer"} 
                 date={"Nov-2021 to Nov-24"} 
                 points={["one","two"]}
            />

        </div>
    </div>
  )
}

export default SectionFour