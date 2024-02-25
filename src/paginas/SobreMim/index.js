import styles from "./SobreMim.module.css";

import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Oi, eu sou o Victor!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Victor sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver
        por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou após eu optar por mudar de carreira, pois não estava conseguindo o sucesso desejado no ramo em que me formei. Eu
        aprendi lógica de programação, orientação a objetos, HTML5, CSS3, SASS, JavaScript, TypeScript, Node.js e React.js, além de ter obtido noções de SQL. Eu acabei gostando muido da área da programação, me dedicando sempre que possuo tempo livre nos dias de semana.
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Química com Atribuições Tecnológicas na Fundação
        Técnico-Educacional Souza Marques (FTESM). Tive a oportunidade de fazer iniciação científica
        no CT (Centro Técnico) da UFRJ, aprendendo sobre redes poliméricas semi-interpenetrantes (SIPN),
        posteriormente escrevendo meu TCC com o tema "Identificação de radioisótopos nos vinhos tintos 
        cabernet sauvignon, Merlot e Carménère".
      </p>
      <p className={styles.paragrafo}>
        Após conclusão do curso, passei por um período de 2 anos de muita entrevista e nenhuma contratação.
        Em Setembro de 2021, finalmente fui contratado para trabalhar como técnico químico no turno da noite
        em uma estação de tratamento de chorume. Em Março de 2022, consegui uma vaga como técnico de processos
        petroquímicos em uma empresa que purificava gás metano a fim de obter biometano (opção mais sustentável
        com relação ao meio ambiente). Porém, após esta oportunidade, tive novamente uma seca de 1 ano sem conseguir
        me recolocar. 
      </p>
      <p className={styles.paragrafo}>
        E foi assim que decidi estudar TI e me aventurar em uma área completamente nova e com uma
        abundância de oportunidades. Pesquisei bastante a cerca das diversas opções (Front-End, Back-End, DevOps,
        UX/Design, DataScience, etc.), e a que inicialmente ressoou mais comigo foi a área do Front-End. Assim,
        iniciei meus estudos na Escola de Programação, Alura, em Janeiro de 2023. 
      </p>
      <p className={styles.paragrafo}>
        Desde então, tem sido apenas aprendizados atrás de aprendizados. Atualmente, estou
        seguindo uma trilha de cursos para formações com REACT, seus hooks e algumas de suas bibliotecas
        (Markdown, React-Router, Jest&Testing, Recoil, Immer, etc.), desenvolvendo meu conhecimento 
        para criar Single Page Applications (SPA). 
        Hoje estou novamente em busca de uma oportunidade para provar que sou capaz de entrar e crescer 
        nesta área importante e sempre crescente.
      </p>
    </PostModelo>
  );
}
