import './Rodape.css'

const Rodape = () => {

    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/GabrielOliRod' target='_blank' rel="noreferrer">
                        <img src='/assets/gh.png' alt='Logo do GitHub' />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com' target='_blank' rel="noreferrer">
                        <img src='/assets/tw.png' alt='Logo do twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/gabrielolirod/' target='_blank' rel="noreferrer">
                        <img src='/assets/ld.png' alt='Logo do Linkedin' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src = '/assets/logo.png' alt='Logo da Organo'/> 
            </section>
            <section>
                <p>
                    Desenvolvido por Gabriel de O. Rodrigues <br/>em parceria com a escola de cursos Alura
                </p>
            </section>
        </footer>
    )

}

export default Rodape