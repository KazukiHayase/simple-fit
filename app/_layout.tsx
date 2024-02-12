import { SeedProvider } from "@/providers/SeedProvider";
import { RealmProvider } from "@/realm";
import { LightTheme } from "@/style/theme";
import { Stack } from "expo-router";
import "react-native-get-random-values";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<RealmProvider>
					<SeedProvider>
						<Stack initialRouteName="/tabs/home/index/">
							<Stack.Screen
								name="tabs"
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name="training/[id]"
								options={{
									headerBackTitle: "戻る",
								}}
							/>
						</Stack>
					</SeedProvider>
				</RealmProvider>
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
