import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Teste de Formulário</h1>
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
          {mensagem && <p data-testid="mensagem-saudacao">{mensagem}</p>}
        </header>
      </div>
  );
}

export default App;
