import { useState } from "react";
import { Pet } from "../../@types/Pet";

export function useIndex(){
    const [listaPets, setListaPets] = useState (
      [
        {
          id: 1,
          name: 'Babi',
          history: 'Nascida e criada na pequena cidade de Bauru. Atualmente tem 18 anos e meio e vive muito bem',
          image: 'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_960_720.jpg'
        },
        {
          id: 2,
          name: 'Jojo',
          history: 'Nenê com muita energia, precisa urgente de adoção, se puder mande mensagem e entre em contato conosco',
          image: 'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047522_960_720.jpg'
        },
      ]
    ), 
      [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
      [email, setEmail] = useState(''),
      [valor, setValor] = useState(''),
      [mensagem, setMensagem] = useState('');

    return { 
      listaPets,
      petSelecionado, 
      setPetSelecionado,
      email,
      setEmail,
      valor,
      setValor,
      mensagem, 
      setMensagem
    };
}


