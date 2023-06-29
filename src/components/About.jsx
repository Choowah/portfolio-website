import FBProf from '../assets/fb-profile.png'

const About = () => {
    return (
        <div className="flex flex-wrap-reverse max-w-[1240px] p-10 md:grid md:grid-cols-2 items-center mx-auto">
            <div className='p-10'>
                <h1 className='text-[#817F75] font-bold text-3xl md:text-5xl py-3'>ABOUT</h1>
                <h3 className="border-t border-[#B3B5BB] font-bold py-3">My Journey.</h3>
                <p>Born in 1995 in Kuala Lumpur, Malaysia. I have spent five years working in the manufacturing industry, where I encountered numerous instances of software lacking vitality and emotional depth. This realization sparked a personal reflection, leading me to believe that software and webpages have the potential to be captivating and stimulating. Early 2023, I made a conscious decision to embark on a journey of learning web development, channeling my artistic aspirations and seeking to infuse my creations with fresh ideas and inspirations.</p>
            </div>
            <img className='block rounded-3xl w-[500px] mx-auto lg:absolute lg:right-0 lg:bottom-0 lg:rounded-tl-3xl lg:rounded-none' src={FBProf} alt="profile-picture" />
        </div>
    );
}
 
export default About;