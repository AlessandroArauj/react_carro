import './App.scss';

function App() {
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
              <h1>Novo Cliente</h1>

              <div className='input'>
                <h1>NOME</h1>
                <input type='text' />
              </div>

              <div className='input'>
                <h1>EMAIL</h1>
                <input type='text' />
              </div>

              <div className='input'>
                <h1>TELEFONE</h1>
                <input type='text' />
              </div>

              <div className='input'>
                <h1>CPF</h1>
                <input type='text' />
              </div>

              <div className='input'>
                <h1>CNH</h1>
                <input type='text' />
              </div>


              <button> Salvar </button>
            </div>


            <div className='cubo'>
              <h1>Lista de Clientes</h1>
              <div className='input2'>
                <div>
                  <h1>Nome</h1>
                  <input type='text' />
                </div>

                <img src='../assets/img/busca.svg' />

              </div>

            </div>



          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
