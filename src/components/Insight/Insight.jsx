import { RxArrowTopRight } from "react-icons/rx";
import planet6 from '../../assets/planet-06.png'
import planet7 from '../../assets/planet-07.png'
import planet8 from '../../assets/planet-08.png'
const Insight = () => {
    return (
        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col py-48">
            <h2 className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center" >Insight about metaverse</h2>
            <div className="mt-[50px] flex flex-col gap-[30px]">
                <div className="flex md:flex-row flex-col gap-4">
                    <img src={planet6} alt="planet-01" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
                    <div className="w-full flex justify-between items-center">
                        <div className="flex-1 ml-[62px] flex flex-col max-w-[650px]">
                            <h4 className="font-normal lg:text-[42px] text-[26px] text-white">The launch of the Metaverse makes Elon musk ketar-ketir</h4>
                            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.</p>
                        </div>
                        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
                            <RxArrowTopRight className="w-[40%] h-[40%] object-contain cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4" >
                    <img src={planet7} alt="planet-01" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
                    <div className="w-full flex justify-between items-center">
                        <div className="flex-1 ml-[62px] flex flex-col max-w-[650px]">
                            <h4 className="font-normal lg:text-[42px] text-[26px] text-white">7 tips to easily master the madness of the Metaverse</h4>
                            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum</p>
                        </div>
                        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
                            <RxArrowTopRight className="w-[40%] h-[40%] object-contain cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4" >
                    <img src={planet8} alt="planet-01" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
                    <div className="w-full flex justify-between items-center">
                        <div className="flex-1 ml-[62px] flex flex-col max-w-[650px]">
                            <h4 className="font-normal lg:text-[42px] text-[26px] text-white">With one platform you can explore the whole world virtually</h4>
                            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem</p>
                        </div>
                        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
                            <RxArrowTopRight className="w-[40%] h-[40%] object-contain cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insight;