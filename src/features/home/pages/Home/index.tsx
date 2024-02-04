import { useQuery, useRealm } from "@/realm";
import { Training } from "@/realm/model/Training";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Divider, FAB, List, useTheme } from "react-native-paper";
import { BSON } from "realm";

export const Home: React.FC = () => {
	const styles = useStyle();

	const realm = useRealm();
	// const profiles = useQuery(Training);

	// FIXME: 動作確認用データ投入
	useEffect(() => {
		realm.write(() => {
			realm.deleteAll();
			const type = realm.create("TrainingType", {
				_id: new BSON.ObjectId(),
				name: "ベンチプレス",
				part: "CHEST",
			});

			realm.create("Training", {
				_id: new BSON.ObjectId(),
				date: new Date(),
				type,
				sets: [
					{ weight: 10, reps: 10, memo: "" },
					{ weight: 20, reps: 20, memo: "" },
					{ weight: 30, reps: 30, memo: "" },
				],
			});
		});
	}, [realm]);

	return (
		<>
			<ScrollView>
				<View style={styles.wrapper}>
					<List.Section>
						<List.Subheader style={styles.sectionHeader}>
							今日のトレーニング
						</List.Subheader>
						{Array.from({ length: 30 }).map((_, i) => (
							<View key={`key-${i}`}>
								<List.Item
									title="ベンチプレス"
									description="5セット"
									right={(props) => (
										<List.Icon {...props} icon="chevron-right" />
									)}
									titleStyle={{ fontWeight: "bold" }}
									style={styles.listItem}
									onPress={() => alert(`pressed ${i}`)}
								/>
								<Divider />
							</View>
						))}
					</List.Section>
				</View>
			</ScrollView>
			<FAB
				icon="plus"
				style={styles.addButton}
				onPress={() => alert("onPress")}
			/>
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
