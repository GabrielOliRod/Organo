import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>
                {props.label/*Nome da label definida no Formulario*/}
            </label>
            <select
                
                onChange={evento => props.aoAlterar(evento.target.value)} /*ao alterar salva o valor*/
                required={props.obrigatorio} /*torna o campo obritgatorio*/
                value={props.valor} /*define o valor do select*/
            >
                {props.itens.map/*mapeando os itens definidos*/(item => <option key={item}/*cada item necessita de uma chave própria,
                                                                                            inserido o próprio nome do item como chave,
                                                                                            nome dos itens pode ser visto no Formulario/index.js*/>
                    {item}
                </option>)
                }
            </select>
        </div>
    )
}

export default ListaSuspensa