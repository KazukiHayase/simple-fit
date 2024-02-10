import { useObject, useRealm } from "@/realm";
import { SETTING_ID, Setting } from "@/realm/model/Setting";
import { TrainingType } from "@/realm/model/TrainingType";
import { useEffect } from "react";
import { TrainingTypeSeed } from "./TrainingType";
import { SEED_VERSION } from "./version";

export const useSeed = () => {
	const realm = useRealm();
	const setting = useObject(Setting, SETTING_ID);

	// biome-ignore lint/correctness/useExhaustiveDependencies: 初回だけ実行するため
	useEffect(() => {
		// settingがない場合（初回）はseedを投入して、settingを作成する
		// settingがある場合はseedVersionを確認して、違う場合はseedを投入する
		if (!setting) {
			realm.write(() => {
				for (const seed of TrainingTypeSeed) {
					realm.create(TrainingType, seed, Realm.UpdateMode.Modified);
				}
				realm.create(Setting, { _id: SETTING_ID, seedVersion: SEED_VERSION });
			});
		} else if (setting.seedVersion !== SEED_VERSION) {
			realm.write(() => {
				for (const seed of TrainingTypeSeed) {
					realm.create(TrainingType, seed, Realm.UpdateMode.Modified);
				}
				setting.seedVersion = SEED_VERSION;
			});
		}
	}, []);
};
