import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-center font-mono text-lg lg:flex">
      <img className='h-24' src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" alt="alternative-text"/>        
        <div className="flex w-full justify-center items-center">
          <p> 
        &lt;Hello World/&gt;
        EagleBear PowerCore
        </p>
        </div>
        <img className='h-24' src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" alt="alternative-text"/>        
      </div>
      <div className="z-10 w-full items-center justify-center font-mono text-lg lg:flex">

      <div className="flex justify-center items-center">
        <p>
        My Name is Omar Carvajal
        </p>
        </div>
        </div>
        <div className="z-10 w-full items-center justify-center font-mono text-lg lg:flex">

      <div className="flex justify-center items-center ">
        <p>
        I will be sharing with you all my portfolio really soon
        </p>
        </div>
        </div>

    </main>
  )
}
