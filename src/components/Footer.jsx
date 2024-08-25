import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <section>
      {/* <div className="animate-marquee">
        <div className="grid gap-[32px] grid-flow-col w-fit overflow-x-hidden">
          <div className="flex items-end bg-profile-card opacity-100 w-[200px] h-[150px] rounded shadow-xl"></div>
          <div className="flex items-end bg-profile-card opacity-100 w-[200px] h-[150px] rounded shadow-xl"></div>
          <div className="flex mt-4">name</div>
        </div>
      </div> */}

      <div class="grid gap-[36px] overflow-hidden relative z-[2] mt-auto mb-auto mx-0 pt-14 px-auto bg-transparent">
        <div className="animate-marquee">
          <div className="grid gap-[32px] grid-flow-col w-fit">
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-50 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card1 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card2 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card3 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card4 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card5 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card6 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card1 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card2 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#E3EBFD] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card3 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#E3EBFD] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card4 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-50 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#E3EBFD] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card5 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card6 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card3 bg-cover transform transition-all rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-[32px] overflow-hidden relative z-[2] mt-2 mb-auto mx-0 bg-transparent">
        <div className="animate-marquee">
          <div className="grid gap-[32px] grid-flow-col w-fit">
            <div className="flex relative w-[200px]">Illustration</div>
            <div className="flex relative w-[200px]">Art</div>
            <div className="flex relative w-[200px]">Photography</div>
            <div className="flex relative w-[200px]">Print Design</div>
            <div className="flex relative w-[200px]">Animation</div>
            <div className="flex relative w-[200px]">Mobile</div>
            <div className="flex relative w-[200px]">Illustration</div>
            <div className="flex relative w-[200px]">Art</div>
            <div className="flex relative w-[200px]">Photography</div>
            <div className="flex relative w-[200px]">Print Design</div>
            <div className="flex relative w-[200px]">Animation</div>
            <div className="flex relative w-[200px]">Mobile</div>
            <div className="flex relative w-[200px]">Photogaphy</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 box-content max-w-[1200px]">
        <div className="flex flex-row pt-[72px] pb-4 justify-between">
          <a href="">
          <img src="logo.svg" alt="logo" className="w-20 h-20"/>
          </a>
          <ul className="flex flex-nowrap justify-center items-center pl-5 text-[100%] font-medium gap-y-3 gap-x-8 leading-5 align-baseline">
            <li>For designers</li>
            <li>Hire talent</li>
            <li>Inspiration</li>
            <li>Advertising</li>
            <li>Blog</li>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
          <div className="grid justify-center items-center grid-flow-col gap-4">
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="flex flex-row py-11 justify-between items-center">
          <ul className="flex flex-nowrap justify-center items-center pl-5 text-md gap-y-1 gap-x-4 leading-5 align-baseline">
            <li className=" text-gray-500">2024 Dribble</li>
            <li className=" text-gray-500">Terms</li>
            <li className=" text-gray-500">Privacy</li>
            <li className=" text-gray-500">Cookies</li>
          </ul>
          <ul className="flex flex-nowrap justify-center items-center pl-5 text-md gap-y-1 gap-x-4 leading-5 align-baseline">
            <li className=" text-gray-500">Jobs</li>
            <li className=" text-gray-500">Designers</li>
            <li className=" text-gray-500">Freelancer</li>
            <li className=" text-gray-500">Tags</li>
            <li className=" text-gray-500">Places</li>
            <li className=" text-gray-500">Resources</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
