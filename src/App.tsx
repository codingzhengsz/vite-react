import React from "react";
import { Provider as ReduxStoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import browserRouter from "./Routes";
import { store } from "./Store";

const App = () => (
	<ReduxStoreProvider store={store}>
		<RouterProvider router={browserRouter} />
	</ReduxStoreProvider>
);

export default App;
