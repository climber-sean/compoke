import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    from { background: #eee;}
    to { background: #e74c3c; }
`

const shake = keyframes`
    0 { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-10px, 0) rotate(-20deg); }
    30% { transform: translate(10px, 0) rotate(20deg); }
    50% { transform: translate(-10px, 0) rotate(-10deg); }
    60% { transform: translate(10px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
`

export const Pokeball = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    background: transparent;
    border: 10px solid #000;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset -10px 10px 0 5px #ccc;
    animation: ${shake} 1.25s cubic-bezier(.36,.07,.19,.97) infinite;

    &::before,
    &::after {
        content:"";
        position: absolute;
    }

    &::before {
        background: #FF0000;
        width: 100%;
        height: 50%;
        z-index: -4;
    }

    &::after {
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 10px;
        background: #000;
    }
`
export const PokeballButton = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: #7f8c8d;
    border: 3px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 10px black;
    animation: ${blink} .5s alternate infinite;
`

export const PokeballContainer = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

