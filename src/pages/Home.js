import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainHome from "../components/mainhome/Mainhome";

function Home(){
    return(
        <div>
            <Header></Header>
            <main>
                <h1>Inicio</h1>
                <MainHome></MainHome>

            </main>
            <Footer></Footer>
        </div>
    )
}

export default Home