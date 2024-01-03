import React from 'react'


const Container = ( {children}: {children:React.ReactNode}) => {
  return (
        <div className="max-w-[160rem] mx-auto pt-[1rem] min-h-screen font-trap tracking-wide text-white bg-custom px-6">{children}</div>
  ) 
}

export default Container