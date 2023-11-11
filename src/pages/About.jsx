import MainLayouts from "../layouts/MainLayouts";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
	return (
		<MainLayouts>
			<div className="flex flex-col items-center px-2 sm:px-0">
				<h1 className="text-white text-[40px] not-italic font-bold leading-[normal] mb-6">
					About Us
				</h1>
				<div className="sm:w-[798px] h-[435px] shrink-0 rounded-[10px] bg-white px-7 py-[39px]">
					<p className=" text-black text-justify text-sm not-italic font-medium">
						Halloo Terloverss jadi "Terserah" merupakan sebuah brand Makanan dan
						Minuman Yang berlokasi di Kab. Madiun, Jawa Timur Buat kalian yang
						bingung "Duh pengen makan apa ya?” Bisa nih cobain produk dari kami,
						yang pastinya selain enak dan lezat Produk kami dijual dengan harga
						yang sangat terjangkau
					</p>
				</div>
			</div>
		</MainLayouts>
	);
};

export default About;
