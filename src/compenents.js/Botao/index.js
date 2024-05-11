import './Botao.css'

const Botao = (props) => {

    return (
        <button className="botao">
            {props.children /* feita para chamar os elementos filhos do objeto
            pode ser feito direto com texto e declarado, porém para colocar imagem
            seria somente dessa maneira(olhar como está no Formulario/index.js) */}
        </button>
    )

}

export default Botao
