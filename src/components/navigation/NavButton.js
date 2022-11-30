import { StyledNavButton } from './styled/Navigation.styled';

const NavButton = (props) => {
    return (
        <StyledNavButton onClick={() => props.click(props.data.name)}>{props.data.name.replace(/-/g, ' ')}</StyledNavButton>
    )
};

export default NavButton;