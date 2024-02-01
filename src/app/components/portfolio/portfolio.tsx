import React from 'react'
import styles from './portfolio.module.css'
import Link from 'next/link'


const Portfolio = () => {
    return (
        <div>
            <main className='z-50 relative mt-16 bg-background-black'>
                <ul className='w-full'>
                    <li className='mb-16'>
                        <a href="https://parking-reminder-frontend.vercel.app" target= "_blank" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                            <h1 className="text-4xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                Contributions to fullstack parking application
                            </h1>
                            <div className="mt-3 uppercase 2xl:text-lg">Tech stack: Next JS, TS</div>
                        </a>
                    </li>
                       <li className='mb-16'>
                        <div className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                            <h1 className="text-4xl text-gray-400 uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                Fullstack e-commerce store
                            </h1>
                            <div className="mt-3 uppercase 2xl:text-lg">Tech stack: Next JS, TS, DaisyUI, SQL & Auth with supabase </div>
                            <span className="underline text-gray-400">coming soon</span>
                        </div>
                    </li>
                    <li className='mb-16 z-10'>
                        <div className={`block w-full border-t border-t-neutral-700 pt-4 ${styles['portfolio-item']}`} style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s ease-in-out' }}>
                            <h1 className="text-4xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem] text-gray-400">
                                E-CV and Skills
                            </h1>
                            <div className="uppercase 2xl:text-lg">Tech stack: Next JS, TS, TW, CSS animations & Framer motion</div>
                            <span className="underline font-bold text-gray-400">coming soon</span>
                        </div>
                    </li>
                 

                </ul>

            </main>
        </div>
    )
}

export default Portfolio