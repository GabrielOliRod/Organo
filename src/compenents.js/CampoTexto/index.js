import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value) /*guarda o valor definido, verificar em Formulario/index.js quando é chamado*/
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label/*props que vai ser definido no Formulario/index.js com o nome da label*/}
            </label>
            <input
                value={props.valor} /*valor inserido dentro da caixa de resposta definido no Formulario/index.js*/
                onChange={aoDigitar} /*chama a Arrow Function para realizar a ação descrita na linha 6*/
                required={props.obrigatorio} /*verificação de obrigatoriedade do campo*/
                placeholder={`${props.placeholder}...`} /*colocar reticências após toda escrita do placeholder*/
            />
        </div>
    )

}

export default CampoTexto