import React from 'react';
import { Link } from 'react-router-dom';
import Header from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <Header>
    <img src={logoImg} alt="GoBarber" />

    <Link to="/perfil">
      <img
        src="https://avatars0.githubusercontent.com/u/46464433?s=460&v=4"
        alt="Luciano Ferreira"
      />
      <div>
        <strong>Bem vindo,</strong>
        <h2>Luciano Silva</h2>
      </div>
    </Link>
  </Header>
);

export default Dashboard;
