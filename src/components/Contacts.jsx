import { Link } from "react-router-dom";

const Contacts = () => {
    return (
        <div className='max-w-[1240px] text-left p-10 mx-auto'>
            <div className="p-10">
                <h1 className='text-[#817F75] font-bold text-3xl md:text-5xl py-3'>CONTACTS</h1>
                <ul className="border-t border-[#B3B5BB] py-3">
                    <Link to='mailto:yeeyong0911@gmail.com' target="_blank"><li className="py-5 hover:underline hover:translate-x-5 transition-all duration-300">↗ yeeyong0911@gmail.com</li></Link>
                    <Link to='https://linkedin.com/in/yeeyong' target="_blank"><li className="py-5 hover:underline hover:translate-x-5 transition-all duration-300">↗ LinkedIn</li></Link>
                    <Link to='https://github.com/Choowah' target="_blank"><li className="py-5 hover:underline hover:translate-x-5 transition-all duration-300">↗ GitHub</li></Link>
                </ul>
            </div>
        </div>
    );
}
 
export default Contacts;