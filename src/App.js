import { useState } from 'react';
import Banner from './compenents.js/Banner';
import Formulario from './compenents.js/Formulario';
import Time from './compenents.js/Time';
import Rodape from './compenents.js/Rodape';

function App() {

  /*definindo uma tabela com nome e cores primarias/secundarias
  deste modo não será necessários utilizarmos de duas tabelas para atualizarmos
  sempre*/
  const times = [
    {
      nome: ''
    },
    {
      nome: 'Time 1',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Time 2',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Time 3',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Time 4',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Time 5',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9FS'
    },
    {
      nome: 'Time 6',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Time 7',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]) /*Array criada pra poder salvar os dados dos colaboradores*/

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]) /*salvando os colaboradores antigos e colocando o mais novo por último*/
  }

  return (
    <div className="App" style={{
      backgroundImage:"url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSm4HdzRGnU3pLkSE6igvVpUv8Exnj26qqkwzT5gD-zBsqbGH9G')",
      backgroundSize: "10%"
      }}>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)} /*transformando o objeto e trazendo somente o nome dos times*/
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(/*map é como se fosse o for each
                mas o motivo do uso do map é devido
                a ele retornar algo, diferente do for each, 
                aqui mapeamos ele para executar o seguinte:*/
        (time => <Time
          key={time.nome} /*definindo a key para referencia de cada time*/
          nome={time.nome}/*aqui para cada item "Time" irá criar
                          um componente para cada com o nome
                          definido lá na nossa const time line 8*/
          corPrimaria={time.corPrimaria}/*definindo a cor primaria de cada*/
          corSecundaria={time.corSecundaria}/*definindo a cor primaria de cada*/
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} /*filtrando colaborador por nome do time*/
        />)
      )}
      
      <Rodape  />
    </div>
  );
}

export default App;
