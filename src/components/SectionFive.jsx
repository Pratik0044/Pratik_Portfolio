import React from 'react'
import Button from './Button'
import WorkCard from './WorkCard'
import work1Img from '../assets/workImg/Home Image.jpg'

function SectionFive() {
    return (
        <div id='work' className='bg-black flex justify-center items-center mx-auto p-10 pt-0 font-serif'>
            <div className=' flex flex-col justify-center items-center  '>
                <div>
                    <Button text={"Work"} />
                </div>
                <p className='text-xl mt-8'>Some of the noteworthy Project I have built:</p>


                <WorkCard
                    image={work1Img}
                    title={"Ed-Tech (E-learing) "}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas nec uma ac tellus volutpat viverra. Vestibulum ante ipsum primis 
                                in faucibus orci luctus et ultrices posuere cubilia curae.`}
                    techStack={["HMTL","Css"]}
                    link={""}
                />
                <WorkCard
                position={"lg:flex-row-reverse"}
                    image={work1Img}
                    title={"Ed-Tech (E-learing) "}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas nec uma ac tellus volutpat viverra. Vestibulum ante ipsum primis 
                                in faucibus orci luctus et ultrices posuere cubilia curae.`}
                    techStack={["HMTL","Css"]}
                    link={""}
                />

            </div>
        </div>
    )
}

export default SectionFive