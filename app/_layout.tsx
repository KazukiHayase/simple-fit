import { LightTheme } from "@/style/theme";
import { Icon, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-get-random-values";
import { RealmProvider } from "@/realm";
import { Tabs } from "expo-router";
import dayjs from "dayjs";

const Layout = () => {
	// TODO: マスタデータの登録処理
	const today = dayjs().locale("ja").format("YYYY/MM/DD");

	return (
		<SafeAreaProvider>
			<PaperProvider theme={LightTheme}>
				<RealmProvider>
					<Tabs initialRouteName="home">
						<Tabs.Screen
							name="index"
							options={{
								href: null,
							}}
						/>
						<Tabs.Screen
							name="home"
							options={{
								title: "ホーム",
								tabBarIcon: ({ color, size }) => (
									<Icon source="home" color={color} size={size} />
								),
								headerTitle: today,
							}}
						/>
						<Tabs.Screen
							name="record/index"
							options={{
								title: "記録",
								tabBarIcon: ({ color, size }) => (
									<Icon source="history" color={color} size={size} />
								),
							}}
						/>
						<Tabs.Screen
							name="training/add/index"
							options={{
								title: "トレーニングを選択",
								href: null,
							}}
						/>
					</Tabs>
				</RealmProvider>
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default Layout;
