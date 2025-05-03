// src/Comandos.js
export default function Comandos() {
    return (
      <div className="min-h-screen bg-furia-black text-white p-8 font-sans">
        <h1 className="text-3xl font-bold mb-6 text-furia-purple">📜 Comandos do Bot FURIA</h1>
  
        <ul className="space-y-6 text-lg">
          <li>
            <strong className="text-furia-accent">/start</strong><br />
            Dá boas-vindas e mostra como usar o bot.
          </li>
          <li>
            <strong className="text-furia-accent">/status</strong><br />
            Mostra o status da atual partida da FURIA.
          </li>
          <li>
            <strong className="text-furia-accent">/proximojogo</strong><br />
            Mostra a data e o adversário do próximo jogo da FURIA.
          </li>
          <li>
            <strong className="text-furia-accent">/vaifuria</strong><br />
            Envia uma mensagem empolgante de torcida.
          </li>
          <li>
            <strong className="text-furia-accent">/mvp</strong><br />
            Inicia uma enquete de MVP com os jogadores da equipe.
          </li>
          <li>
            <strong className="text-furia-accent">/ranking</strong><br />
            Exibe a posição atual da FURIA no ranking HLTV.
          </li>
        </ul>
  
        <div className="mt-10">
          <a href="/" className="underline text-furia-accent">← Voltar para a Home</a>
        </div>
      </div>
    );
  }
  