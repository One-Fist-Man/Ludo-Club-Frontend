import React from "react";
import ArrowIcon from "./SvgComponents/ArrowIcon";
import StarIcon from "./SvgComponents/StarIcon";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-white h-[100vh] overflow-y-scroll w-full  flex justify-center items-center ">
      <div><div>hello</div> <div>heelo2</div>  </div>
      <div className="2xl:w-[900px] 2xl:h-[900px] xl:w-[800px] xl:h-[800px] sm:w-[400px] sm:h-[400px] w-[350px] h-[350px] container  ">
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full ">
          <div className="bg-red-500 border border-black  col-span-4 row-span-4 flex justify-center items-center 2xl:p-16 xl:p-12 sm:p-6 p-5">
            <div className=" bg-white text-center w-full h-full flex justify-center items-center ">
              <div className="grid grid-rows-2 grid-cols-2 xl:gap-8 sm:gap-4 gap-2">
                <div className="bg-red-500  rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3 "></div>
                <div className="bg-red-500  rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-red-500  rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-red-500  rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
              </div>
            </div>
          </div>
          <div className="bg-white col-span-2 row-span-4 text-center">
            {[...Array(6)].map((items, index) => {
              return (
                <>
                  {" "}
                  <div key={index} className="grid grid-cols-3   ">
                    <div className="border-r border-t border-black w-full 2xl:h-[60px] xl:h-[53.5px] sm:h-[27px] h-[23.5px] ">
                      {index === 2 ? (
                        <div>
                          <StarIcon />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className={`border-t border-black w-full  2xl:h-[60px] xl:h-[53.5px] sm:h-[27px] h-[23.5px] ${
                        index !== 0 ? "bg-green-500" : ""
                      }`}
                    >
                      {index === 0 ? (
                        <div className="rotate-90 h-full w-full text-green-500">
                          <ArrowIcon />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className={`border-l border-t border-black w-full  2xl:h-[60px] xl:h-[53.5px] sm:h-[27px] h-[23.5px] ${
                        index === 1 ? "bg-green-500" : ""
                      }`}
                    ></div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="bg-green-500 border border-black  col-span-4 row-span-4 flex justify-center items-center 2xl:p-16 xl:p-12 sm:p-6 p-5">
            <div className=" bg-white text-center w-full h-full flex justify-center items-center ">
              <div className="grid grid-rows-2 grid-cols-2 xl:gap-8 sm:gap-4 gap-2">
                <div className="bg-green-500  rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-green-500 rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-green-500  rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-green-500  rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
              </div>
            </div>
          </div>
          <div className=" bg-white col-span-4 row-span-2 ">
            <div className="grid grid-rows-3 grid-cols-6">
              {" "}
              {[...Array(3)].map((items, first_index) => {
                return (
                  <>
                    {[...Array(6)].map((items, second_index) => {
                      return (
                        <>
                          <div
                            key={second_index}
                            className={`${
                              first_index === 0
                                ? "border-b border-l"
                                : first_index === 1
                                ? "border-l"
                                : first_index === 2
                                ? "border-l border-t"
                                : ""
                            } border-black 2xl:h-[60px] xl:h-[53.5px] sm:h-[27px] h-[23.5px] ${
                              first_index === 0 && second_index === 1
                                ? "bg-red-500"
                                : first_index === 1 && second_index !== 0
                                ? "bg-red-500"
                                : ""
                            }`}
                          >
                            {first_index === 2 && second_index === 2 ? (
                              <div>
                                <StarIcon />
                              </div>
                            ) : first_index === 1 && second_index === 0 ? (
                              <div className="text-red-500">
                                <ArrowIcon />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
          <div className="bg-black  col-span-2 text-center row-span-2 relative ">
            <div className="absolute shadow-2xl border border-black w-0 h-0 2xl:border-l-[90px] 2xl:border-r-[90px] 2xl:border-b-[90px] 2xl:border-t-[90px] xl:border-l-[80px] xl:border-r-[80px] xl:border-b-[80px] xl:border-t-[80px] lg:border-l-[40px] lg:border-r-[40px] lg:border-b-[40px] lg:border-t-[40px] sm:border-l-[40px] sm:border-r-[40px] sm:border-b-[40px] sm:border-t-[40px]  border-l-[35px]  border-r-[36px]  border-b-[36px]  border-t-[35px] border-l-red-500 border-r-yellow-500 border-t-green-500 border-b-cyan-500  "></div>
          </div>
          <div className="bg-white col-span-4 row-span-2  ">
            <div className="grid grid-rows-3 grid-cols-6">
              {" "}
              {[...Array(3)].map((items, first_index) => {
                return (
                  <>
                    {[...Array(6)].map((items, second_index) => {
                      return (
                        <>
                          <div
                            key={second_index}
                            className={`${
                              first_index === 0
                                ? "border-r border-b"
                                : first_index === 1
                                ? "border-r"
                                : "border-t border-r"
                            } border-black 2xl:h-[60px] xl:h-[53.5px] sm:h-[27px] h-[23.5px] ${
                              first_index === 2 && second_index === 4
                                ? "bg-yellow-500"
                                : first_index === 1 && second_index !== 5
                                ? "bg-yellow-500"
                                : ""
                            }`}
                          >
                            {first_index === 0 && second_index === 3 ? (
                              <div>
                                <StarIcon />
                              </div>
                            ) : first_index === 1 && second_index === 5 ? (
                              <div className="rotate-180 text-yellow-500">
                                <ArrowIcon />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
          <div className="bg-cyan-500 border border-black col-span-4 row-span-4 flex justify-center items-center 2xl:p-16 xl:p-12 sm:p-6 p-5">
            <div className=" bg-white text-center w-full h-full flex justify-center items-center ">
              <div className="grid grid-rows-2 grid-cols-2 xl:gap-8 sm:gap-4 gap-2">
                <div className="bg-cyan-500  rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-cyan-500 rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-cyan-500 rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-cyan-500 rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
              </div>
            </div>
          </div>
          <div className="bg-white col-span-2 row-span-4 text-center">
            {[...Array(6)].map((items, index) => {
              return (
                <>
                  <div key={index} className="grid grid-cols-3   ">
                    <div
                      className={`border-b border-r border-black w-full  2xl:h-[60px] xl:h-[53.5px] sm:h-[26.8px] h-[23.5px] ${
                        index === 4 ? "bg-cyan-500" : ""
                      }`}
                    ></div>
                    <div
                      className={`border-b border-black w-full  2xl:h-[60px] xl:h-[53.5px] sm:h-[26.8px] h-[23.5px] ${
                        index !== 5 ? "bg-cyan-500" : ""
                      }`}
                    >
                      {index === 5 ? (
                        <div className="-rotate-90 text-cyan-500">
                          <ArrowIcon />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className={`border-l border-b border-black w-full  2xl:h-[60px] xl:h-[53.5px] sm:h-[26.8px] h-[23.5px]`}
                    >
                      {index === 3 ? (
                        <div>
                          <StarIcon />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="bg-yellow-500 border border-black col-span-4 row-span-4 flex justify-center items-center 2xl:p-16 xl:p-12 sm:p-6 p-5">
            <div className=" bg-white text-center w-full h-full flex justify-center items-center ">
              <div className="grid grid-rows-2 grid-cols-2 xl:gap-8 sm:gap-4 gap-2">
                <div className="bg-yellow-500 rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-yellow-500 rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-yellow-500 rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
                <div className="bg-yellow-500 rounded-[2rem] border-2 2xl:p-8 xl:p-8 sm:p-4 p-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
