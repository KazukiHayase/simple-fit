import { Tabs } from "expo-router/tabs";
import { Icon } from "react-native-paper";

// TODO: typed router対応
export const Navigation: React.FC = () => {
	const today = "2021/08/01";

	return (
		<Tabs>
			<Tabs.Screen
				name="index"
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
