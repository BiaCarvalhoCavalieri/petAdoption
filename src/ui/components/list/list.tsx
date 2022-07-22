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
                    <Image src={pet.image} alt={pet.name}/>
                    <InfoBlock>
                        <Name>{pet.name}</Name>
                        <History>{TextService.textRestriction(pet.history, textMaxSize)}</History>
                        <Button 
                            variant={'contained'}
                            fullWidth
                            onClick={() => props.onSelect(pet)}
                        >
                            Adotar {pet.name}
                        </Button>
                    </InfoBlock>
                </ListItem>
            ))}
        </ListStyled>
    )
}

