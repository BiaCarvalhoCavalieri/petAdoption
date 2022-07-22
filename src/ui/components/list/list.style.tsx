// 16px = 1 rem

import { styled } from '@mui/material';

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2)}
    
`;

export const ListItem = styled('li')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({theme}) => theme.spacing(10)};
    ${({ theme }) => theme.breakpoints.down('md') } {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const Image = styled('img')`
    width: 100%;
    max-width: 20em;
    max-height: 20em;
`;

export const InfoBlock = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 20em;
    gap: ${({theme}) => theme.spacing(2)};
`;

export const Name = styled('h2')`
    margin: 0;
`;

export const History = styled ('p')`
    margin: 0;
    word-break: break-word;
`;