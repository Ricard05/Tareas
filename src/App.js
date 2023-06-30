import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import "./stylesheets/Calculadora.css";

const App = () => {
  const [resultado, setResultado] = useState("");

  const colocarOperador = (e) => {
    setResultado(resultado.concat(e.target.name));
  };

  const limpiar = () => {
    setResultado("");
  };

  const regresar = () => {
    setResultado(resultado.slice(0, -1));
  };

  const calcular = () => {
    try {
      if (isNaN(resultado)) {
        throw setResultado("Syntax error");
      }
      setResultado(eval(resultado).toString());
    } catch (error) {
      setResultado("Syntax error");
    }
  };

  return (
    <>
      <div></div>
      <Container className="contenedor-calculadora container bg-dark my-5">
        <Form className="mb-3">
          <Form.Control
            type="text"
            value={resultado}
            className="form-control"
            disabled
          />
        </Form>

        <div className="botones-container">
          <Button variant="dark" onClick={limpiar} id="clear">
            Clear
          </Button>
          <Button className="operador" variant="dark" onClick={regresar}>
            C
          </Button>
          <Button variant="dark" name="7" onClick={colocarOperador}>
            7
          </Button>
          <Button
            className="operador"
            variant="dark"
            name="/"
            onClick={colocarOperador}
          >
            &divide;
          </Button>
          <Button variant="dark" name="8" onClick={colocarOperador}>
            8
          </Button>
          <Button variant="dark" name="9" onClick={colocarOperador}>
            9
          </Button>
          <Button variant="dark" name="4" onClick={colocarOperador}>
            4
          </Button>
          <Button
            className="operador"
            variant="dark"
            name="*"
            onClick={colocarOperador}
          >
            &times;
          </Button>
          <Button variant="dark" name="5" onClick={colocarOperador}>
            5
          </Button>
          <Button variant="dark" name="6" onClick={colocarOperador}>
            6
          </Button>
          <Button variant="dark" name="1" onClick={colocarOperador}>
            1
          </Button>
          <Button
            className="operador"
            variant="dark"
            name="-"
            onClick={colocarOperador}
          >
            &ndash;
          </Button>
          <Button variant="dark" name="2" onClick={colocarOperador}>
            2
          </Button>
          <Button variant="dark" name="3" onClick={colocarOperador}>
            3
          </Button>

          <Button variant="dark" name="0" onClick={colocarOperador}>
            0
          </Button>
          <Button
            className="operador"
            variant="dark"
            name="+"
            onClick={colocarOperador}
          >
            +
          </Button>
          <Button variant="dark" name="." onClick={colocarOperador}>
            .
          </Button>
          <Button className="operador" variant="dark" onClick={calcular}>
            =
          </Button>
        </div>
      </Container>
    </>
  );
};

export default App;
