import { GrLocation } from "react-icons/gr";
import { BiUserCircle, BiBriefcase } from "react-icons/bi";

const FormData = () => {
	return (
		<>
			<div className="mt-[160px] mx-4 md:mt-[160px] relative">
				<div className="bg-gray-100 rounded-md max-w-6xl w-full mx-auto">
					<form className="first-hero lws-inputform  ">
						{/* <!-- From --> */}
						<div className="des-from">
							<p>Destination From</p>
							<div className="flex flex-row items-center">
								<GrLocation />
								<select
									className="outline-none bg-gray-100 px-2 py-2 w-full"
									name="from"
									id="lws-from"
									required>
									<option value="" hidden>
										Please Select
									</option>
									<option>Dhaka</option>
									<option>Sylhet</option>
									<option>Saidpur</option>
									<option>Coxs Bazar</option>
								</select>
							</div>
						</div>

						{/* <!-- To --> */}
						<div className="des-from">
							<p>Destination To</p>
							<div className="flex flex-row items-center">
								<GrLocation />
								<select
									className="outline-none bg-gray-100 px-2 py-2 w-full"
									name="to"
									id="lws-to"
									required>
									<option value="" hidden>
										Please Select
									</option>
									<option>Dhaka</option>
									<option>Sylhet</option>
									<option>Saidpur</option>
									<option>Coxs Bazar</option>
								</select>
							</div>
						</div>

						{/* <!-- Date --> */}
						<div className="des-from">
							<p>Journey Date</p>
							<input
								type="date"
								className="outline-none bg-gray-100 px-2 py-2 w-full date"
								name="date"
								id="lws-date"
								required
							/>
						</div>

						{/* <!-- Guests --> */}
						<div className="des-from">
							<p>Guests</p>
							<div className="flex flex-row items-center">
								<BiUserCircle />
								<select
									className="outline-none bg-gray-100 px-2 py-2 w-full"
									name="guests"
									id="lws-guests"
									required>
									<option value="" hidden>
										Please Select
									</option>
									<option value="1">1 Person</option>
									<option value="2">2 Persons</option>
									<option value="3">3 Persons</option>
									<option value="4">4 Persons</option>
								</select>
							</div>
						</div>

						{/* <!-- className --> */}
						<div className="des-from !border-r-0">
							<p>Class</p>
							<div className="flex flex-row items-center">
								<BiBriefcase />
								<select
									className="outline-none bg-gray-100 px-2 py-2 w-full"
									name="ticketclassName"
									id="lws-ticketclassName"
									required>
									<option value="" hidden>
										Please Select
									</option>
									<option>Business</option>
									<option>Economy</option>
								</select>
							</div>
						</div>

						<button className="addCity" type="submit" id="lws-addCity">
							<svg
								width="15px"
								height="15px"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
							<span className="text-sm">Book</span>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default FormData;
