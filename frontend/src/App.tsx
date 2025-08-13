import { Time } from "./component/DateTime";
import { Navbar } from "./component/Navbar";
import { TaskContainer } from "./component/TaskContainer";
import { Tools } from "./component/Tools";
import { ICONS } from "./utils/icons/icons";

function App() {
  return (
    <>
      <div className="bg-[#2D2D2D] min-h-screen">
        <Navbar />
        <Time />
        <Tools
          sortIcons={[ICONS.WARNING, ICONS.CLOCK, ICONS.SLEEP]}
          toolIcon={ICONS.PLUS_MATH}
        />
        <TaskContainer />
      </div>
    </>
  );
}

export default App;
