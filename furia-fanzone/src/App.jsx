export default function App() {
  return (
    <div className="min-h-screen bg-furia-black text-white font-sans">
      <header className="p-6 text-center bg-furia-purple">
        <h1 className="text-4xl font-bold">FURIA FanZone Chat</h1>
        <p className="mt-2 text-lg">Torça. Interaja. Viva a FURIA com a comunidade.</p>
      </header>

      <main className="p-8 space-y-12 max-w-3xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold mb-4">🔥 Funcionalidades</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Chat ao vivo durante as partidas</li>
            <li>Notificações automáticas de jogos</li>
            <li>Simulador de torcida interativa</li>
            <li>Conteúdo exclusivo e enquetes</li>
          </ul>
        </section>

        <section className="text-center">
          <a href="https://t.me/FuriaFanZone_project_Bot" target="_blank" rel="noopener noreferrer">
            <button className="bg-furia-accent hover:bg-orange-600 transition px-6 py-3 rounded-xl text-xl font-bold">
              Entrar no Chat
            </button>
          </a>
        </section>
      </main>

      <footer className="p-6 text-center text-sm border-t border-furia-purple mt-16">
        <p>Feito com 💜 por fãs da FURIA • <a href="https://github.com/seuuser/furia-fanzone" className="underline">GitHub</a></p>
      </footer>
    </div>
  );
}
