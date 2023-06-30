import { Link } from "react-router-dom";
import Desktop from '../assets/calcalories-desktop.png'
import AddMeal from '../assets/calcalories-add-function.png'
import CalcalorieMongo from '../assets/calcalories-mongo-view.png'

const Projects = () => {
    return (
        <div className='max-w-[1240px] text-left p-10 mx-auto'>
            <div className="p-10">
                <h1 className='text-[#817F75] font-bold text-3xl md:text-5xl py-3'>PROJECTS</h1>
                <div className="text-[#817F75] border-t border-[#B3B5BB] py-3">
                    <div>
                        <h1 className="font-bold text-xl py-5 hover:underline hover:translate-x-5 transition-all duration-300"><Link to='/'>↗ Portfolio</Link></h1>
                        <Link to='https://github.com/Choowah/portfolio-website' target="_blank" className="underline">Source Code</Link>
                        <h3 className="font-bold">Technologies Used</h3>
                        <ul className="flex flex-wrap md:grid grid-cols-4 pb-8">
                            <li className="w-full">React</li>
                            <li className="w-full">React Router</li>
                            <li className="w-full">TailwindCSS</li>
                            <li className="w-full">JSX</li>
                        </ul>
                    </div>
                    <div className='border-t border-[#B3B5BB]'>
                        <h1 className="font-bold text-xl py-5">Calcalories</h1>
                        <Link to='https://github.com/Choowah/calcalories/' target="_blank" className="underline">Source Code</Link>
                        <h3 className="font-bold">Technologies Used</h3>
                        <ul className="flex flex-wrap md:grid grid-cols-4">
                            <li className="w-full">MongoDB</li>
                            <li className="w-full">ExpressJS</li>
                            <li className="w-full">React</li>
                            <li className="w-full">NodeJS</li>
                        </ul>
                        <ul className="my-3 flex flex-wrap md:grid grid-cols-2 gap-3">
                            <li className="w-full"><img className="max-h-[300px]" src={Desktop} alt="" /></li>
                            <li className="w-full row-span-2"><img className="max-h-[620px]" src={AddMeal} alt="" /></li>
                            <li className="w-full"><img className="max-h-[300px]" src={CalcalorieMongo} alt="" /></li>
                        </ul>
                    </div>
                    <div className='border-t border-[#B3B5BB]'>
                        <h1 className="font-bold text-xl py-5 hover:underline hover:translate-x-5 transition-all duration-300"><Link to='https://tic-tac-toe-roan-one.vercel.app/' target="_blank">↗ Tic Tac Toe</Link></h1>
                        <Link to='https://github.com/Choowah/tic-tac-toe' target="_blank" className="underline">Source Code</Link>
                        <h3 className="font-bold">Technologies Used</h3>
                        <ul className="flex flex-wrap md:grid grid-cols-4 pb-8">
                            <li className="w-full">HTML</li>
                            <li className="w-full">CSS</li>
                            <li className="w-full">JavaScript</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;