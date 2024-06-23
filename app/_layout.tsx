import { SeedProvider } from "@/providers/SeedProvider";
import { RealmProvider } from "@/realm";
import { LightTheme } from "@/style/theme";
import { config } from "@gluestack-ui/config";
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import "react-native-get-random-values";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
	return (
		<SafeAreaProvider>
			<GluestackUIProvider config={config}>
				<PaperProvider theme={LightTheme}>
					<RealmProvider>
						<SeedProvider>
							<Box h="$full" bg="$red50">
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
							</Box>
						</SeedProvider>
					</RealmProvider>
				</PaperProvider>
			</GluestackUIProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
