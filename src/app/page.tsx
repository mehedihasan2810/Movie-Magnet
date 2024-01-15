import { FC } from "react";
import Header from "./components/Header";
import PosterCardWrapper from "./components/PosterCardWrapper";

const Home: FC = () => {
  return (
    <main>
      <Header />
      <PosterCardWrapper />
    </main>
  );
};

export default Home;
