import { useQuery } from "@/realm";
import { Training } from "@/realm/model/Training";
import {
	AddIcon,
	Box,
	ChevronRightIcon,
	Fab,
	FabIcon,
	FlatList,
	HStack,
	Heading,
	Icon,
	SafeAreaView,
	Text,
	VStack,
} from "@gluestack-ui/themed";
import dayjs from "dayjs";
import { Link } from "expo-router";

export const Home: React.FC = () => {
	const trainings = useQuery(Training, (trainings) => {
		const today = dayjs().locale("ja").toDate();
		today.setHours(0, 0, 0, 0);
		return trainings.filtered("createdAt >= $0", today);
	});

	return (
		<SafeAreaView h="$full" pb="$0" bg="$white">
			<Box h="$full" py="$2">
				<FlatList
					px="$4"
					data={trainings}
					// See: https://github.com/gluestack/gluestack-ui/issues/1041
					keyExtractor={(training) => (training as Training)._id.toString()}
					ListHeaderComponent={() => (
						<Heading size="xl" bold mb="$4">
							今日のトレーニング
						</Heading>
					)}
					renderItem={({ item }) => {
						const training = item as Training;
						return (
							<Box
								py="$2"
								px="$1"
								borderTopWidth="$1"
								borderColor="$borderLight100"
							>
								<HStack
									space="md"
									justifyContent="space-between"
									alignItems="center"
								>
									<VStack>
										<Text color="$coolGray800" fontWeight="$medium">
											{training.type.name}
										</Text>
										<Text size="sm" color="$textLight500">
											{`${training.sets.length}セット`}
										</Text>
									</VStack>
									<Icon as={ChevronRightIcon} size="md" color="$textLight500" />
								</HStack>
							</Box>
						);
					}}
				/>
			</Box>
			<Link href="/tabs/home/modal" asChild>
				<Fab size="lg" bg="$warmGray900">
					<FabIcon as={AddIcon} size="xl" />
				</Fab>
			</Link>
		</SafeAreaView>
	);
};
