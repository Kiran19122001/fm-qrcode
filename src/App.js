import qrcode from "./image-qr-code.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-container-main">
        <div className="content-container">
          <img src={qrcode} alt="qrcode" className="qr-image" />
        </div>
        <h3 className="heading">
          Improve your front-end skills by building projects
        </h3>
        <p className="paratxt">
          Scan the qr code to vist frontend mentor and take your coding skills
          to next level
        </p>
      </div>
    </div>
  );
}

export default App