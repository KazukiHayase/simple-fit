import { useObject } from "@/realm";
import { Training } from "@/realm/model/Training";
import { Text } from "react-native-paper";
import { BSON } from "realm";

type TrainingEditProps = {
	id: BSON.ObjectId;
};

export const TrainingEdit: React.FC<TrainingEditProps> = ({ id }) => {
	const training = useObject(Training, id);

	if (!training) return null;
	return (
		<>
			<Text>{training.type.name}</Text>
		</>
	);
};
