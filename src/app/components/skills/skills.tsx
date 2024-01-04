import React from 'react'
import { Backend_skill, Frontend_skill, Full_stack } from '@/data/data'
import SkillDataProvider from '../skilldataprovider/skilldataprovider'



const skills = ({className}: {className?: string }) => {
  return (
    
    <section
    id='skills'
    className='flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-12 mt-20'
    style={{transform: "scale(0.9"}}
    >

        <div className='flex flex row justify around flex wrap mt-4 gap-7 items-center'>
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
                <div className='flex flex row justify around flex wrap mt-4 gap-7 items-center'>

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
            
<div className='flex flex row justify around flex wrap mt-4 gap-7 items-center'>

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
            <div className='max-w-xl leading-8 space-y-2 tracking-wider font-mono md:flex-col md:text-left mt-12'>
                    I am constantly looking to learn new technologies and frameworks, with focus currently on backend and serverside development in Node and PHP. <br/> 
                    Something which i'm particularly interested in diving into is the about implementation of LLMs within web apps for improving UX and the exciting possibilities they will bring. 
            </div>


    </section>
  )
}

export default skills