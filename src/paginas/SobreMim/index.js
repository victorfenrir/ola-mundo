import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

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
        Minha história com programação começou após eu optar por mudar de carreira, pois não estava conseguindo o sucesso desejado no ramo da Química. Eu
        aprendi lógica de programação, orientação a objetos, HTML5, CSS3, SASS, JavaScript, TypeScript, Node.js e React.js, além de ter obtido noções de SQL. Eu acabei gostando muido da área da programação, me dedicando sempre que possuo tempo livre nos dias de semana.
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Engenharia Elétrica na Universidade
        Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de
        Educação Tutorial), um grupo acadêmico que contribui de diversas formas
        para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web
        para ser um dos mantenedores do site deles.
      </p>
      <p className={styles.paragrafo}>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para o site, e aprendi muito enquanto
        codificava.
      </p>
      <p className={styles.paragrafo}>
        E foi enquanto eu estava no PET que decidi procurar um estágio em
        desenvolvimento web. Eu encontrei uma vaga na Alura para o Scuba Team e
        percebi que ela aliava duas paixões minhas: programação e educação. Para
        minha felicidade, fui escolhido para fazer parte do time.
      </p>
      <p className={styles.paragrafo}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. A
        Alura é uma escola não só para seus alunos e alunas, mas também para os
        colaboradores e colaboradoras. Hoje sou muito feliz de ter a
        oportunidade de trazer esses conteúdos ricos e encantadores para você.
        Espero que aprenda bastante!
      </p>
    </PostModelo>
  );
}
