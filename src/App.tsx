import View from "./routes";
import "./App.css";
import { useEffect } from "react";
import { cn } from "./utils/utils";
const App = () => {
  // function handleClick() {
  //   const auth = new Auth();
  //   auth.register("123456789");
  // }
  useEffect(() => {
    cn("text", { "text-center": true })
  })
  return (
    <View />
  );
};

export default App;
