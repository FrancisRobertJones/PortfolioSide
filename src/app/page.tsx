export default function Home() {
  return (
    <>
      <main className="min-h-screen font-trap tracking-wide bg-custom text-white">
        <h1 className="mb-1 w-full text-left font-mono text-white/30 lg:text-right 2xl:text-lg pt-6">PRESENTED BY <span className="text-white underline">FRANCIS JONES</span></h1>
        <div className='flex justify-between'>
        <h1 className='text-10xl ml-2 pt-0 mt-0'>FULLSTACK</h1>
        </div>
        
        <div className="mt-14 flex">
          <div className="ml-6 flex flex-col lg:justify-between">
            <div className="font-mono">CONTACT</div>
            <div className="font-mono text-white/30">CV</div>
            <div className="font-mono text-white/30">PORTFOLIO</div>
          </div>
          <div className="max-w-xl leading-8 space-y-2 tracking-wider ml-auto font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tenetur ipsa, reiciendis aperiam non labore esse a consequatur vitae architecto placeat rerum nesciunt deleniti ratione unde illum libero, fuga suscipit? </div>
          </div>
      </main>

    </>
  );
}
