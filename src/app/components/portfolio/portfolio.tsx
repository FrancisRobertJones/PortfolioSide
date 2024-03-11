import React from 'react'
import styles from './portfolio.module.css'
import Link from 'next/link'


const Portfolio = () => {
    return (
        <div>
            <main className='z-50 relative mt-16 bg-background-black'>
                <ul className='w-full'>
                    <li className='mb-16'>
                        <a href="https://parking-reminder-frontend.vercel.app" target="_blank" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                            <h1 className="text-4xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                Contributions to fullstack parking application
                            </h1>
                            <div className="mt-3 uppercase 2xl:text-lg">Tech stack: Next JS, TS. Currently working on notification system in Node & Google task que.</div>
                        </a>
                    </li>
                    <li className='mb-16 z-10'>
                        <a href="https://github.com/Medieinstitutet/the-restaurant-teamworldwide" target="_blank" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                            <h1 className="text-4xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                Restaurant front-end group project
                            </h1>
                            <div className="uppercase 2xl:text-lg">Front-end project with booking functionality. Tech stack: React, TS, TW. Link to github repo.</div>
                        </a>
                    </li>
                    <li className='mb-16'>
                        <a href="https://github.com/frankosgit/greenhorizons" target="_blank" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                                <h1 className="text-4xl text-gray-400 uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                    Fullstack e-commerce store
                                </h1>
                                <div className="mt-3 uppercase 2xl:text-lg">Tech stack: Next JS, TS, Node, MongoDB. Work in progress, link to github repo.</div>
                                <span className="underline text-gray-400">coming soon</span>
                        </a>
                    </li>



                </ul>

            </main>
        </div>
    )
}

export default Portfolio