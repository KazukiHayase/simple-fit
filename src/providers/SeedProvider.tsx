import { useSeed } from "@/seed";
import { PropsWithChildren } from "react";

type SeedProviderProps = PropsWithChildren;

export const SeedProvider: React.FC<SeedProviderProps> = ({ children }) => {
	useSeed();

	return children;
};
