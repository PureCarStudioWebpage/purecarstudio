import { menuCategories } from "../../data/data";
import {
  Wrapper,
  StyledPureCarLogo,
  LogoLink,
  MenuWrapper,
} from "./Navigation.styles";
import { NavigationLink } from "./NavigationLink";

export const Header = () => {
  return (
    <Wrapper>
      <LogoLink href={"www.cda.pl"}>
        <StyledPureCarLogo />
      </LogoLink>
      <MenuWrapper>
        {menuCategories.map((el) => (
          <NavigationLink key={el.id} name={el.name} />
        ))}
      </MenuWrapper>
    </Wrapper>
  );
};
