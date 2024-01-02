import { StyleSheet, View } from "react-native";
import { Appbar, Divider, List, useTheme } from "react-native-paper";

export const Home: React.FC = () => {
	const styles = useStyle();
	const today = "2021/08/01";

	return (
		<>
			<Appbar.Header style={styles.header}>
				<Appbar.Content title={today} titleStyle={styles.headerTitle} />
			</Appbar.Header>
			<View style={styles.wrapper}>
				<List.Section>
					<List.Subheader style={styles.sectionHeader}>
						今日のトレーニング
					</List.Subheader>
					{Array.from({ length: 5 }).map((_, i) => (
						<>
							<List.Item
								title="ベンチプレス"
								description="5セット"
								right={(props) => <List.Icon {...props} icon="chevron-right" />}
								titleStyle={{ fontWeight: "bold" }}
								style={styles.listItem}
								onPress={() => alert(`pressed ${i}`)}
							/>
							<Divider />
						</>
					))}
				</List.Section>
			</View>
		</>
	);
};

const useStyle = () => {
	const { colors } = useTheme();

	return StyleSheet.create({
		header: {
			display: "flex",
			alignItems: "center",
			height: 40,
			borderBottomWidth: 1,
			borderBottomColor: colors.surfaceVariant,
		},
		headerTitle: {
			fontSize: 18,
			fontWeight: "bold",
		},
		wrapper: {
			height: "100%",
			padding: 16,
			backgroundColor: colors.background,
		},
		sectionHeader: {
			fontSize: 20,
			fontWeight: "bold",
		},
		listItem: {
			width: "100%",
			paddingRight: 10,
		},
	});
};
