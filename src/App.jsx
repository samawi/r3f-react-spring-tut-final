import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 16, 42], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
      {/* <axesHelper args={[10]} /> */}
    </Canvas>
  );
}

export default App;
