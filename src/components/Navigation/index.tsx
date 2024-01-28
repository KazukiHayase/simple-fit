import dayjs from "dayjs";
import { Tabs } from "expo-router/tabs";
import { Icon } from "react-native-paper";

export const Navigation: React.FC = () => {
	const today = dayjs().locale("ja").format("YYYY/MM/DD");

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
