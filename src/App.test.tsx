import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("Render the app correctly", () => {
	test("should render the title", async () => {
		render(<App />);

		const header = await screen.findByText(/Vite-React/);

		expect(header).toBeInTheDocument();
	});

	test("should render the button and counter", async () => {
		render(<App />);

		const button = (await screen.findAllByRole("button"))[0];
		const result = await screen.findByText(/count is/);


		expect(button).toBeInTheDocument();
		expect(button.innerHTML).toBe("Increment");

		await user.click(button);
		await user.click(button);
		await user.click(button);


		expect(result.innerHTML).toBe("count is: 3");
	});

	test("should render the `read the docs` row", async () => {
		render(<App />);

		const readTheDocs = await screen.findByTestId("read-the-docs");

		expect(readTheDocs).toBeInTheDocument();
	});
});
