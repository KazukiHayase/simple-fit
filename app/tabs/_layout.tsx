import { SeedProvider } from "@/providers/SeedProvider";
import { RealmProvider } from "@/realm";
import { LightTheme } from "@/style/theme";
import dayjs from "dayjs";
import { Stack, Tabs } from "expo-router";
import "react-native-get-random-values";
import { Icon, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

// tabsディレクトリを作成するとか
const Layout = () => {
	const today = dayjs().locale("ja").format("YYYY/MM/DD");

	return (
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
			{/* <Tabs.Screen */}
			{/* 	name="training/[id]" */}
			{/* 	options={{ */}
			{/* 		headerTitle: "トレーニングを記録", */}
			{/*            href: null, */}
			{/* 	}} */}
			{/* /> */}
		</Tabs>
	);
};

export default Layout;
