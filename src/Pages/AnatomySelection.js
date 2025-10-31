function AnatomySelection() {
    return (
        <>

            <header>
                <h1 className='text-center' >Enciclopedia Animal</h1>
            </header>
            <h2 className='text-center' >Opciones Disponibles</h2>

            <main className='d-flex justify-content-evenly' >

                <figure className='figure text-center rounded p-6'>
                    <img className='figure-img img-fluid rounded p-6'  alt='Icono de anatomía' />
                    <figcaption className='figure-caption fs-3' >Osteología</figcaption>
                </figure>

                <figure className='figure text-center rounded p-6 '>
                    <img className='figure-img img-fluid rounded p-6 '  alt='Icono de anatomía' />
                    <figcaption className='figure-caption fs-3' >Músculos y ligamentos</figcaption>
                </figure>

                <div className="texto">
                    <p>texto</p>
                </div>



            </main>

            <footer>
                <h4>Derechos reservados a ...</h4>
            </footer>


        </>
    )
}

export default AnatomySelection;