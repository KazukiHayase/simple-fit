import { LightTheme } from "@/style/theme";
import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<Slot />
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
