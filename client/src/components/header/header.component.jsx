import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const signOutUser = () => dispatch(signOutStart());

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">shop</OptionLink>
        <OptionLink to="/">contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutUser}>
            sign out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
