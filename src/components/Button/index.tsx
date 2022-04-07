import { ButtonContent, CustomButton } from './styles';

type ButtonProps = React.ComponentProps<typeof CustomButton> & {
  inputValue?: boolean;
  label: string;
  isWhite: boolean;
};

export function Button({ inputValue, label, isWhite }: ButtonProps) {
  return (
    <ButtonContent>
      <CustomButton
        type="submit"
        disabled={!inputValue && true}
        isWhite={isWhite}
      >
        {label}
      </CustomButton>
    </ButtonContent>
  );
}
