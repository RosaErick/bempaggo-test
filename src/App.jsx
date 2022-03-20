import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import boxlogo from "./assets/imgs/caixa-de-entrega.png";
import reactlogo from "./assets/imgs/icons8-nativo-de-reagir-48.png";
import vuelogo from "./assets/imgs/icons8-vue-js-48.png";
import angularlogo from "./assets/imgs/icons8-angularjs-48.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 50vw;
  height: 45vw;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`;

const Container = styled.header`
  display: flex;
  color: rgba(255, 255, 255, 0.699);
  background-color: #2e3575;
  border-radius: 20px 20px 115% 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  h2 {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    margin-left: 20px;
  }
  figure {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

function App() {
  const [vueQuantity, setVueQuantity] = useState(0);
  const [angularQuantity, setAngularQuantity] = useState(0);
  const [reactQuantity, setReactQuantity] = useState(0);
  const [obs, setObs] = useState("");
  const [data, setData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setData({
      react: reactQuantity,
      vue: vueQuantity,
      angular: angularQuantity,
      obs: obs,
    });
    console.log(data);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <h2>Formulário para compra de Pacote de adesivos</h2>
          <figure>
            <img src={boxlogo} alt="" />
          </figure>
        </Container>

        <form className="form-container">
          <h2>Quais adesivos:</h2>
       
            <div className="form-options">
              <div className="form-row">
                <img src={reactlogo} alt="" />
                <label htmlFor="reactQuantity">React</label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  placeholder="0"
                  onChange={(e) => setReactQuantity(e.target.value)}
                  id="reactQuantity"
                />
              </div>

              <div className="form-row">
                <img src={vuelogo} alt="" />
                <label htmlFor="vueQuantity">Vue</label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  id="vueQuantity"
                  placeholder="0"
                  onChange={(e) => setVueQuantity(e.target.value)}
                />{" "}
              </div>

              <div className="form-row">
                <img src={angularlogo} alt="" />
                <label htmlFor="angularQuantity">Angular</label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  id="angularQuantity"
                  placeholder="0"
                  onChange={(e) => setAngularQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="text-area-box">
              <h2>Observações:</h2>
              <textarea
                onChange={(e) => setObs(e.target.value)}
                placeholder="Alguma duvida? Recado?"
              ></textarea>
            </div>
        

          <button className="send-button" type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </Wrapper>
    </>
  );
}

export default App;
