import React from "react";
import HeroCard from "./components/HeroCard";
import Recents from "./components/Recents";
import AddAuthorModal from "./components/AddAuthorModal";
import AddBookModal from "./components/AddBookModal";
const Index = () => {
  return (
    <>
      <HeroCard />
      <Recents />
      <AddAuthorModal />
      <AddBookModal />
    </>
  );
};

export default Index;
