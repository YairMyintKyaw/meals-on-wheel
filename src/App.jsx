import { Auth } from "./util/auth";

const App = () => {
  function handleClick(){
    const auth = new Auth();
    auth.register("123456789");
  }
  return (
    <div style={{width:"100vw",textAlign:"center"}}>
      <button style={{padding:"10px 20px"}} onClick={handleClick}>Click</button>
    </div>
  )
}

export default App