import './App.css';
import { Header } from "./Components/Header";
import { Baner } from './Components/Baner';
import { Plus } from './Components/Plus';
import { Room } from './Components/Room';
import { Cta } from './Components/Cta';
import { Clip } from './Components/Clip';
import { Maps } from './Components/Maps';
import { Questions } from './Components/Questions';
import { Footer } from './Components/Footer';




export const App = () => {
    return (
        <main className="App">
            <Header />
            <Baner />
            <Plus />
            <Room />
            <Cta />
            <Clip />
            <Maps />
            <Questions />
            <Footer/>
        </main>
    );
}
