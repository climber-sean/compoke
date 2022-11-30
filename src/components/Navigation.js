import NavButton from './NavButton';
import { StyledNav, StyledNavHeading } from './styled/Navigation.styled';

const Navigation = (props) => {
    return (
        <StyledNav>
            <StyledNavHeading>Select game generation</StyledNavHeading>
            {
                props.data.results.map(result => (<NavButton click={props.click} key={result.name} data={result} />))
            }
        </StyledNav>
    )
}

export default Navigation;