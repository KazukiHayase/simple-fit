import { Home } from "@/pages/Home";
import { LightTheme } from "@/style/theme";
import registerRootComponent from "expo/build/launch/registerRootComponent";
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<Home />
			</PaperProvider>
		</SafeAreaProvider>
	);
}

registerRootComponent(App);
