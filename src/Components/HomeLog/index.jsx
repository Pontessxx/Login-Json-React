// Home.jsx
import React from 'react';

const Home = () => {
  const handleLogout = () => {
    // Limpar dados da sessão
    sessionStorage.clear();

    // Redirecionar para a tela de registro
    window.location.href = '/register'; // ou use o react-router-dom para navegação programática
  };

  // Obter informações do usuário da sessão
  const userEmail = sessionStorage.getItem('userEmail');
  const userName = sessionStorage.getItem('userName');

  return (
    <div>
      <h2>Welcome to Home</h2>
      <div>
        {userName && userEmail ? (
          <p>
            Logged in as {userName} ({userEmail})
          </p>
        ) : null}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
