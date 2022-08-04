import { Button } from '@mui/material'
import {
    ListStyled,
    ListItem,
    Image, 
    InfoBlock,
    Name,
    History
} from './list.style';
import { Pet } from '../../../data/@types/Pet';

interface ListProps{
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}
import { TextService } from '../../../data/services/textService';



export default function List(props: ListProps){
    const textMaxSize = 200;
    return (
        <ListStyled>
            {props.pets.map(pet => (
                <ListItem key={pet.id}>
                    <Image src={pet.foto} alt={pet.foto}/>
                    <InfoBlock>
                        <Name>{pet.nome}</Name>
                        <History>{TextService.textRestriction(pet.historia, textMaxSize)}</History>
                        <Button 
                            variant={'contained'}
                            fullWidth
                            onClick={() => props.onSelect(pet)}
                        >
                            Adotar {pet.nome}
                        </Button>
                    </InfoBlock>
                </ListItem>
            ))}
        </ListStyled>
    )
}

