import { LightTheme } from "@/style/theme";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "@/components/Navigation";
import { RealmProvider } from "@realm/react";
import { schema } from "@/realm/model";
import "react-native-get-random-values";

const Layout = () => {
	// TODO: マスタデータの登録処理

	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<RealmProvider schema={schema}>
					<Navigation />
				</RealmProvider>
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
