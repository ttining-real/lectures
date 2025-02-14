import { useSearchParams } from "react-router-dom";

const Home = () => {
  // /?value=hello
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));

  return <div>Home</div>;
};

export default Home;
