/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { stars } from "../assets/img";
import MainLayouts from "../layouts/MainLayouts";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import useSWR from "swr";
const Reviews = () => {
	const fetcher = async () => {
		const response = await axios.get("https://terserah-be.vercel.app/reviews");
		return response.data;
	};
	const { data } = useSWR("reviews", fetcher);
	if (!data) return <h2>Loading...</h2>;
	return (
		<MainLayouts>
			<div className="">
				<h1 className="text-white text-[40px] not-italic font-bold leading-[normal] mb-6 text-center">
					Reviews
				</h1>
				<div>
					<Swiper
						spaceBetween={10}
						slidesPerView={1}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						breakpoints={{
							"@0.00": {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							"@0.75": {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							"@1.00": {
								slidesPerView: 3,
								spaceBetween: 40,
							},
						}}
					>
						{data
							.filter((review) => review.id % 2 === 1)
							.map((review) => (
								<SwiperSlide key={review.id}>
									<CardsReview
										starsRating={review.stars}
										description={review.description}
										name={review.name}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
				<div className="mt-2">
					<Swiper
						spaceBetween={10}
						slidesPerView={1}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						breakpoints={{
							"@0.00": {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							"@0.75": {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							"@1.00": {
								slidesPerView: 3,
								spaceBetween: 40,
							},
						}}
					>
						{data
							.filter((review) => review.id % 2 === 0) // Memfilter hanya id ganjil
							.map((review) => (
								<SwiperSlide key={review.id}>
									<CardsReview
										starsRating={review.stars}
										description={review.description}
										name={review.name}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
		</MainLayouts>
	);
};

export default Reviews;

const CardsReview = ({ starsRating, description, name }) => {
	const starElements = Array.from({ length: starsRating }, (_, index) => (
		<img
			key={index}
			src={stars}
			alt="Stars"
			className="w-[30px] h-[30px] shrink-0"
		/>
	));
	return (
		<div className="sm:w-[399px] mx-2 h-[217px] shrink-0 rounded-[10px] bg-white px-6 py-4">
			<div className="flex gap-1">{starElements}</div>
			<p className="sm:w-[351px] h-1/2 text-black text-justify text-sm not-italic font-bold leading-[normal] mt-3 break-all overflow-hidden">
				{description}
			</p>
			<div className=" flex justify-between mt-5">
				<p className="w-[88px] text-[#696868] text-xs not-italic font-semibold leading-[normal]">
					--{name}
				</p>
				<p className="w-[88px] text-[#696868] text-xs not-italic font-semibold leading-[normal]">
					Food & Drink
				</p>
			</div>
		</div>
	);
};
