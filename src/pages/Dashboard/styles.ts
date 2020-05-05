import styled, { css } from 'styled-components';
import { shade } from 'polished';

/**
 * Por padrão não existe hasError em um formulário, por isso é necessário
 * criar uma interface dizendo o tipo da propriedade.
 */
interface FormProps {
  hasError: boolean;
}
// `` -> template literals
export const Title = styled.h1`
  font-size: 48px;
  color: #6b6b6a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    background: #fff;
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #ddd;
    border-right: 0;
    font-size: 20px;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    }

    &::placeholder {
      font-size: 20px;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }
    & + a {
      margin-top: 15px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #6b6b6a;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #a8a8b3;
    }
  }
`;
