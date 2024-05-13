import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    console.log(props.colaboradores)
    const cores = { backgroundColor: props.corSecundaria } /*metodo utilizado para podermos definir cada
                                                           cor de fundo de uma maneira, utilizando um obejto
                                                           javascript, como o "-" é um sinal de menos no js,
                                                           utilizamos tudo junto com letra maiúscula*/

    return (
        /*escondendo os time vazios e exibindo somente os que tem algum cadastro*/
        /* também pode ser feito com "?" que seria acampanhado do :'', funcionando como if/else*/
        (props.colaboradores.length > 0) && <section className='time' style={cores}>
            <h3 style={{ borderColor: props.corPrimaria }} /*definindo as cores utilizando o style*/>
                {props.nome /*exportando o nome do time que será recebido em App.js*/}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.corPrimaria}
                    />/*mapeando a lista de colaboradores para puxar da função
                   Colaboradores e enviar ao App.js*/ )}
            </div>
        </section>
    )
}

export default Time