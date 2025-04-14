import {HERO_CONTENT} from '../constants';
import profilepic from '../assets/WA.png';
import {motion} from 'framer-motion';


const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-6">
            <motion.h1 
            initial={{x: -100, opacity: 0}} 
            animate={{x: 0, opacity: 1}} 
            transition={{duration:0.5 , delay: 1}}
            className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Walid Belegchour
            </motion.h1>
            <motion.span 
            initial={{x: -100, opacity: 0}} 
            animate={{x: 0, opacity: 1}} 
            transition={{duration:0.5 , delay: 1}}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer | AI Enthusiast
            </motion.span>
            <motion.p 
            initial={{x: -100, opacity: 0}} 
            animate={{x: 0, opacity: 1}} 
            transition={{duration:0.5, delay: 1}}
            className="my-2 max-w-xl text-justify py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center '>
                <motion.img 
                    initial={{x: 100, opacity: 0}} 
                    animate={{x: 0, opacity: 1}} 
                    transition={{duration:1 , delay: 1.2}}
                    src={profilepic}
                    alt='Walid Belegchour'
                    className=' shadow-2xl rounded-full bg-slate-500  border-4 border-purple-500'
                    style={{width: '250px'}}
                />
            </div>
            </div>
      </div>
    </section>
  );
};

export default Hero