
import ArrowIcon from '@/assets/arrow-right.svg'
import Image from 'next/image';
import cogImage from '@/assets/cog.png'
export const Hero = () => {
  return (

    <section className='pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]'>
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
          <h1 className="text-5xl  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-transparent bg-clip-text mt-6">Pathway to productivity</h1>
          <p className="text-xl text-[#010D3E] mt-6">Celeprate the joey of accomplisment with an app designed to</p>
        </div>
        <div className="flex gap-1 items-center mt-[30px]">
          <button className='btn btn-primary'>Get for free</button>
          <button className="btn btn-text gap-2">
            <span>Learn more</span>
            <ArrowIcon className = 'h-4 w-4'/>
          </button>
        </div>
        <div className='mt-20'>
          <Image src={cogImage} alt='CogImage' />
        </div>
      </div>
    </section>
  )
};
