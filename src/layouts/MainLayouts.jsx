import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscPreview } from "react-icons/vsc";
import axios from "axios";
/* eslint-disable react/prop-types */
const MainLayouts = ({ children }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [rating, setRating] = useState(5);
	const [reviewSaved, setReviewSaved] = useState(
		JSON.parse(localStorage.getItem("reviewSaved")) || false
	);

	const handleRatingChange = (value) => {
		setRating(value);
	};

	const handleSave = async () => {
		await axios.post("https://terserah-be.vercel.app/reviews", {
			stars: rating,
			description: description,
			name: name,
			category: "food",
		});

		setRating(2);
		setName("");
		setDescription("");
		setReviewSaved(true);
		// Tambahkan logika penyimpanan atau kirim data ke server jika diperlukan
	};

	const notify = () => {
		// Tampilkan pemberitahuan hanya jika review belum disimpan
		if (!reviewSaved) {
			toast.info("Silahkan Review Makanan Dan Minuman kami", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	useEffect(() => {
		notify();
	}, [reviewSaved]);

	const saveReviewStatusToLocalStorage = () => {
		localStorage.setItem("reviewSaved", JSON.stringify(reviewSaved));
	};

	useEffect(() => {
		// Cek local storage saat komponen mount
		const savedReviewStatus = localStorage.getItem("reviewSaved");
		if (savedReviewStatus) {
			setReviewSaved(JSON.parse(savedReviewStatus));
		}
	}, []);

	useEffect(() => {
		// Simpan status pengguna di local storage setiap kali nilai reviewSaved berubah
		saveReviewStatusToLocalStorage();
	}, [reviewSaved]);
	return (
		<div className="bg-gradient-to-t from-primary from-5% to-secondary to-50% w-screen h-screen overflow-hidden">
			<ToastContainer />
			<motion.div
				className="slide-in absolute top-0 left-0 w-full h-screen bg-white origin-bottom z-10"
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			></motion.div>
			<Navbar />
			{children}
			<motion.div
				className="slide-out absolute top-0 left-0 w-full h-screen bg-white origin-top z-10"
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			></motion.div>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			{reviewSaved ? null : (
				<button
					className="btn absolute bottom-10 right-10 z-10"
					onClick={() => document.getElementById("review").showModal()}
				>
					<VscPreview size={25} />
				</button>
			)}
			<dialog id="review" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Silahkan isi Review Sebentar Yaa...
					</h3>
					<form className="py-4" onSubmit={(e) => e.preventDefault()}>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Nama:</span>
							</label>
							<input
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Pesan:</span>
							</label>
							<textarea
								className="textarea textarea-bordered h-24"
								placeholder="Masukkan Pesan Disini"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</div>
						<div className="rating mt-5">
							{[1, 2, 3, 4, 5].map((value) => (
								<input
									key={value}
									type="radio"
									name="rating"
									className={`mask mask-star-2 bg-orange-400 ${
										value === rating ? "defaultChecked" : ""
									}`}
									onChange={() => handleRatingChange(value)}
								/>
							))}
						</div>
					</form>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button
								className="btn bg-secondary text-white"
								onClick={() => handleSave()}
							>
								save
							</button>
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default MainLayouts;
