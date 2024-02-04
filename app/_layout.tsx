import { LightTheme } from "@/style/theme";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "@/components/Navigation";
import "react-native-get-random-values";
import { RealmProvider } from "@/realm";

const Layout = () => {
	// TODO: マスタデータの登録処理

	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<RealmProvider>
					<Navigation />
				</RealmProvider>
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
