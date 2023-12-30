import img from '../../assets/get-started.png'
const HowWorks = () => {
    return (
        <div className='w-full mx-auto flex lg:flex-row flex-col gap-8 py-12'>
            <div className='flex-1 flex justify-center items-center'>

                <img src={img} alt="" className='w-[90%] h-[90%] object-contain' />
            </div>
            <div className='flex-[0.75] flex justify-center flex-col'>

                <h2 className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white undefined" >Get started with just a few clicks</h2>
                <div className="mt-[31px] flex flex-col  gap-[24px]">
                    <div className="flex justify-center items-center flex-row">
                        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
                            <p className="font-bold text-[20px] text-white">01</p>
                        </div>
                        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">Find a world that suits you and you want to enter</p>
                    </div>
                    <div className="flex justify-center items-center flex-row">
                        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
                            <p className="font-bold text-[20px] text-white">02</p>
                        </div>
                        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">Enter the world by reading basmalah to be safe</p>
                    </div>
                    <div className="flex justify-center items-center flex-row">
                        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
                            <p className="font-bold text-[20px] text-white">03</p>
                        </div>
                        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">No need to beat around the bush, just stay on the gas and have fun</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowWorks;