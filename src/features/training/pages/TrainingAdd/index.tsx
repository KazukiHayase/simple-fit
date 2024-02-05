import { TrainingPart, TrainingPartList } from "@/consts/TrainingPart";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Chip } from "react-native-paper";

export const TrainingAdd: React.FC = () => {
	const [selected, setSelected] = useState<TrainingPart | "NONE">("NONE");

	const handlePressPart = (part: TrainingPart) => {
		const newSelected = selected === part ? "NONE" : part;
		setSelected(newSelected);
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
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 16,
	},
	chipWrapper: {
		display: "flex",
		flexDirection: "row",
		gap: 4,
		flexWrap: "wrap",
	},
	chip: {
		backgroundColor: "transparent",
	},
	chipSelected: {
		backgroundColor: "rgba(0, 0, 0, 0.1)",
	},
});
