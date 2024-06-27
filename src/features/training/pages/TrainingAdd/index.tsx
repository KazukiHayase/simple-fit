import { TrainingPart, TrainingPartList } from "@/consts/TrainingPart";
import { useQuery, useRealm } from "@/realm";
import { Training } from "@/realm/model/Training";
import { TrainingType } from "@/realm/model/TrainingType";
import {
	Box,
	Button,
	ButtonGroup,
	ButtonText,
	FlatList,
	HStack,
	Text,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
// import { Chip, Divider, List, Text } from "react-native-paper";

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

			router.push({
				pathname: "/training/[id]",
				params: { id: training._id.toString() },
			});
		});
	};

	return (
		<Box h="$full" bg="$white">
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
				data={trainingTypes}
				keyExtractor={(item) => (item as TrainingType)._id.toString()}
				renderItem={({ item }) => {
					const trainingType = item as TrainingType;
					return (
						<Box py="$2" borderTopWidth="$1" borderColor="$borderLight100">
							<View key={trainingType._id.toString()}>
								<Text onPress={() => handleClickTrainingType(trainingType)}>
									{trainingType.name}
								</Text>
							</View>
							{/* <HStack */}
							{/* 	space="md" */}
							{/* 	justifyContent="space-between" */}
							{/* 	alignItems="center" */}
							{/* > */}
							{/* 	<VStack> */}
							{/* 		<Text color="$coolGray800" fontWeight="$medium"> */}
							{/* 			{training.type.name} */}
							{/* 		</Text> */}
							{/* 		<Text size="sm" color="$textLight500"> */}
							{/* 			{`${training.sets.length}セット`} */}
							{/* 		</Text> */}
							{/* 	</VStack> */}
							{/* 	<Icon as={ChevronRightIcon} size="md" color="$textLight500" /> */}
							{/* </HStack> */}
						</Box>
					);
				}}
				ListEmptyComponent={() => <Text>トレーニングがありません</Text>}
			/>
		</Box>
	);
};
