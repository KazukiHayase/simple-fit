import { TrainingPart, TrainingPartList } from "@/consts/TrainingPart";
import { useQuery, useRealm } from "@/realm";
import { Training } from "@/realm/model/Training";
import { TrainingType } from "@/realm/model/TrainingType";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Chip, Divider, List, Text } from "react-native-paper";

export const TrainingAdd: React.FC = () => {
	const [selected, setSelected] = useState<TrainingPart | "NONE">("NONE");

	const router = useRouter();

	const realm = useRealm();
	const trainingTypes = useQuery(
		TrainingType,
		(types) => {
			return selected !== "NONE"
				? types.filtered("part == $0", selected)
				: types;
		},
		[selected],
	);

	const handlePressPart = (part: TrainingPart) => {
		const newSelected = selected === part ? "NONE" : part;
		setSelected(newSelected);
	};

	const handleClickTrainingType = (type: TrainingType) => {
		realm.write(() => {
			const training = realm.create(Training, {
				type,
				sets: [],
			});

			// pushでモーダルが閉じないので、一旦戻ってから遷移する
			// https://github.com/expo/expo/issues/26922
			router.back();
			setTimeout(() => {
				router.push({
					pathname: "/training/[id]",
					params: { id: training._id.toString() },
				});
			}, 100);
		});
	};

	return (
		<ScrollView>
			<View style={styles.wrapper}>
				<View style={styles.chipWrapper}>
					{TrainingPartList.map((part) => (
						<Chip
							key={part}
							mode="outlined"
							style={selected === part ? styles.chipSelected : styles.chip}
							selected={selected === part}
							showSelectedCheck={false}
							showSelectedOverlay
							onPress={() => handlePressPart(part)}
						>
							{TrainingPart[part]}
						</Chip>
					))}
				</View>
				{trainingTypes.length > 0 ? (
					trainingTypes.map((type) => (
						<View key={type._id.toString()}>
							<List.Item
								title={type.name}
								onPress={() => handleClickTrainingType(type)}
							/>
							<Divider />
						</View>
					))
				) : (
					<View style={styles.noneWrapper}>
						<Text variant="titleMedium" style={styles.noneText}>
							トレーニングがありません
						</Text>
					</View>
				)}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		display: "flex",
		flexDirection: "column",
		padding: 16,
	},
	chipWrapper: {
		display: "flex",
		flexDirection: "row",
		gap: 4,
		flexWrap: "wrap",
		marginBottom: 8,
	},
	chip: {
		backgroundColor: "transparent",
	},
	chipSelected: {
		backgroundColor: "rgba(0, 0, 0, 0.1)",
	},
	noneWrapper: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	noneText: {
		textAlign: "center",
	},
});
