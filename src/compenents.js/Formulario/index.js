import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    /*constantes dos valores que serão usados*/
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoEnviar = (evento) => {
        evento.preventDefault()/*preventDefault impede o evento
                                padrão do botão, que seria o de 
                                apenas dar "F5" na página*/
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
            /*passando dados ao App.js através do objeto com os
            valores respectivos*/
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        alert("Cadastrado")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoEnviar} /*função adicionado para envio do formulario*/>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true} /*tornando verdadeiramente obrigatorio*/
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome} /*definindo o valor*/
                    aoAlterar={valor => setNome(valor)}/*"settando" o valor*/
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto
                    /*não colocado o "obrigatario", pois não é, o usuário pode não ter uma foto*/
                    label="Imagem"
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times} /*itens definidos dentro da Lista*/
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario