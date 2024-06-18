import { createRealmContext } from "@realm/react";
import Realm from "realm";
import { schema } from "./model";

const config: Realm.Configuration = {
	schema,
	schemaVersion: 3,
};

export const { RealmProvider, useQuery, useRealm, useObject } =
	createRealmContext(config);
