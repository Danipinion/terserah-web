/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import { dapur } from "../assets/img";
import MainLayouts from "../layouts/MainLayouts";
const Home = () => {
	return (
		<MainLayouts>
			<div className="flex items-center sm:flex-row flex-col text-center sm:text-left">
				<div className="sm:w-1/2 sm:pl-20 px-2 sm:px-0">
					<h1 className="text-white  text-4xl sm:text-8xl not-italic font-bold ">
						TERSERAH
					</h1>
					<p className="text-white text-[15px] not-italic font-normal  mb-8">
						Apa aja yang penting enak!~
					</p>
					<div>
						{/* <input
							type="text"
							className="w-full  h-[76px] shrink-0 rounded-[20px] mr-5 pl-4 placeholder:text-xl sm:mb-0 mb-2"
							placeholder="Masukkan namamu"
						/> */}
						<Link
							to="/menu"
							className="w-[191px] h-[76px] p-4 shrink-0 rounded-[20px] bg-white text-black text-xl not-italic font-semibold leading-[normal]"
						>
							pesan
						</Link>
					</div>
				</div>
				<div>
					<img src={dapur} alt="dapur" />
				</div>
			</div>
		</MainLayouts>
	);
};

export default Home;
