import { useCallback } from "react";
import {
	FieldPathByValue,
	FieldValues,
	UseControllerProps,
	useController,
} from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";
import { nullable, number, parse } from "valibot";

const numberInputSchema = nullable(number());

type NumberInputProps<TFieldValues extends FieldValues> = UseControllerProps<
	TFieldValues,
	FieldPathByValue<TFieldValues, number | null>
> & TextInputProps;

export const NumberInput = <TFieldValues extends FieldValues>(
  {
    style,
    ...controlProps
  }: NumberInputProps<TFieldValues>,
) => {
	const { field } = useController(controlProps);

	const handleChange = useCallback<NonNullable<TextInputProps["onChange"]>>(
		(e) => {
			const value = parse(numberInputSchema, e.nativeEvent.text);
			field.onChange(value);
		},
		[field],
	);

	return (
		<TextInput
			keyboardType="numeric"
			mode="outlined"
			value={field.value ? `${field.value}` : ""}
			onChange={handleChange}
      style={style}
		/>
	);
};
