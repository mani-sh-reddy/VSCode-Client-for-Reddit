import "./App.css";
import { Container, Row, Col } from "reactstrap";
import LeftNav from "./Components/LeftNav";
import BottomBar from "./Components/BottomBar";
import ExplorerBar from "./Components/ExplorerBar";
import CodeWindow from "./Components/CodeWindow";

function App() {
	return (
		<>
			<LeftNav />
			<BottomBar />
			<ExplorerBar />
			<CodeWindow />
		</>
	);
}

export default App;
