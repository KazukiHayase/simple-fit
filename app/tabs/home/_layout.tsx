import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="modal"
				options={{
					presentation: "modal",
					title: "トレーニングを選択",
					headerBackTitleVisible: true,
					headerBackTitle: "戻る",
				}}
			/>
		</Stack>
	);
};

export default Layout;
