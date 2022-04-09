import { TextAreaContent, TextAreaLabel, TextAreaText } from './styled';

type TextareaProps = React.ComponentProps<typeof TextAreaText> & {
  label: string;
  value: string;
  onChange: (e: React.FormEvent) => void;
};

export function Textarea({ label, value, onChange }: TextareaProps) {
  return (
    <TextAreaContent>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextAreaText rows={2} value={value} onChange={onChange} />
    </TextAreaContent>
  );
}
