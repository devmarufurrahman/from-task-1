import { FcNews } from "react-icons/fc";

const LayoutHeader = () => {
	return (
		<>
			<div className="container px-8 mt-5 flex justify-between items-center bg-indigo-50">
				<div className="logo ">
					<FcNews className="w-14 h-14" />
				</div>
				<div className="btn btn flex gap-8">
					<button className="hover:bg-purple-200 rounded-lg px-3 py-2 ">
						Home
					</button>
					<button className="bg-purple-600 rounded-lg px-3 py-2 hover:bg-purple-400">
						Login
					</button>
				</div>
			</div>
		</>
	);
};

export default LayoutHeader;
