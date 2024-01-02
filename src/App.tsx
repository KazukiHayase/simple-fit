import { Home } from "@/pages/Home";
import registerRootComponent from "expo/build/launch/registerRootComponent";

export default function App() {
	return <Home />;
}

registerRootComponent(App);
