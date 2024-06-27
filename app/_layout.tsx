import { SeedProvider } from "@/providers/SeedProvider";
import { RealmProvider } from "@/realm";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import "react-native-get-random-values";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
	return (
		<SafeAreaProvider>
			<GluestackUIProvider config={config}>
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
									title: "トレーニング",
									headerBackTitle: "戻る",
								}}
							/>
						</Stack>
					</SeedProvider>
				</RealmProvider>
			</GluestackUIProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
