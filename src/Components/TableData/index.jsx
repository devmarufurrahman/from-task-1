import { AiOutlineDelete } from "react-icons/ai";

const TableData = () => {
	return (
		<>
			<div>
				{/* <!-- Preview Data --> */}
				<div className="table-container">
					<table className="booking-table">
						<thead className="bg-gray-100/50">
							<tr className="text-black text-left">
								<th>Destination From</th>
								<th>Destination To</th>
								<th className="text-center">Journey Date</th>
								<th className="text-center">Guests</th>
								<th className="text-center">className</th>
								<th className="text-center">Delete</th>
							</tr>
						</thead>
						<tbody
							className="divide-y divide-gray-300/20"
							id="lws-previewBooked">
							{/* <!-- Row 1 --> */}
							<tr className="lws-bookedTable text-black">
								<td className="px-6 py-4">
									<div className="flex items-center space-x-3">
										<p className="lws-bookedFrom">Dhaka</p>
									</div>
								</td>
								<td className="px-6 py-4">
									<p className="lws-bookedTo">Sylhet</p>
								</td>
								<td className="px-6 py-4 text-center">
									<p className="lws-bookedDate">11-01-23</p>
								</td>
								<td className="px-6 py-4 text-center">
									<p className="lws-bookedGustes">2</p>
								</td>
								<td className="px-6 py-4 text-center">
									<span className="lws-bookedclassName"> Business </span>
								</td>
								<td className="px-6 py-4 text-center">
									<div className="flex justify-center gap-4">
										<button className="lws-remove">
											<AiOutlineDelete className="bg-red-100 border-2 border-red-700 w-8 h-8 " />
										</button>
									</div>
								</td>
							</tr>

							{/* <!-- Row 2 --> */}
							<tr className="lws-bookedTable text-black">
								<td className="px-6 py-4">
									<div className="flex items-center space-x-3">
										<p className="lws-bookedFrom">Dhaka</p>
									</div>
								</td>
								<td className="px-6 py-4">
									<p className="lws-bookedTo">Sylhet</p>
								</td>
								<td className="px-6 py-4 text-center">
									<p className="lws-bookedDate">11-01-23</p>
								</td>
								<td className="px-6 py-4 text-center">
									<p className="lws-bookedGustes">2</p>
								</td>
								<td className="px-6 py-4 text-center">
									<span className="lws-bookedclassName"> Business </span>
								</td>
								<td className="px-6 py-4 text-center">
									<div className="flex justify-center gap-4">
										<button className="lws-remove">
											<AiOutlineDelete className="bg-red-100 border-2 border-red-700 w-8 h-8 " />
										</button>
									</div>
								</td>
							</tr>

							{/* <!-- Row 3 --> */}
							<tr className="lws-bookedTable text-black">
								<td className="px-6 py-4">
									<div className="flex items-center space-x-3">
										<p className="lws-bookedFrom">Dhaka</p>
									</div>
								</td>
								<td className="px-6 py-4">
									<p className="lws-bookedTo">Sylhet</p>
								</td>
								<td className="px-6 py-4 text-center">
									<p className="lws-bookedDate">11-01-23</p>
								</td>
								<td className="px-6 py-4 text-center">
									<p className="lws-bookedGustes">2</p>
								</td>
								<td className="px-6 py-4 text-center">
									<span className="lws-bookedclassName"> Business </span>
								</td>
								<td className="px-6 py-4 text-center">
									<div className="flex justify-center gap-4">
										<button className="lws-remove">
											<AiOutlineDelete className="bg-red-100 border-2 border-red-700 w-8 h-8 " />
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default TableData;
