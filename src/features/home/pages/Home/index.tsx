import { Training } from "@/realm/model/Training";
import { useQuery, useRealm } from "@realm/react";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Divider, FAB, List, useTheme } from "react-native-paper";
import { BSON } from "realm";

export const Home: React.FC = () => {
	const styles = useStyle();

	const realm = useRealm();

	const addProfile = () => {
		realm.write(() => {
			realm.create(Training, {
				_id: new BSON.ObjectId(),
				name: "ベンチプレス",
			});
		});
	};

	const profiles = useQuery(Training);

	useEffect(() => {
		alert(JSON.stringify(profiles));
	}, [profiles]);

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
			<FAB icon="plus" style={styles.addButton} onPress={addProfile} />
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
