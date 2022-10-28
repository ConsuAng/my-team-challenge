import img1 from "./assets/photo1.png";
import img2 from "./assets/photo2.png";
import img3 from "./assets/photo3.png";
import img4 from "./assets/photo4.png";
import img5 from "./assets/photo5.png";
import img6 from "./assets/photo6.png";

function App() {
  return (
    <div className="App">
      <div className="pl-[12px] pt-[71px] pb-[38px] flex flex-col lg:flex-row lg:justify-center lg:pt-28 lg:pb-24">
        <h1 className="text-4xl text-[#000000] font-bold tracking-[-0.045em] font-serif pb-[38px] lg:pr-52">
          The creative crew
        </h1>
        <div className="lg:max-w-[290px]">
          <p className="text-[18px]] font-semibold text-[#000000] font-sans pb-[10px] uppercase">
            Who we are
          </p>
          <p className="font-normal text-[14px] font-sans ">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-[40px] pb-32 lg:gap-[65px] lg:max-w-[1024px]">
          <div>
            <div className="relative">
              <img src={img1} className="w-[138px] lg:w-[238px]" />
              <p className="rotate-90 absolute top-[35px] right-[-53px] font-normal text-[10px] uppercase lg:text-xs lg:top-[43px] lg:right-[-70px]">
                Product owner
              </p>
            </div>
            <p className="pt-[4px] font-semibold text-sm lg:text-lg lg:pt-4">Bill Mahoney</p>
          </div>
          <div className="pt-[45px] lg:pt-24">
            <div className="relative">
              <img src={img2} className="w-[138px] lg:w-[238px]" />
              <p className="rotate-90 absolute top-[27px] right-[-45px] font-normal text-[10px] uppercase lg:text-xs lg:top-[34px] lg:right-[-60px]">
                Art director
              </p>
            </div>
            <p className="pt-[4px] font-semibold text-sm lg:text-lg lg:pt-4">Saba Cabrera</p>
          </div>
          <div>
            <div className="relative">
              <img src={img3} className="w-[138px] lg:w-[238px]" />
              <p className="rotate-90 absolute top-[18px] right-[-36px] font-normal text-[10px] uppercase lg:text-xs lg:top-[23px] lg:right-[-47px]">
                Tech Lead
              </p>
            </div>
            <p className="pt-[4px] font-semibold text-sm  lg:text-lg lg:pt-4">Shae Le</p>
          </div>
          <div className="pt-[45px] lg:pt-0">
            <div className="relative">
              <img src={img4} className="w-[138px] lg:w-[238px]" />
              <p className="rotate-90 absolute top-[35px] right-[-53px] font-normal text-[10px] uppercase lg:text-xs lg:top-[30px] lg:right-[-60px]">
                UX Designer
              </p>
            </div>
            <p className="pt-[4px] font-semibold text-sm lg:text-lg lg:pt-4" >Skylah Lu</p>
          </div>
          <div className="lg:pt-24">
            <div className="relative">
              <img src={img5} className="w-[138px] lg:w-[238px]" />
              <p className="rotate-90 absolute top-[35px] right-[-53px] font-normal text-[10px] uppercase lg:text-xs lg:top-[24px] lg:right-[-54px]">
                Developer
              </p>
            </div>
            <p className="pt-[4px] font-semibold text-sm lg:text-lg lg:pt-4">Griff Richards</p>
          </div>
          <div className="pt-[45px] lg:pt-0">
            <div className="relative">
              <img src={img6} className="w-[138px] lg:w-[238px]" />
              <p className="rotate-90 absolute top-[35px] right-[-53px] font-normal text-[10px] uppercase lg:text-xs lg:top-[27px] lg:right-[-54px]">
                DEverloper
              </p>
            </div>
            <p className="pt-[4px] font-semibold text-sm lg:text-lg lg:pt-4">Stan John</p>
          </div>
        </div>
      </div>

      <div className="text-[#A9A9A9] font-medium text-sm pb-6 text-center">
        created by <span className="font-bold">Consuelo Anguita</span> -
        devChallenges.io
      </div>
    </div>
  );
}

export default App;
