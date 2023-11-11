import { lesque, nasasu } from "../assets/img";
import MainLayouts from "../layouts/MainLayouts";

const Menu = () => {
	return (
		<MainLayouts>
			<div className="flex flex-col items-center">
				<h1 className="text-white text-[40px] not-italic font-bold leading-[normal]">
					My Menu:
				</h1>
				<div className="flex gap-12 mt-6">
					<div className="w-[282px] shrink-0 rounded-[10px] bg-white overflow-hidden">
						<div className="group relative">
							<img src={lesque} alt="menu" />
							<div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-all group-hover:bg-white/50 w-full h-full text-center flex flex-col gap-5">
								<h1 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Lesque
								</h1>
								<p className=" text-black  text-xl not-italic font-medium leading-[normal]">
									Minuman lemon Bersoda yang menyegarkan
								</p>
								<h2 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Rp. 5000
								</h2>
							</div>
						</div>
					</div>
					<div className="w-[282px] shrink-0 rounded-[10px] bg-white overflow-hidden">
						<div className="group relative">
							<img src={nasasu} alt="menu" />
							<div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-all group-hover:bg-white/50 w-full h-full text-center flex flex-col gap-5">
								<h1 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Nasasu
								</h1>
								<p className=" text-black  text-xl not-italic font-medium leading-[normal]">
									Makanan nasi yang dicampuri ayam suwir pedas
								</p>
								<h2 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Rp. 6000
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayouts>
	);
};

export default Menu;
