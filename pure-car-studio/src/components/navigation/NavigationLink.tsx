import { NavigationLinkProps } from "./Navigation.types";
import { ButtonWrapper, StyledButton } from "./NavigationLink.styles";

export const NavigationLink = ({ name }: NavigationLinkProps) => {
  return (
    <ButtonWrapper>
      <StyledButton>{name}</StyledButton>
    </ButtonWrapper>
  );
};
