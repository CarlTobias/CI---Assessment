import { Flex } from "@chakra-ui/react";
import UserDocument from "../UserDocument/UserDocument";

const UserDocuments = ({ vehicles }) => {
  return (
    <Flex flexDirection={"column"} w={"100%"} gap={3} p={5}>
      {vehicles.map((vehicle, index) => (
        <UserDocument key={index} vehicle={vehicle} />
      ))}
    </Flex>
  );
};

export default UserDocuments;
  
