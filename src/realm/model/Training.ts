import { BSON, type ObjectSchema } from "realm";
import Realm from "realm";
import { TrainingType } from "./TrainingType";

export class Training extends Realm.Object {
	_id!: BSON.ObjectId;
	createdAt!: Date;
	type!: TrainingType;
	sets!: TrainingSet[];

	static schema: ObjectSchema = {
		name: "Training",
		properties: {
			_id: { type: "objectId", default: () => new BSON.ObjectId() },
			createdAt: {
				type: "date",
				default: new Date(),
			},
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
