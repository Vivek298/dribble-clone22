import React from "react";
import YellowFooter from "./YellowFooter";
import { Heart, Eye } from "lucide-react";

function HomeFeed() {
  return (
    <section className="">
      <h2 className="my-[43px] mx-[0] text-5xl">Explore inspiring designs</h2>
      <div className="grid grid-cols-4 px-[72px] gap-x-9 gap-y-2">
        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-1.png"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image1.png"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-2.png"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image2.png"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-3.png"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image3.png"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-4.jpg"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image4.png"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-5.png"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image5.png"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-6.jpg"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image6.png"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-7.png"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image7.jpg"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-8.png"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image8.jpg"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-9.png"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image9.png"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="rounded overflow-hidden w-fit">
            <img
              className="cursor-pointer text-black rounded-lg hover:opacity-70"
              src="../src/assets/thumbnail-10.jpg"
            />
            <div className="flex relative items-center justify-between mt-2 bg-transparent">
              <div className="flex items-center min-w-0">
                <a className="flex items-center">
                  <img
                    className="overflow-hidden rounded-[50%] w-6 h-6"
                    src="../src/assets/image10.png"
                  />
                  <span className="text-[14px] text-[#0d0c22] font-[450] leading-5 ml-2">
                    Mary Maka
                  </span>
                </a>
                <a className="flex items-center ml-2">
                  <span className="p-[3px] rounded-[3px] leading-[1] bg-[#ccc] text-[#fff] text-[10px] font-semibold uppercase">
                    Pro
                  </span>
                </a>
              </div>
              <div className="flex flex-1 justify-end text-xs text-[#6e6d7a]">
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Heart
                      fill="#b9b8c4"
                      stroke="#b9b8c4"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <span className="flex ml-1 ">141</span>
                </div>
                <div className="inline-flex items-center ml-2">
                  <div>
                    <Eye stroke="#b9b8c4" width="16px" height="16px" />
                  </div>
                  <span className="flex ml-1">31.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="">
        <button className="border-solid border-2 mt-10 border-gray-950 px-6 h-12 rounded-3xl">
          Browse more inspiration
        </button>
      </div>
      <YellowFooter />
    </section>
  );
}

export default HomeFeed;
