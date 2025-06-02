import "../../index.css";

import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import HomeBar from "../../components/HomeBar/HomeBar";
import MyCar from "../../components/MyCar/MyCar";
import MyForum from "../../components/MyForum/MyForum";
import MyGarages from "../../components/MyGarages/MyGarages";

const HomePage = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();
  const mode = query.get("mode");

  return (
    <>
      <Flex minH={"100vh"} flexDirection={"column"}>
        <HomeBar />

        {mode === "forum" && <MyForum />}
        {mode === "mycar" && <MyCar />}
        {(!mode || mode === "garages") && <MyGarages />}
      </Flex>
    </>
  );
};

export default HomePage;
