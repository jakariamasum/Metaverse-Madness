import map from '../../assets/map.png'
import people1 from '../../assets/people-01.png'
import people2 from '../../assets/people-02.png'
import people3 from '../../assets/people-03.png'
const Track = () => {
    return (





        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
            <h2 className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center" >Track friends around you and invite them to play together in the same world</h2>
            <div className="relative mt-[68px] flex w-full h-[550px]">
                <img src={map} alt="map" className="w-full h-full object-cover" />
                <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src={people1} alt="people" className="w-full h-full" />
                </div>
                <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src={people2} alt="people" className="w-full h-full" />
                </div>
                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src={people3} alt="people" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Track;