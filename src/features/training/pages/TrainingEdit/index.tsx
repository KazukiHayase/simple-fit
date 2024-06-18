import { NumberInput } from "@/components/Form/NumberInput";
import { useObject } from "@/realm";
import { Training } from "@/realm/model/Training";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useCallback } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";
import { Divider, IconButton, Text, TextInput } from "react-native-paper";
import { BSON } from "realm";
import { Output, array, number, object, string } from "valibot";

const TrainingEditFormSchema = object({
	sets: array(
		object({
			weight: number(),
			reps: number(),
			memo: string(),
		}),
	),
});

type TrainingEditForm = Output<typeof TrainingEditFormSchema>;

type TrainingEditProps = {
	id: BSON.ObjectId;
};

export const TrainingEdit: React.FC<TrainingEditProps> = ({ id }) => {
	const training = useObject(Training, id);

	const { control, getValues } = useForm<TrainingEditForm>({
		defaultValues: {
			sets: [
				{ weight: 0, reps: 0, memo: "" },
				{ weight: 0, reps: 0, memo: "" },
			],
		},
		resolver: valibotResolver(TrainingEditFormSchema),
	});
	const { fields, append } = useFieldArray({ control, name: "sets" });

	const handleClickAdd = useCallback(() => {
		append({ weight: 0, reps: 0, memo: "" });
	}, [append]);

	const handleClickCopy = useCallback(() => {
		const sets = getValues("sets");
		const lastSet = sets[sets.length - 1];
		if (!lastSet) return;

		append(lastSet);
	}, [getValues, append]);

	if (!training) return null;
	return (
		<ScrollView>
			<View style={styles.wrapper}>
				<Text variant="titleLarge" style={styles.title}>
					{training.type.name}
				</Text>
				<Text variant="titleMedium">セット</Text>
				{fields.map((field, index) => (
					<View key={field.id}>
						<View key={field.id} style={styles.setItemWrapper}>
							<Text>{index + 1}. </Text>
							<View style={styles.setItemRow}>
								<Text>重量</Text>
								<NumberInput
									control={control}
									name={`sets.${index}.weight`}
									style={styles.setItemInput}
								/>
								<Text>kg</Text>
							</View>
							<Text>×</Text>
							<View style={styles.setItemRow}>
								<NumberInput
									control={control}
									name={`sets.${index}.reps`}
									style={styles.setItemInput}
								/>
								<Text>回</Text>
							</View>
						</View>
						<Divider />
					</View>
				))}
				<View style={styles.actionArea}>
					<IconButton icon="plus" mode="outlined" onPress={handleClickAdd} />
					<IconButton
						icon="content-copy"
						mode="outlined"
						onPress={handleClickCopy}
					/>
				</View>
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
	title: {
		marginBottom: 16,
		fontWeight: "bold",
	},
	setItemWrapper: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		paddingTop: 16,
		paddingBottom: 16,
	},
	setItemRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	setItemInput: {
		width: 60,
		height: 40,
	},
	actionArea: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 16,
	},
});
