import { LightTheme } from "@/style/theme";
import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "@/components/Navigation";

const Layout = () => {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<Navigation />
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
