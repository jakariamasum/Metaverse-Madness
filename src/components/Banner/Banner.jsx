import cover from '../../assets/cover.png'
import stamp from '../../assets/stamp.png'
const Banner = () => {
    return (
        <div>
            <div className='text-[144px] uppercase flex flex-col leading-none'>
                <span>metaverse</span>
                <span className='relative z-50'>madness</span>
            </div>
            <div className='relative w-full md:-mt-[20px] -mt-[12px]'>
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]"></div>
            <img src={cover} className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative" alt="cover"/>
            </div>
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                <img src={stamp} className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" alt="stamp"/>
            </div>
        </div>
    );
};

export default Banner;