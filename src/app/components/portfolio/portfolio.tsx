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
                            <h1 className="text-3xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                Boendeparkering i Bergshamra
                            </h1>
                        </a>
                        <div className="join join-vertical w-full mt-6">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    Features & Tech Stack:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li className='uppercase'>Features</li>
                                        <li> Real-time parking and cleaning schedule data.</li>
                                        <li>Interactive Google Maps for spot selection.</li>
                                        <li>Countdown to next street cleaning.</li>
                                        <li>Upcoming: Email and SMS reminders.</li>
                                    </ul>
                                    <ul>
                                        <li className='uppercase  mt-12'>Tech stack</li>
                                        <li>Next.js, Typescript</li>
                                        <li>Node.js, Google Maps, Jest</li>
                                        <li>Under development: Email & SMS Notifications using Google Cloud Tasks</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Challenges, Reflections & Learning:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li className='uppercase'>Reflections</li>
                                        <li>A challenging and rewarding project working alongside an experienced developer</li>
                                        <li className='uppercase mt-12'>Challenges & Learning</li>
                                        <li>Merging civic data with Google Maps.</li>
                                        <li>Calculating cleaning times, cleaning breaks and edge cases.</li>
                                        <li>Building a scalable notification system with Node.js and Google Cloud Tasks. (in progress)</li>
                                        <li>Testing with Jest Testing Library.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Future Plans:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li>
                                            Enable then enhance notification system.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Live site & github:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li>
                                            <a href='https://parking-reminder-frontend.vercel.app' target="_blank">https://parking-reminder-frontend.vercel.app</a>
                                        </li>
                                        <li>
                                            <a href='https://github.com/johanehr/parking-reminder-frontend' target="_blank">https://github.com/johanehr/parking-reminder-frontend</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='mb-16'>
                        <a href="https://github.com/frankosgit/GoogleImageSearchAndSave" target="_blank" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                            <h1 className="text-3xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                Photo Hive
                            </h1>
                        </a>
                        <div className="join join-vertical w-full mt-6">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    Features & Tech Stack:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li className='uppercase'>Features</li>
                                        <li>Search for images using Google Custom Search.</li>
                                        <li>Favorite and save images to your profile.</li>
                                        <li>Responsive design for optimal mobile experience.</li>
                                        <li>Upcoming: Save images in categories and folders.</li>
                                    </ul>
                                    <ul>
                                        <li className='uppercase  mt-12'>Tech stack</li>
                                        <li>React, Google Custom Search API</li>
                                        <li>Node, Express, MongoDB, Joi, Auth0</li>
                                    </ul>

                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Challenges, Reflections & Learning:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li className='uppercase'>Reflections</li>
                                        <li>A rewarding project tying together back and frontend technologies and expertise.</li>
                                        <li className='uppercase mt-12'>Challenges & Learning</li>
                                        <li>Implementing efficient image search and 'like' feature.</li>
                                        <li>Ensuring secure user authentication with Auth0.</li>
                                        <li>Developing a user-friendly mobile responsive layout.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Future Plans:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li>
                                            Implement image categorisation and folder system.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Live site & github:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li>
                                            <p>LIVE SITE COMING SOON</p>
                                        </li>
                                        <li>
                                            <a href='https://github.com/frankosgit/GoogleImageSearchAndSave' target="_blank">https://github.com/frankosgit/GoogleImageSearchAndSave</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='mb-16'>
                        <a href="https://github.com/Medieinstitutet/the-restaurant-teamworldwide" target="_blank" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                            <h1 className="text-3xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                Restaurant Booking Applicaton
                            </h1>
                        </a>
                        <div className="join join-vertical w-full mt-6">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    Features & Tech Stack:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li className='uppercase'>Project overview:</li>
                                        <li>Developed in collaboration with two classmates, this front-end web application serves as a digital interface for a fictional restaurant.</li>
                                    </ul>
                                    <ul>
                                        <li className='uppercase mt-12'>Features</li>
                                        <li>Interactive calendar and time slot selection for checking table availability.</li>
                                        <li>Booking functionality.</li>
                                        <li>Admin dashboard to edit and remove bookings.</li>
                                        <li>Appealing frontend design.</li>
                                    </ul>
                                    <ul>
                                        <li className='uppercase  mt-12'>Tech stack</li>
                                        <li>React, Typescript</li>
                                        <li>Tailwind, Framer motion</li>
                                        <li>RESTful API integration for bookings and availability checks.</li>
                                    </ul>

                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Teamwork and collaboration:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li>
                                            Working as part of a team, we leveraged our diverse strengths to tackle various aspects of the project. Through effective communication and mutual support, we overcame obstacles and learned from each other, leading to a successful and rewarding project outcome.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Live site & github:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li>
                                            <p>LIVE SITE COMING SOON</p>
                                        </li>
                                        <li>
                                            <a href='https://github.com/Medieinstitutet/the-restaurant-teamworldwide' target="_blank">https://github.com/Medieinstitutet/the-restaurant-teamworldwide</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className='mb-16'>
                        <a href="https://github.com/frankosgit/greenhorizons" target="_blank" className='block w-full border-t border-t-neutral-700 pt-4 z-10'>
                            <h1 className="text-3xl uppercase tracking-wide lg:text-portfolio 2xl:text-[7.5rem]">
                                Green Horizons
                            </h1>
                        </a>
                        <div className="join join-vertical w-full mt-6">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    Features & Tech Stack:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li className='uppercase'>Project overview:</li>
                                        <li>Green Horizons is an in-progress B2B e-commerce platform designed for the solar panel industry, facilitating the sourcing of hardware between businesses. Initially built with serverless functions and Supabase, the project is undergoing a transition to a backend using MongoDB and Node.js.</li>
                                    </ul>
                                    <ul>
                                        <li className='uppercase'>Features:</li>
                                        <li>Product listings with cards containing detailed descriptions, specifications, and images.</li>
                                        <li>Interactive shopping cart context for quote generation.</li>
                                        <li>Responsive design to ensure accessibility across various devices.</li>
                                        <li>In progress: Search and filter capabilities to quickly find specific solar panel hardware.</li>
                                    </ul>
                                    <ul>
                                        <li className='uppercase mt-12'>Tech stack:</li>
                                        <li>Next.js.</li>
                                        <li>MongoDB.</li>
                                        <li>Node.js</li>
                                    </ul>

                                </div>
                            </div>


                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Live site & github:
                                </div>
                                <div className="collapse-content">
                                    <ul>
                                        <li>
                                            <p>LIVE SITE COMING SOON</p>
                                        </li>
                                        <li>
                                            <a href='https://github.com/frankosgit/greenhorizons' target="_blank" >https://github.com/frankosgit/greenhorizons</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    


                </ul>

            </main>
        </div>
    )
}

export default Portfolio