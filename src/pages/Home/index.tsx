import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const Home: React.FC = () => {
	return (
		<View style={styles.wrapper}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
