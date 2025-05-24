import {
  Flex,
  Link,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
  Badge,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserDocumentTable = ({ documents = [], onEdit, onDelete }) => {
  return (
    <Flex w={"100%"}>
      <Table w={"100%"}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th display={{ base: "none", xl: "table-cell" }}>Issue Date</Th>
            <Th display={{ base: "none", xl: "table-cell" }}>Expiry Date</Th>
            <Th display={{ base: "none", md: "table-cell" }}>Status</Th>
            <Th display={{ base: "none", xl: "table-cell" }}>File</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {documents.map((doc) => (
            <Tr key={doc._id}>
              <Td>{doc.name}</Td>
              <Td display={{ base: "none", lg: "table-cell" }}>
                {doc.issueDate
                  ? new Date(doc.issueDate).toLocaleDateString()
                  : "No Date"}
              </Td>
              <Td display={{ base: "none", lg: "table-cell" }}>
                {doc.expiryDate
                  ? new Date(doc.expiryDate).toLocaleDateString()
                  : "No Date"}
              </Td>
              <Td display={{ base: "none", md: "table-cell" }}>
                {(() => {
                  const today = new Date();
                  const expiry = new Date(doc.expiryDate);
                  const timeDiff = expiry - today;
                  const daysLeft = timeDiff / (1000 * 60 * 60 * 24);
                  const isSmallScreen = useBreakpointValue({ base: true, md: false });

                  let bg = "";
                  let color = "white";
                  let text = "";

                  if (!doc.filePath) {
                    bg = "#DE4447";
                    text = "Incomplete";
                  } else if (!isNaN(expiry) && daysLeft < 0) {
                    bg = "#DE4447";
                    text = "Expired";
                  } else if (!isNaN(expiry) && daysLeft <= 30) {
                    bg = "#FFEC8E";
                    color = "black";
                    text = "Almost Expired";
                  } else {
                    bg = "#1F9450";
                    text = "Complete";
                  }

                  return isSmallScreen
                    ? <Box w="10px" h="10px" bg={bg} borderRadius="full" mx="auto" />
                    : <Badge bg={bg} color={color} px={2} py={1} borderRadius="md" p={'1'} >{text}</Badge>;
                })()}
                
              </Td>
              <Td textDecoration="underline" display={{ base: "none", lg: "table-cell" }}>
                {doc.filePath
                  ? doc.originalFileName || "Unnamed File"
                  : "No File"}
              </Td>
              <Td display={"flex"} flexDirection={"row"} gap={2}>
                {/* View Button */}
                <Link display={{ base: "none", md: "block" }} href={doc.filePath} isExternal>
                  <IconButton
                    icon={<IoEyeSharp />}
                    size="sm"
                    aria-label="View"
                  />
                </Link>

                {/* Download Button */}
                <Link display={{ base: "none", md: "block" }} href={doc.filePath} download>
                  <IconButton
                    icon={<MdOutlineFileDownload />}
                    size="sm"
                    aria-label="Download"
                  />
                </Link>

                {/* Edit Button */}
                <IconButton
                  icon={<FaRegEdit />}
                  onClick={() => onEdit(doc)}
                  size="sm"
                  aria-label="Edit"
                />

                {/* Delete Button */}
                <IconButton
                  icon={<MdDelete />}
                  onClick={() => onDelete(doc._id)}
                  size="sm"
                  aria-label="Delete"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default UserDocumentTable;
