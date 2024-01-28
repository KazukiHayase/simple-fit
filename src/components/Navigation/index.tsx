import { Tabs } from "expo-router/tabs";

// TODO: typed router対応
export const Navigation: React.FC = () => {
	return (
		<Tabs
			// TODO: ヘッダーもここで定義する
			screenOptions={{ headerShown: false }}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "ホーム",
				}}
			/>
			<Tabs.Screen
				name="record/index"
				options={{
					title: "記録",
				}}
			/>
		</Tabs>
	);
};
