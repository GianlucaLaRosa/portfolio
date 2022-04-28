import "./App.css";
import { useTranslation } from "react-i18next";
import Header from "./components/layout/Header";
import Splash from "./pages/Splash";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Footer from "./components/layout/Footer";

console.log(
  `%cNeed a web site?`,
  `font-size: 40px; text-shadow: 0 0 5px purple, 0 0 10px red `
);

console.log(
  `%cContact me on my email: gianluca_larosa@hotmail.com
or check:
https://www.linkedin.com/in/larosa-gianluca/
https://github.com/GianlucaLaRosa`,
  `color:white;background-color:purple; font-size: 20px`
);
console.log(
  `%cHave a nice day! ^_^`,
  `color:purple;font-size: 15px;font-weight: bold`
);

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Splash />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
