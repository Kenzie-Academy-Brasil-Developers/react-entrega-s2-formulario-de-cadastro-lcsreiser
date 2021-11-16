import "./styles.css";

import { useParams, useHistory } from "react-router-dom";

function Sucess() {
  let { name } = useParams();

  const history = useHistory();

  return (
    <div className="divSucess">
      <h1>Bem vindo {name}</h1>
      <h3>Tem café na mesa, cerveja na geladeira e Netflix, aproveite. </h3>
      <button onClick={() => history.push("/")}>Voltar</button>
    </div>
  );
}

export default Sucess;
