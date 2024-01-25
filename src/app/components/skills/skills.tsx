import React from 'react'
import { Backend_skill, Frontend_skill, Full_stack, HTMLCSSJS } from '@/data/data'
import SkillDataProvider from '../skilldataprovider/skilldataprovider'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const skills = ({className}: {className?: string }) => {
  return (
    
    <section
    id='skills'
    className='flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-12 mt-20'
    style={{transform: "scale(0.9"}}
    >
             <div className='flex flex-row justify around flex-wrap mt-4 gap-7 items-center'>
            {HTMLCSSJS.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                /> 
            
            )) }
        </div> 

        <div className='flex flex-row justify around flex-wrap mt-4 gap-7 items-center'>
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                /> 
            
            )) }
        </div> 
                <div className='flex flex-row justify around flex-wrap mt-4 gap-7 items-center'>

            {Backend_skill.map((image, index) => (
                            <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                            /> 
                
                        )) }
            </div>
            
<div className='flex flex-row justify around flex-wrap mt-4 gap-7 items-center'>

            {Full_stack.map((image, index) => (
                            <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                            /> 
                        
                        )) }


            </div>
            <div>
                <h1 className=" w-full font-TrapMedium text-white/30 text-2xl  lg:text-3xl pt-6 z-0">
                <Link href="https://github.com/frankosgit" className="text-white underline cursor-pointer font-TrapMedium">GITHUB</Link> <FontAwesomeIcon icon={faGithub} />
            </h1>
          </div>
    </section>
  )
}

export default skills