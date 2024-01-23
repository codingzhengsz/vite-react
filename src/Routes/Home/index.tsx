import { useState } from "react";
import Header from "@/Components/Header";
import ReadDocs from "@/Components/ReadTheDocs";

const Home: React.FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Header />
			<div className="card">
				<button type="button" onClick={() => setCount(count + 1)}>
					count is {count}
				</button>
			</div>
			<ReadDocs />
			<p className="text-red-200 underline">
				Tailwindcss configuration enabled.
			</p>
		</div>
	);
};

export default Home;
