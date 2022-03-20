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
  width: 450px;
  height: auto;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  gap:20px;
`;

const Container = styled.header`
  display: flex;
  background-color: #2e3575;
  border-radius: 20px 20px 115% 100%;
  align-items: center;
  padding-bottom:20px;
  width: 100%;
  height: 200px;
  gap:10px;

  h2 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 20px;
    width:50%;
    line-height: 20px;
    margin-left: 20px;
    font-weight: 400;
  }
  figure {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 120px;
    height: 120px;
  }

  span {
    font-weight: 900;
    color: #fff;
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
    console.log(data.react);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <h2>
            Formulário para compra de <span>Pacote de adesivos</span>
          </h2>
          <figure>
            <img src={boxlogo} alt="" />
          </figure>
        </Container>

        <form className="form-container">
          <h2>Adesivos Disponíveis:</h2>

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
          <div className="button-box">
            <button
              className="send-button"
              type="submit"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
}

export default App;
