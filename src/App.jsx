import { createRoot } from "react-dom/client";
import Navbar from "./navbar";

const App =()=>{
    return( 
        <>
        <Navbar/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatem?</p>
        </>
    )
}
export default App;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);