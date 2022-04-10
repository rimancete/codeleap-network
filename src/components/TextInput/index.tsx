import { TextInputContent, Input, TextInputLabel } from './styles';

type TextInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function TextInput({ label, value, onChange, ...rest }: TextInputProps) {
  return (
    <TextInputContent>
      <TextInputLabel>{label}</TextInputLabel>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        autoCapitalize="none"
        {...rest}
      />
    </TextInputContent>
  );
}
