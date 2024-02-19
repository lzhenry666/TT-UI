import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import Header from "../../components/Header/Header"
import  Separator  from "../../components/Separator/Separator"
import  Tweet from "../../components/Tweet/Tweet"

import './Status.css';

/**
 * Fluxo de renderização:
 *
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que alguma das suas propriedades mudarem.
 */

/**
 * Algoritmo de reconciliação:
 *
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */
const tweetData = [
  {
    username: "@HellenSimilipb",
    name: "Hellen Simili",
    content: "Tweet de exemplo 1",
    likes: 15,
    replies: 5,
    retweets: 3,
    img:'https://avatars.akamai.steamstatic.com/4cb489825d8833b850d10bdf462a495a73c24d90_full.jpg'
  },
  {
    username: "@CarolzinhaSg",
    name: "Caroline Silva",
    content: "Tweet de exemplo 2",
    likes: 20,
    replies: 10,
    retweets: 5,
    img:'https://images.uncyc.org/pt/b/bd/Carolzinha-Sg2.jpg'
  },
  // Adicione mais objetos conforme necessário
];

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

  {
 tweetData.map((tweet, index) => (
  <Tweet
    key={index}
    content={tweet.content}
    username={tweet.username}
    likes={tweet.likes}
    replies={tweet.replies}
    retweets={tweet.retweets}
    name={tweet.name}
    img={tweet.img}
  />
))
  }
      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>


        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer}    content={answer}
        username={answer}
        likes={3}
        replies={1}
        retweets={2}
        name={answer}
        img={answer} />
      })}
    </main>
  )
}