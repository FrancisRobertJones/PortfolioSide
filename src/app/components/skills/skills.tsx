import React from 'react'
import { Backend_skill, Frontend_skill, Full_stack, HTMLCSSJS } from '@/data/data'
import SkillDataProvider from '../skilldataprovider/skilldataprovider'



const skills = ({className}: {className?: string }) => {
  return (
    
    <section
    id='skills'
    className='flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-12 mt-20'
    style={{transform: "scale(0.9"}}
    >
             <div className='flex flex row justify around flex wrap mt-4 gap-7 items-center'>
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



    </section>
  )
}

export default skills