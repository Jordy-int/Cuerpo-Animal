import logo from './logo.svg';
import './App.css';

import bovino from './Assets/Bovino.jpg'
import canino from './Assets/Canino.jpg'
import Style from './CSS/Main.module.css'

function App() {
  return (
    <>

      <header>
        <h1 className='text-center' >Enciclopedia Animal</h1>
      </header>
      <h2 className='text-center' >Anatomía Disponible</h2>

      <main className='d-flex justify-content-evenly' >

        <figure className='figure text-center rounded p-6'>
          <img className='figure-img img-fluid rounded p-6' src={bovino} alt='Imagen de animal' />
          <figcaption className='figure-caption fs-3' >Bovino</figcaption>
        </figure>

        <figure className='figure text-center rounded p-6 '>
          <img className='figure-img img-fluid rounded p-6 ' src={canino} alt='Imagen de animal' />
          <figcaption className='figure-caption fs-3' >Canino</figcaption>
        </figure>



      </main>

      <footer>
        <h4>Derechos reservados a ...</h4>
      </footer>

    </>

  );
}

export default App;
