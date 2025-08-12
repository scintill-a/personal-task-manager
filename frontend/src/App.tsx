import { Time } from "./component/DateTime";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#2D2D2D] min-h-screen">
        <Navbar />
        <Time />
      </div>
    </>
  );
}

export default App;
