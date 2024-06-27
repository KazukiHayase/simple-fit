import { Tabs } from "expo-router";
import "react-native-get-random-values";
import { Icon } from "react-native-paper";

const Layout = () => {
	return (
		<Tabs initialRouteName="home">
			<Tabs.Screen
				name="home"
				options={{
					title: "ホーム",
					tabBarIcon: ({ color, size }) => (
						<Icon source="home" color={color} size={size} />
					),
          headerShown: false,
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
