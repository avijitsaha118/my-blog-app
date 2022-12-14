import React from 'react';
import { HiOutlineCode } from "react-icons/hi";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { Element } from "react-scroll";

const Services = () => {
    return (
        <div>
            <Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<p className="text-sm uppercase text-gray-400">My Skills</p>
				<h1 className="text-indigo-800 text-6xl font-bold text-center">
					My Expertise
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<HiOutlineCode className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								HTML & CSS
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<DiJavascript1 className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								JavaScript
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<DiReact className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								React & Next.js
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>

                    

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<DiNodejs className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Node.js
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>


                <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<SiExpress className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								Express
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>

                    

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<DiMongodb className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								MongoDB
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>

			</div>
		</Element>
        </div>
    );
};

export default Services;