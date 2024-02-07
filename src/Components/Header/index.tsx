import reactLogo from "@/Assets/react.svg";
import viteLogo from "@/Assets/vite.svg";

const Header: React.FC = () => (
	<>
		<div className="flex justify-center">
			<img
				src={viteLogo}
				className="logo"
				data-testid="vite-logo"
				alt="Vite logo"
			/>
			<img
				src={reactLogo}
				className="logo react"
				data-testid="react-logo"
				alt="React logo"
			/>
		</div>
		<h2>Vite 5 + TS 5 + Husky + BiomeJs = Vite-React</h2>
	</>
);

export default Header;
