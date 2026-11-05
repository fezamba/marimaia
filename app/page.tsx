export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="birthday-title">
        <div className="curtain curtainLeft" aria-hidden="true" />
        <div className="curtain curtainRight" aria-hidden="true" />
        <div className="spotlight" aria-hidden="true" />
        <div className="sparkles" aria-hidden="true">
          <span>✦</span><span>✧</span><span>♡</span><span>✦</span><span>✧</span>
        </div>
        <img className="heroMasks" src="/mari/theater-masks.png" alt="Máscaras de teatro coloridas" />

        <div className="heroContent">
          <p className="eyebrow"><span>✦</span> 6 de novembro <span>✦</span></p>
          <div className="marquee">
            <span className="marqueeLight lightOne" aria-hidden="true" />
            <span className="marqueeLight lightTwo" aria-hidden="true" />
            <span className="marqueeLight lightThree" aria-hidden="true" />
            <span className="marqueeLight lightFour" aria-hidden="true" />
            <span className="marqueeLight lightFive" aria-hidden="true" />
            <span className="marqueeLight lightSix" aria-hidden="true" />
            <p>APRESENTA</p>
            <h1 id="birthday-title">Feliz aniversário,<br /><em>Mari Maia!</em></h1>
          </div>
          <p className="heroCopy">Hoje, o palco é todo seu.</p>
          <a className="ticketButton" href="#carta">
            <span>ABRIR SUA CARTA</span>
            <small>ENTRADA VIP · PARA O MEU AMOR</small>
          </a>
        </div>

        <div className="stageFloor" aria-hidden="true" />
        <a className="scrollCue" href="#carta" aria-label="Ir para a carta">↓</a>
      </section>

      <section id="carta" className="letterSection" aria-labelledby="letter-title">
        <div className="sideNote sideNoteLeft" aria-hidden="true">♡</div>
        <div className="letterHeading sectionWrap">
          <p className="actLabel">ATO I</p>
          <h2 id="letter-title">Tudo que está<br />dentro do meu coração</h2>
          <div className="ornament" aria-hidden="true"><span>✦</span> ♡ <span>✦</span></div>
        </div>
        <img className="ballerinaSticker" src="/mari/hello-kitty-ballerina.png" alt="Hello Kitty vestida de bailarina" />

        <article className="letter sectionWrap">
          <p className="dropcap">Mari, você sabe que eu não sou muito bom com palavras e muito menos em expressar meus sentimentos, mas eu queria tentar pôr em palavras tudo que está dentro do meu coração sobre você.</p>

          <p>Eu nunca imaginei que seria possível amar alguém como eu te amo. A cada dia que passa, eu sinto mais amor, mais carinho, mais cuidado, mais tudo do balacobaco por você. Você foi a melhor coisa que já me ocorreu, então é claro que o seu aniversário é muito importante para mim. Sei que você ama essa data, por isso eu amo também. Quero te fazer muito feliz, não só hoje, mas também pelo resto de nossas vidas.</p>

          <aside className="milestone" aria-label="Nosso quarto aniversário juntos">
            <span className="milestoneNumber">4º</span>
            <span className="milestoneText">aniversário<br /><strong>juntos</strong></span>
          </aside>

          <img className="narutoSticker" src="/mari/naruto.png" alt="Naruto em estilo chibi sorrindo" />

          <p>Hoje é o seu quarto aniversário que passamos juntos, para você ver. Ao mesmo tempo, parece que estamos juntos há muito tempo e não estamos há quase nada, considerando os lindos anos que passaremos juntos, os anos que eu vou acordar e olhar para o lado e te ver dormindo, igual a uma princesa, os anos que eu vou poder fazer café da manhã para você, os anos que eu vou poder fazer massagem no seu pé, os anos que eu vou poder cuidar de você.</p>
        </article>
      </section>

      <section className="admirationSection" aria-labelledby="admiration-title">
        <img className="animeFriend animeFriendLeft" src="/mari/anime-blue.png" alt="Personagem de anime chibi com roupa azul" />
        <img className="animeFriend animeFriendRight" src="/mari/anime-black-cutout-trimmed.png" alt="Personagem de anime chibi com roupa preta" />
        <div className="sectionWrap">
          <div className="letterHeading compact">
            <p className="actLabel">ATO II</p>
            <h2 id="admiration-title">A mulher que<br />eu mais admiro</h2>
          </div>

          <article className="letter admirationLetter">
            <p>Eu tenho muito orgulho da mulher que você se tornou. Eu me inspiro todos os dias em você. Eu te escolhi para ser minha noiva, minha futura esposa, não porque você é a mais bonita, a mais gostosa ou a melhor em me dar prazer, mas sim pela sua capacidade intelectual, sua coragem em encarar qualquer desafio, sua determinação em conseguir tudo o que você quer, seu apreço pelos mínimos detalhes, seu conhecimento acerca de qualquer assunto, suas habilidades comunicativas, sua capacidade de decorar qualquer coisa e outras coisas que eu não consigo colocar em palavras, porque você é a pessoa mais incrível que eu conheço.</p>

            <p>Todo dia você me faz ser uma pessoa melhor, não só por ser incrível e uma inspiração, mas por você realmente se preocupar comigo, me chamar a atenção quando estou errado ou brigar comigo para me fazer cair na real.</p>

            <blockquote>
              <span className="quoteMark" aria-hidden="true">“</span>
              Se você fosse um personagem de RPG, todos os seus atributos estariam no máximo. Não há nada em sua vida ou sua pessoa que careça desses “pontos”.
            </blockquote>
          </article>
        </div>
      </section>

      <section className="futureSection" aria-labelledby="future-title">
        <div className="futureGlow" aria-hidden="true" />
        <img className="theaterSketch" src="/mari/theater-sketch-cutout.png" alt="Máscaras de teatro desenhadas à mão" />
        <div className="sectionWrap futureContent">
          <p className="actLabel light">ATO III</p>
          <h2 id="future-title">O nosso próximo<br /><em>grande ato</em></h2>
          <div className="timeline" aria-label="Nossa história">
            <div className="timelinePoint done"><span>✓</span><p>Último aniversário<br /><strong>“Estaremos noivos”</strong></p></div>
            <div className="timelineLine" aria-hidden="true" />
            <div className="timelinePoint now"><span>♡</span><p>Agora<br /><strong>Estamos noivos</strong></p></div>
            <div className="timelineLine" aria-hidden="true" />
            <div className="timelinePoint next"><span>✦</span><p>Ano que vem<br /><strong>Vamos casar</strong></p></div>
          </div>
          <div className="futureLetter">
            <p>Lembra que, no seu último aniversário, eu falei que estaríamos noivos? Agora estamos e vamos casar ano que vem, olha que legal! Eu tô muito feliz com isso. Espero que você esteja também, meu amor.</p>
          </div>
        </div>
      </section>

      <section className="finale" aria-labelledby="finale-title">
        <img className="helloFinale" src="/mari/hello-kitty-red.png" alt="Hello Kitty acenando" />
        <div className="finaleConfetti" aria-hidden="true">
          <span>♡</span><span>✦</span><span>♡</span><span>✧</span><span>♡</span><span>✦</span>
        </div>
        <div className="sectionWrap finaleContent">
          <p className="actLabel">GRANDE FINAL</p>
          <h2 id="finale-title">Você me faz<br /><em>feliz.</em></h2>
          <article className="finalLetter">
            <p>Eu já te falei isso muitas vezes, mas vou falar mais uma vez. Você é a única pessoa que faz com que eu tenha vontade de viver, vontade de trabalhar, vontade de estudar e vontade de ser uma pessoa melhor. Eu posso dizer com certeza que você é a pessoa que me faz conseguir dizer: “Eu sou feliz.”</p>

            <p>Eu gastei recentemente essa frase, mas vou ter que utilizá-la mais uma vez. Peço perdão por não ser tão original agora. Você tira sorrisos que nunca existiram e que nenhuma pessoa conseguiria tirar de mim. Obrigado por tudo, meu amor.</p>
          </article>
          <div className="loveLine">
            <span aria-hidden="true">♡</span>
            <p>Eu te amo mais do que tudo nessa vida.</p>
            <span aria-hidden="true">♡</span>
          </div>
          <a className="encoreButton" href="#birthday-title">De novo, desde o começo ↟</a>
        </div>
      </section>

      <footer>
        <p>Feito com todo o amor, especialmente para Mari Maia.</p>
        <span>Feliz aniversário, Mari ♡</span>
      </footer>
    </main>
  );
}
