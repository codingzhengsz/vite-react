import Header from "@/Components/Header";
import ReadDocs from "@/Components/ReadTheDocs";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import type { RootState } from "../../Store";

import { decrement, increment } from "../../Store/slices/counter.slice";

const Home: React.FC = () => {
	const count = useAppSelector((state: RootState) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<Header />
			<div className="card">
				<button type="button" onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button type="button" onClick={() => dispatch(decrement())}>
					Decrement
				</button>
			</div>
			<section>
				<p>count is: {count}</p>
			</section>
			<ReadDocs />
			<p className="text-red-200 underline">
				Tailwindcss configuration enabled.
			</p>
		</div>
	);
};

export default Home;
