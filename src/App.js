import "./App.css";
import LeftNav from "./Components/LeftNav";
import ExplorerBar from "./Components/ExplorerBar";
import TabBar from "./Components/TabBar";
import BreadCrumbBar from "./Components/BreadCrumbBar";
import CodeWindow from "./Components/CodeWindow";
import CommentsTab from "./Components/CommentsTab";
import RemoteWindowButton from "./Components/RemoteWindowButton";
import BottomBar from "./Components/BottomBar";

function App() {
	return (
		<>
			<div className="noselect">
				<LeftNav />
				<ExplorerBar />
				<TabBar />
				<BreadCrumbBar />
			</div>
			<CodeWindow />
			<CommentsTab />
			<div className="noselect">
				<RemoteWindowButton />
				<BottomBar />
			</div>
		</>
	);
}

export default App;
