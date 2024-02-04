import { BSON, type ObjectSchema } from "realm";
import Realm from "realm";
import { TrainingType } from "./TrainingType";

export class Training extends Realm.Object {
	_id!: BSON.ObjectId;
	date!: Date;
	type!: TrainingType;
	sets!: TrainingSet[];

	static schema: ObjectSchema = {
		name: "Training",
		properties: {
			_id: "objectId",
			date: "date",
			type: "TrainingType",
			sets: "TrainingSet[]",
		},
		primaryKey: "_id",
	};
}

export class TrainingSet extends Realm.Object {
	weight!: number;
	reps!: number;
	memo!: string;

	static schema: ObjectSchema = {
		name: "TrainingSet",
		embedded: true,
		properties: {
			weight: "float",
			reps: "int",
			memo: "string",
		},
	};
}
