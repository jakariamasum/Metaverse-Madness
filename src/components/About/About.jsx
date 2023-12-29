import { FaArrowDown } from 'react-icons/fa'
const About = () => {
    return (
        <div className='mt-24'>
            <p className="text-[#C7C7C7] text-2xl">
                <span className="font-bold">Metaverse</span> is a new thing in the future, where you can enjoy the <span className="font-bold">virtual world</span> by feeling like it's really real, you can feel what you feel in this <span className="font-bold">metaverse world</span>, because this is really the <span className="font-bold">madness</span> of the metaverse of today, using only<span className="font-bold">VR</span>devices you can easily explore the metaverse world you want, turn your <span className="font-bold">dreams</span> into <span className="font-bold">reality</span>. Let' explore the madness of the metaverse by <span className="font-bold">scrolling down</span>
                <FaArrowDown className='mx-auto mt-8 cursor-pointer' size={44} />
            </p>
        </div>
    );
};

export default About;