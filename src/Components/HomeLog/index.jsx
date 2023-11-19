// Home.jsx
import React from 'react';

const Home = () => {
  const handleLogout = () => {
    // Limpar dados da sessão
    sessionStorage.clear();

    // Redirecionar para a tela de registro
    window.location.href = '/register'; // ou use o react-router-dom para navegação programática
  };

  return (
    <div>
      <h2>Welcome to Home</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
