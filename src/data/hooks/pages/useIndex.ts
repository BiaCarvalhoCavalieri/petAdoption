import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from '../../services/ApiService';
import { AxiosError } from "axios";

export function useIndex(){
    const [listaPets, setListaPets] = useState<Pet[]> ([]), 
      [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
      [email, setEmail] = useState(''),
      [valor, setValor] = useState(''),
      [mensagem, setMensagem] = useState('');

    useEffect(() => {
      ApiService.get('/pets')
        .then((resposta)=> {
          setListaPets(resposta.data);
          console.log(resposta);
        })
    }, [])

    useEffect(() => {
      if(petSelecionado === null){
        limparFormulario();
      }
    }, [petSelecionado])

    function adotar(){
      if(petSelecionado !== null){
        if(validarDadosAdocao()){
          ApiService.post ('/adocoes', {
            pet_id: petSelecionado.id,
            email: email,
            valor: valor
          })
          .then(()=>{
            setPetSelecionado(null)
            setMensagem('Seu pedido de adoção foi realizado com sucesso!')
          })
          .catch((error: AxiosError)=>{
            setMensagem (error.response?.data.message);
          })
        } else {
          setMensagem('Preencha todos os campos corretamente!')
        }

      }

    }
    function validarDadosAdocao(){
      return email.length> 0 && valor.length > 0;

    }
    function limparFormulario(){
      setEmail('');
      setValor('');
    }

    return { 
      listaPets,
      petSelecionado, 
      setPetSelecionado,
      email,
      setEmail,
      valor,
      setValor,
      mensagem, 
      setMensagem,
      adotar
    };
}


