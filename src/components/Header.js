import styled from 'styled-components';

const HeaderText = styled.h1`
    font-size:72px;
    font-family: 'Arial';
    color: white;
    margin: 0;
    text-align: center;
`

const HeaderContainer = styled.div`
    background: #FF0000;
    padding: 20px 0;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <HeaderText>ComPoke</HeaderText>
        </HeaderContainer>
    )
};

export default Header;