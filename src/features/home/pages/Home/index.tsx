import { useQuery } from "@/realm";
import { Training } from "@/realm/model/Training";
import dayjs from "dayjs";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { Divider, FAB, List, useTheme } from "react-native-paper";

export const Home: React.FC = () => {
	const styles = useStyle();

	const trainings = useQuery(Training, (trainings) => {
		const today = dayjs().locale("ja").toDate();
		today.setHours(0, 0, 0, 0);
		return trainings.filtered("createdAt >= $0", today);
	});

	return (
		<>
			<ScrollView>
				<View style={styles.wrapper}>
					<List.Section>
						<List.Subheader style={styles.sectionHeader}>
							今日のトレーニング
						</List.Subheader>
						{trainings.map(({ _id, type, sets }) => (
							<View key={_id.toString()}>
								<List.Item
									title={type.name}
									description={`${sets.length}セット`}
									right={(props) => (
										<List.Icon {...props} icon="chevron-right" />
									)}
									titleStyle={{ fontWeight: "bold" }}
									style={styles.listItem}
									onPress={() => alert(`pressed ${_id.toString()}`)}
								/>
								<Divider />
							</View>
						))}
					</List.Section>
				</View>
			</ScrollView>
			<Link href="/home/modal" asChild>
				<FAB icon="plus" style={styles.addButton} />
			</Link>
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
			flex: 1,
			padding: 16,
			overflow: "scroll",
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
		addButton: {
			position: "absolute",
			right: 30,
			bottom: 50,
			borderRadius: 50,
		},
	});
};
