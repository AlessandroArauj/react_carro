import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

function App() {
  const [tipos, setTipos] = useState([]);

  const [tipoSelecionado, setSelecionado] = useState(0);
  const [modelos, setModelos] = useState('');
  const [marca, setMarca] = useState('');
  const [placa, setPlaca] = useState('');
  const [ano, setAno] = useState('');
  const [id, setId] = useState(0);

  const [erro, setErro] = useState('');


  async function removerVeiculo(id) {
    let r = await axios.delete('http://localhost:5000/veiculo' + id)
    alert('veiculo foi excluido')

    buscarVeiculos()
  }

  function alterVeiculo(item) {
    setModelos(item.modelos);
    setPlaca(item.placa);
    setAno(item.ano);
    setMarca(item.marca);
    setSelecionado(item.idTipoSelecionado);
    setId(item.id)

  }

  async function listarTipos() {
    let r = await axios.get('http://localhost:5000/veiculo/tipo');
    setTipos(r.data);

  }

  async function Salvar() {
    try {
      let Veiculos = {
        idTipoSelecionado: setSelecionado,
        modelos: setModelos,
        placa: setPlaca,
        ano: setAno,
        marca: setMarca

      }

      if (id == 0) {
        let r = await axios.post('http://localhost:5000/veiculo', Veiculos)
        alert('veiculo cadastrado')
      }

      else {
        let r = await axios.put('http://localhost:5000/veiculo', Veiculos)
        alert('Veiculo foi altearado')
      }

      buscarVeiculos()

      setModelos('');
      setPlaca('');
      setAno('');
      setMarca('');
      setSelecionado(0);
      setId(0)

    } catch (err) {
      setErro(err.response.data.erro)
    }
  }

  async function buscarVeiculos() {
    let r = await axios.get('http://localhost:5000/veiculo?busca=' + busca);
    setListaVeiculos(r.data);
  }



  useEffect(() => {
    //
    listarTipos();
  }, [])




  return (
    <div className="App">
      <div className='pagina'>
        <section className='canto'>

          <img src='../assets/img/logo.svg' />
          <h1></h1>


          <div className='pages'>

            <div>
              <img src='../assets/img/home.svg' />
              <h1> HOME</h1>
            </div>

            <div>
              <img src='../assets/img/Vector.svg' />
              <h1> CLIENTE</h1>
            </div>

            <div>
              <img src='../assets/img/car.svg' />
              <h1>VEICULOS</h1>
            </div>

            <div>
              <img src='../assets/img/key.svg' />
              <h1>LOCAÇÂO</h1>
            </div>

          </div>
        </section>

        <section className=' conteudo'>

          <header className='cabe'>
            <h1>
              Olá, que bom voce voltou!!
            </h1>
            <img src='' />
          </header>

          <section className='baixo'>

            <p>ÁREA ADMNISTRATIVA</p>
            <h1>Controle de Clientes</h1>


            <div className='cubo'>
              <h1>Novo Veiculo</h1>

              <div className='input'>
                <h1>Tipo</h1>
                <select id='veiculo' name='veiculo' value={tipoSelecionado} onChange={e => setSelecionado(e.target.value)}>
                  <option value={0}> Selecione </option>
                  {tipos.map(item =>

                    <option value={item.id}> {item.tipo} </option>
                  )}
                </select>
              </div>

              <div className='input'>
                <h1>Modelo</h1>
                <input type='text' value={modelos} onChange={e => setModelos(e.target.value)} />
              </div>

              <div className='input'>
                <h1>Marca</h1>
                <input type='text' value={marca} onChange={e => setMarca(e.target.value)} />
              </div>

              <div className='input'>
                <h1>Ano</h1>
                <input type='text' value={ano} onChange={e => setAno(e.target.value)} />
              </div>

              <div className='input'>
                <h1>Placa</h1>
                <input type='text' value={placa} onChange={e => setPlaca(e.target.value)} />
              </div>


              <button onClick={Salvar}>
                {id == 0 ? 'Salvar' : 'Alterar'}
              </button>
            </div>


            <div className='cubo'>
              <h1>Lista de Veiculos</h1>
              <div className='input2'>
                <div>
                  <h1>Modelo, Marca, Placa</h1>
                  <input type='text' value={busca} onChange={e => setBusca(e.target.value)} />
                </div>

                <img src='../assets/img/busca.svg' onClick={buscarVeiculos} />

              </div>

<table>
              <colgroup>
                <col style={{ width: 30 + '%' }} />
                <col style={{ width: 15 + '%' }} />
                <col style={{ width: 12 + '%' }} />
                <col style={{ width: 12 + '%' }} />
                <col style={{ width: 20 + '%' }} />
              </colgroup>
              <thead>
                <tr>

                  <th>Modelo</th>
                  <th>Marca</th>
                  <th>Ano</th>
                  <th>Tipo</th>
                  <th>placa</th>
                </tr>
              </thead>
              <tbody>
                {listaVeiculos.map(item =>
                  <tr>
                    <td>{item.modelo}</td>
                    <td>{item.marca}</td>
                    <td>{item.ano}</td>
                    <td>{item.tipo}</td>
                    <td>{item.placa}</td>
                    <td className='btns' style={{ display: 'flex', height: 20 }}>
                      <i class="fa-regular fa-pen-to-square" onClick={() => alterVeiculo(item)}></i>
                      <i class="fa-solid fa-delete-left" onClick={() => removerVeiculo(item.id)}></i>
                    </td>
                  </tr>  
                )}
                
              </tbody>
            </table>

            </div>



          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
