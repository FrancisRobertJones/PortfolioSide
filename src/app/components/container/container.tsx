import React from 'react'
import classNames from 'classnames'

const Container = ( {children, className}: {children:React.ReactNode, className?: string }) => {
  return (
        <div className={classNames("max-w-[160rem] mx-auto pt-[1rem] min-h-screen font-trap tracking-wide text-white bg-custom px-6", className)}>{children}</div>
  ) 
}

export default Container