import Banner from "./components/banner/Banner";

const footerStyle = {
    padding: "20px",
    backgroundColor: "#464046",
    color: "#A2A1A9"
};


function Footer(){
    return (
        <footer style={footerStyle}>
            Подвал сайта. Здесь будет меню
            <p>Небольшая информация</p>
        </footer>
    );
}


function App() {
  return (
      <div>
        Институт
          <Banner/>
          <Footer/>
      </div>
  );
}

export default App;

