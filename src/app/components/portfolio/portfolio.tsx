import React from 'react'
import styles from './portfolio.module.css'


const Portfolio = () => {
  return (
    <div>
    <main className='z-50 relative mt-16 bg-background-black'>
        <ul className='w-full'>
            <li className='mb-16 z-10'>
            <a href="" className={`block w-full border-t border-t-neutral-700 pt-4 ${styles['portfolio-item']}`} style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s ease-in-out' }}>
                    <h1 className="text-4xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                     E-CV and Skills
                    </h1>
                    <div className="font-mono uppercase 2xl:text-lg">Tech stack: Next JS, TS, TW, CSS animations & Framer motion</div>
                    <span className="text-blue">coming soon</span>
                </a>
            </li>
            <li className='mb-16'>
                <a href="" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                <h1 className="text-4xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                    Fullstack e-commerce store
                    </h1>
                    <div className="mt-3 font-mono uppercase 2xl:text-lg">Tech stack: Next JS, TS, DaisyUI, SQL & Auth with supabase </div>
                    <span className="text-blue">coming soon</span>
                </a>
            </li>
            <li className='mb-16'>
                <a href="" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                <h1 className="text-4xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                        Contributions to fullstack parking application
                    </h1>
                    <div className="mt-3 font-mono uppercase 2xl:text-lg">Tech stack: Next JS, TS, MongoDB</div>
                    <span className="text-blue">coming soon</span>
                </a>
            </li>

        </ul>
    
    </main>
    </div>
  )
}

export default Portfolio