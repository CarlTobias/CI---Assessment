import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';


const VehicleDetails = ({ vehicle, onDeleteVehicle, onEditVehicle, onViewDocuments }) => {
  return (
    <>
      {/* Title block with gray background */}
      <Box bg="gray.50" p={4} borderRadius="md" mb={4}>
        <Flex justify="space-between" align="center">
          <Text fontWeight="bold" fontSize="xl">
            {vehicle.brand} {vehicle.model}
          </Text>
          <Menu>
            <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="ghost" />
            <MenuList>
              <MenuItem onClick={onEditVehicle} color="red.500">
                Edit Vehicle
              </MenuItem>
              <MenuItem onClick={onDeleteVehicle} color="red.500">
                Delete Vehicle
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      {/* Vehicle details row */}
      <Flex justify="space-between" wrap="wrap" px={2}>
        <Box>
          <Text fontSize="sm" color="gray.500">Type</Text>
          <Text fontWeight="bold">{vehicle.type}</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500">Brand</Text>
          <Text fontWeight="bold">{vehicle.brand}</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500">Plate Number</Text>
          <Text fontWeight="bold">{vehicle.plateNumber}</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500">Model</Text>
          <Text fontWeight="bold">{vehicle.model}</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500">Year</Text>
          <Text fontWeight="bold">{vehicle.year}</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500">Mileage</Text>
          <Text fontWeight="bold">{vehicle.mileage}</Text>
        </Box>
      </Flex>
    </>
  );
};

export default VehicleDetails;
