import { Tmp } from "@/components/Tmp";
import registerRootComponent from "expo/build/launch/registerRootComponent";

export default function App() {
	return <Tmp />;
}

registerRootComponent(App);
