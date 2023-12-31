import planet9 from '../../assets/planet-09.png'
import stamp from '../../assets/stamp.png'
const Creator = () => {
    return (
        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-6">
            <div className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative" >
                <div className="feedback-gradient"></div>
                <div>
                    <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Samantha</h4>
                    <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Founder | Metaversus</p>
                </div>
                <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
            </div>
            <div className="relative flex-1 flex justify-center items-center" >
                <img src={planet9} alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
                <div className="lg:block hidden absolute -left-[10%] top-[3%]" >
                    <img src={stamp} alt="stamp" className="w-[155px] h-[155px] object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Creator;