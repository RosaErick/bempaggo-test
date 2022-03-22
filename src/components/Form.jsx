import { useState, useEffect } from "react";
import styled from "styled-components";
import boxlogo from "../assets/imgs/caixa-de-entrega.png";
import reactlogo from "../assets/imgs/icons8-nativo-de-reagir-48.png";
import vuelogo from "../assets/imgs/icons8-vue-js-48.png";
import angularlogo from "../assets/imgs/icons8-angularjs-48.png";
import { Modal } from "./Modal";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 450px;
  height: auto;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  gap: 20px;
  -webkit-box-shadow: 0px 2px 9px 5px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 2px 9px 5px rgba(0, 0, 0, 0.63);
`;

const Container = styled.header`
  display: flex;
  background-color: #2e3575;
  border-radius: 14px 14px 115% 100%;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  height: 200px;
  gap: 10px;

  h2 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 20px;
    width: 50%;
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

const Button = styled.button`
  margin: 10px 20px;
  padding: 10px 20px;
  border: 1px solid transparent;
  background-color: #2e3575;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
`;

function Form() {
  const [vueQuantity, setVueQuantity] = useState('');
  const [angularQuantity, setAngularQuantity] = useState('');
  const [reactQuantity, setReactQuantity] = useState('');
  const [reactInput, setReactInput] = useState(false);
  const [vueInput, setVueInput] = useState(false);
  const [angularInput, setAngularInput] = useState(false);
  const [obs, setObs] = useState("");
  const [data, setData] = useState({});
  const [modalBox, setModalBox] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    setData({
      angular: angularQuantity,
      react: reactQuantity,
      vue: vueQuantity,
      obs: obs,
    });
  }

  useEffect(() => {
    console.log(data)
    if (Object.keys(data).length > 0) setModalBox(true);
  }, [data]);

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

        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Escolha o modelo e a quantidade:</h2>

          <div className="form-options">
            <div className="form-row">
              <img src={angularlogo} alt="" />
              <label htmlFor="angularQuantity">Angular</label>
              {!angularInput ? (
                <input
                  type="checkbox"
                  id="angularCheck"
                  onChange={() => setAngularInput(!angularInput)}
                />
              ) : null}

              {angularInput ? (
                <>
                  <div className="input-row">
                    <input
                      type="number"
                      min={0}
                      max={20}
                      id="angularQuantity"
                      placeholder="0"
                      onChange={(e) => setAngularQuantity(e.target.value)}
                    />
                    <span onClick={() => setAngularInput(!angularInput)}>
                      X
                    </span>
                  </div>
                </>
              ) : null}
            </div>
            <div className="form-row">
              <img src={reactlogo} alt="" />
              <label htmlFor="reactCheck">React</label>
              {!reactInput ? (
                <input
                  type="checkbox"
                  id="reactCheck"
                  onChange={() => setReactInput(!reactInput)}
                />
              ) : null}

              {reactInput ? (
                <>
                  <div className="input-row">
                    <input
                      type="number"
                      min={0}
                      max={20}
                      placeholder="0"
                      onChange={(e) => setReactQuantity(e.target.value)}
                      id="reactQuantity"
                    />
                    <span onClick={() => setReactInput(!reactInput)}>X</span>
                  </div>
                </>
              ) : null}
            </div>

            <div className="form-row">
              <img src={vuelogo} alt="" />
              <label htmlFor="vueCheck">Vue</label>

              {!vueInput ? (
                <>
                  <input
                    type="checkbox"
                    id="vueCheck"
                    onChange={() => setVueInput(!vueInput)}
                  />{" "}
                </>
              ) : null}
              {vueInput ? (
                <>
                  <div className="input-row">
                    <input
                      type="number"
                      min={0}
                      max={20}
                      id="vueQuantity"
                      placeholder="0"
                      onChange={(e) => setVueQuantity(e.target.value)}
                    />{" "}
                    <span onClick={() => setVueInput(!vueInput)}>X</span>
                  </div>
                </>
              ) : null}
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
            <Button className="send-button" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </Wrapper>
      {modalBox && <Modal setShowModal={setModalBox} />}
    </>
  );
}

export default Form;
