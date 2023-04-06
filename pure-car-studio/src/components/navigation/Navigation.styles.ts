import styled from "styled-components";

import {ReactComponent as PureCarLogo} from "../../assets/pure-car-logo.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  margin: 0 0 10px;
  padding: 0 40px;
  align-items: center;
  border-bottom: 1px solid #ababab;
`;

export const StyledPureCarLogo = styled(PureCarLogo)`
  width: 280px;
  height: 90px;
`

export const LogoLink = styled.a`
  text-decoration: none;
  width: 280px;
  height: 90px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;