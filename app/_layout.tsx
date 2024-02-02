import { LightTheme } from "@/style/theme";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "@/components/Navigation";

const Layout = () => {
  // TODO: マスタデータの登録処理

	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<Navigation />
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
