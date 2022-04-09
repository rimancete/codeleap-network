import { ButtonContent, CustomButton } from './styles';

type ButtonProps = React.ComponentProps<typeof CustomButton> & {
  inputValue?: boolean;
  label: string;
  isWhite: boolean;
  onClick?: () => void;
};

export function Button({ inputValue, label, isWhite, onClick }: ButtonProps) {
  return (
    <ButtonContent>
      <CustomButton
        type="submit"
        disabled={!inputValue && true}
        isWhite={isWhite}
        onClick={onClick}
      >
        {label}
      </CustomButton>
    </ButtonContent>
  );
}
