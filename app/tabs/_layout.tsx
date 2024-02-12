import dayjs from "dayjs";
import { Tabs } from "expo-router";
import "react-native-get-random-values";
import { Icon } from "react-native-paper";

const Layout = () => {
	const today = dayjs().locale("ja").format("YYYY/MM/DD");

	return (
		<Tabs initialRouteName="home">
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
		</Tabs>
	);
};

export default Layout;
