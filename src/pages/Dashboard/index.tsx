import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

// React.FC -> componente escriro em formato de função
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="" />
      <Title>Explore Repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/38504845?s=460&u=e62cabf33d90c5d6ded18d4ffc772a8c4bc5f5bb&v=4"
            alt="Milena Mognon"
          />

          <div>
            <strong>GoBarber</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/38504845?s=460&u=e62cabf33d90c5d6ded18d4ffc772a8c4bc5f5bb&v=4"
            alt="Milena Mognon"
          />

          <div>
            <strong>GoBarber</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/38504845?s=460&u=e62cabf33d90c5d6ded18d4ffc772a8c4bc5f5bb&v=4"
            alt="Milena Mognon"
          />

          <div>
            <strong>GoBarber</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
