import { styled } from '@mui/material';

// const paddingSize = '48px';

export const HeaderContainer = styled('header')`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    /* padding: Cifrão{paddingSize}; */
    padding: ${({theme}) => theme.spacing(6)}
`;
export const Logo = styled('img') `
    width: 230px;
`;
export const Menu = styled('div') `
    display: flex;
    max-height: 20em;
    gap: ${({theme}) => theme.spacing(2)};
    color: red;
    font-size: 20px;
`