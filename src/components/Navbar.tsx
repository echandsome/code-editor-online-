import { IconContext } from 'react-icons';
import { AiFillHeart, AiTwotoneSetting, AiFillLayout } from 'react-icons/ai'
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
    
  return (
    <nav className='w-screen h-16 bg-black flex items-center justify-between px-2 py-2 border-b border-gray-900'>
        <div className='flex gap-1'>
            <img src="/logo.png" width={45} height={45} alt='codepen logo' />
            <div className='flex flex-col'>
                <h3 className='text-xl font-semibold text-white tracking-tighter'>Basic Website Demo</h3>
                <p className='text-[0.85rem] font-medium text-gray-500 leading-tightest'>@qasimparekh<span className='bg-green-500 pt-[-2] text-black px-[0.2rem] font-medium rounded-sm text-[0.65rem] ml-2'>+ Follow</span></p>
            </div>
        </div>

        <div className='hidden md:flex items-center gap-[0.6rem] text-white '>
            <div className='p-4 pr-0'>
            <ModeToggle />
            </div>
            <div className='bg-gray-700 rounded-md px-5 flex items-center justify-center py-[0.87rem]'><IconContext.Provider value={{ className: 'text-white text-lg'}}>
                <AiFillHeart />
            </IconContext.Provider></div>
            <div className='bg-gray-700 rounded-md px-5 flex items-center justify-center py-[0.65rem] gap-1'><IconContext.Provider value={{ className: 'text-white text-lg'}}>
                <AiTwotoneSetting /><span className='font-light'>Settings</span>
            </IconContext.Provider></div>
            <div className='bg-gray-700 rounded-md px-4 flex items-center justify-center py-[0.65rem]'><IconContext.Provider value={{ className: 'text-white text-[1.32rem]'}}>
                <AiFillLayout />
            </IconContext.Provider></div>
            <span className='text-black font-regular bg-green-400 px-5 py-[0.65rem] text-sm rounded-md'>Sign Up</span>
            <span className='text-white font-regular bg-gray-700 px-5 py-[0.65rem] text-sm rounded-md'>Log In</span>
        </div>
    </nav>
  )
}

export default Navbar
