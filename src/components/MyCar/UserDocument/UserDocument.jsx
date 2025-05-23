import {
  Badge,
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserDocument = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        justify={"center"}
        align={"center"}
        gap={5}
        p={5}
        border={"solid 2px black"}
        borderRadius={10}
      >
        <Flex
          w={"100%"}
          justify={"space-between"}
          align={"center"}
          backgroundColor={"gray.200"}
        >
          <Box pl={3}>Car Brand and Model Placeholder</Box>

          <Button>
            <BsThreeDotsVertical />
          </Button>
        </Flex>

        <Flex w={"100%"} justify={"space-between"}>
          <Flex flexDirection={"column"}>
            <Box>Type</Box>

            <Box>Sedan</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Brand</Box>

            <Box>Honda</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Model</Box>

            <Box>Civic</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Plate Number</Box>

            <Box>ZZ 16313</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Year</Box>

            <Box>2025</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Mileage</Box>

            <Box>100,000 km</Box>
          </Flex>
        </Flex>

        <Flex w={"100%"}>
          <Table w={"100%"}>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Issue Date</Th>
                <Th>Expiry Date</Th>
                <Th>Status</Th>
                <Th>File</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>Car Registration</Td>
                <Td>No Date</Td>
                <Td>No Date</Td>
                <Td>Pending</Td>
                <Td>No File</Td>
                <Td display={"flex"} flexDirection={"row"} gap={2}>
                  <IoEyeSharp />
                  <MdOutlineFileDownload />
                  <FaRegEdit />
                  <MdDelete />
                </Td>
              </Tr>

              <Tr>
                <Td>Insurance</Td>
                <Td>No Date</Td>
                <Td>No Date</Td>
                <Td>Pending</Td>
                <Td>No File</Td>
                <Td display={"flex"} flexDirection={"row"} gap={2}>
                  <IoEyeSharp />
                  <MdOutlineFileDownload />
                  <FaRegEdit />
                  <MdDelete />
                </Td>
              </Tr>

              <Tr>
                <Td>License</Td>
                <Td>No Date</Td>
                <Td>No Date</Td>
                <Td>Pending</Td>
                <Td>No File</Td>
                <Td display={"flex"} flexDirection={"row"} gap={2}>
                  <IoEyeSharp />
                  <MdOutlineFileDownload />
                  <FaRegEdit />
                  <MdDelete />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
};

export default UserDocument;
