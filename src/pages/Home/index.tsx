import { StyleSheet } from "react-native";
import { Appbar, Text, useTheme } from "react-native-paper";

export const Home: React.FC = () => {
	const theme = useTheme();
	const today = "2021/08/01";

	return (
		<>
			<Appbar.Header
				style={[
					styles.header,
					{ borderBottomColor: theme.colors.surfaceVariant },
				]}
			>
				<Appbar.Content
					title={today}
					titleStyle={{ fontSize: 18, fontWeight: "bold" }}
				/>
			</Appbar.Header>
			<Text variant="displayMedium">Todo</Text>
		</>
	);
};

const styles = StyleSheet.create({
	header: {
		display: "flex",
		alignItems: "center",
		height: 40,
		borderBottomWidth: 1,
	},
});
