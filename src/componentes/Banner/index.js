import styles from './banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.jpg'


export default function Banner (){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! 
                    Me chamo Victor, estudante de Front-end da Alura. Aqui compartilho 
                    vários conhecimentos, passados pelo prof. Antônio.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                alt='circulo colorido'/>

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Victor"
                />
            </div>
        </div>
    )
}