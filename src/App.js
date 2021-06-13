import "./App.css";
import LeftNav from "./Components/LeftNav";
import ExplorerBar from "./Components/ExplorerBar";
import TabBar from "./Components/TabBar";
import BreadCrumbBar from "./Components/BreadCrumbBar";
import CodeWindow from "./Components/CodeWindow";
import RemoteWindowButton from "./Components/RemoteWindowButton";
import BottomBar from "./Components/BottomBar";

function App() {
	return (
		<>
			<LeftNav />
			<ExplorerBar />
			<TabBar />
			<BreadCrumbBar />
			<CodeWindow />
			<RemoteWindowButton />
			<BottomBar />
		</>
	);
}

export default App;
