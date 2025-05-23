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
            <Th>Issue Date</Th>
            <Th>Expiry Date</Th>
            <Th>Status</Th>
            <Th>File</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {documents.map((doc) => (
            <Tr key={doc._id}>
              <Td>{doc.name}</Td>
              <Td>
                {doc.issueDate
                  ? new Date(doc.issueDate).toLocaleDateString()
                  : "No Date"}
              </Td>
              <Td>
                {doc.expiryDate
                  ? new Date(doc.expiryDate).toLocaleDateString()
                  : "No Date"}
              </Td>
              <Td>
                {(() => {
                  const today = new Date();
                  const expiry = new Date(doc.expiryDate);
                  const timeDiff = expiry - today;
                  const daysLeft = timeDiff / (1000 * 60 * 60 * 24);

                  if (!doc.filePath) return "Incomplete";
                  if (!isNaN(expiry) && daysLeft < 0) return "Expired";
                  if (!isNaN(expiry) && daysLeft <= 30) return "Almost Expired";
                  return "Complete";
                })()}
              </Td>
              <Td>
                {doc.filePath
                  ? doc.originalFileName || "Unnamed File"
                  : "No File"}
              </Td>
              <Td display={"flex"} flexDirection={"row"} gap={2}>
                {/* View Button */}
                <Link href={doc.filePath} isExternal>
                  <IconButton
                    icon={<IoEyeSharp />}
                    size="sm"
                    aria-label="View"
                  />
                </Link>

                {/* Download Button */}
                <Link href={doc.filePath} download>
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
