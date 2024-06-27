import { TrainingPart, TrainingPartList } from "@/consts/TrainingPart";
import { useQuery, useRealm } from "@/realm";
import { Training } from "@/realm/model/Training";
import { TrainingType } from "@/realm/model/TrainingType";
import {
	Button,
	ButtonGroup,
	ButtonText,
	Center,
	FlatList,
	Pressable,
	SafeAreaView,
	Text,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

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

			router.back();
			router.push({
				pathname: "/training/[id]",
				params: { id: training._id.toString() },
			});
		});
	};

	return (
		<SafeAreaView h="$full" bg="$white">
			<ButtonGroup space="sm" flexWrap="wrap" p="$2">
				{TrainingPartList.map((part) => (
					<Button
						key={part}
						size="sm"
						variant="outline"
						{...(selected === part
							? {
									bg: "$warmGray900",
									borderColor: "$transparent",
							  }
							: {
									bg: "$white",
									borderColor: "$warmGray900",
							  })}
						onPress={() => handlePressPart(part)}
					>
						<ButtonText
							{...(selected === part
								? { color: "$white" }
								: { color: "$warmGray900" })}
						>
							{TrainingPart[part]}
						</ButtonText>
					</Button>
				))}
			</ButtonGroup>
			<FlatList
				px="$2"
				data={trainingTypes}
				keyExtractor={(item) => (item as TrainingType)._id.toString()}
				renderItem={({ item }) => {
					const trainingType = item as TrainingType;
					return (
						<Pressable
							px="$1"
							py="$3"
							borderBottomWidth="$1"
							borderColor="$borderLight100"
							onPress={() => handleClickTrainingType(trainingType)}
						>
							<View key={trainingType._id.toString()}>
								<Text color="$coolGray800">{trainingType.name}</Text>
							</View>
						</Pressable>
					);
				}}
				ListEmptyComponent={() => (
					<Center py="$5">
						<Text>トレーニングがありません</Text>
					</Center>
				)}
			/>
		</SafeAreaView>
	);
};
