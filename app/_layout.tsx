import { SeedProvider } from "@/providers/SeedProvider";
import { RealmProvider } from "@/realm";
import { LightTheme } from "@/style/theme";
import dayjs from "dayjs";
import { Slot } from "expo-router";
import "react-native-get-random-values";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<RealmProvider>
					<SeedProvider>
						<Slot />
					</SeedProvider>
				</RealmProvider>
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
