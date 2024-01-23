import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import browserRouter from "./Routes";

const App = () => (
	<React.StrictMode>
		<RouterProvider router={browserRouter} />
	</React.StrictMode>
);

export default App;
