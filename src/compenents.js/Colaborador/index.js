import './Colaborador.css'

const Colaborador = (props) => {/*outro jeito de ser feito é utilizar ao invés de
                                 props, passar os valor diretamente, no caso seria
                                 consta Colaborador = (nome, cargo, imagem) =>{}*/
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>

                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
