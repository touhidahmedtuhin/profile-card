import "./App.css";
import Card from "./components/Card";
import user from "./components/user.json";

function App() {
  return (
    <div className="flex justify-center items-center mt-15 gap-5">
      {user.map(({ id, username, role, images }) => (
        <Card key={id} username={username} position={role} images={images} />
      ))}
    </div>
  );
}

export default App;
