import "./App.css";
import img from "./assets/uma-mulher-olhando-para-a-esquerda.jpg";
import Twitter from "./assets/twitter.svg";
import Twitch from "./assets/twitch.svg";
import Instagram from "./assets/instagram.svg";
import LinkedIn from "./assets/linkedin.svg";
import GitHub from "./assets/github.svg";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          className="rounded-full border-solid border-2 border-purple-400 p-1 mb-4 w-52"
          src={img}
          alt="Foto de perfil de uma mulher olhando para a esquerda."
        />

        <p className="mb-8">
          <a
            className="text-base text-purple-400"
            href="https://www.instagram.com/"
            target="_blank"
          >
            @instagram
          </a>
        </p>

        <div className="flex flex-col mb-16">
          <button className="border-2 border-purple-400 py-2 px-32 mb-4 rounded">
            <a className="text-purple-400 uppercase" href="#">
              Link 1
            </a>
          </button>
          <button className="border-2 border-purple-400 py-2 px-32 mb-4 rounded">
            <a className="text-purple-400 uppercase" href="#">
              Link 2
            </a>
          </button>
          <button className="border-2 border-purple-400 py-2 px-32 mb-4 rounded">
            <a className="text-purple-400 uppercase" href="#">
              Link 3
            </a>
          </button>
          <button className="border-2 border-purple-400 py-2 px-32 mb-4 rounded">
            <a className="text-purple-400 uppercase" href="#">
              Link 4
            </a>
          </button>
        </div>

        <div>
          <ul className="flex flex-row items-center justify-center">
            <li className="mr-7">
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li className="mr-7">
              <a href="#">
                <img src={Twitch} alt="Twitch" />
              </a>
            </li>
            <li className="mr-7">
              <a href="#">
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li className="mr-7">
              <a href="#">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={GitHub} alt="GitHub" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
