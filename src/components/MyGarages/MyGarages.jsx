import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  Wrap,
  WrapItem,
  Divider,
} from "@chakra-ui/react";

const garages = [
  {
    name: "Radiant Car Workshop",
    region: "Dubai",
    link: "https://g.co/kgs/ftWqPhm",
    services: [
      "Denting and Painting",
      "Spare Parts",
      "Recovery Service",
      "Electric & Diagnose",
      "Transmission Repair",
      "Mechanic Repair",
      "A/C Services",
      "Vehicle Services",
    ],
    location: "Al Rashdyah, Opposite Dubai Festival City",
    timing:
      "Monday to Friday: 08:30 am to 08:00 pm | Saturday: 08:30 am to 05:00 pm | Sunday closed",
    contact: "+971 4 2863836",
  },
  {
    name: "PAL Auto Garage",
    region: "Dubai",
    link: "https://g.co/kgs/QZrbTbi",
    services: [
      "Fill washer fluid",
      "ABS sensor maintenance",
      "Oil Check",
      "Lug bolt inspection",
      "Tire depth check",
      "Brake inspection",
      "Spark plug wire check",
      "Power steering fluid check",
      "Brake fluid check",
      "New spark plugs",
      "Timing belt inspection",
      "Battery cleaning",
      "Windshield wiper replacement",
      "Radiator flush",
      "Fuel pressure regulator inspection",
      "Fuel filter replacement",
      "PAL Auto Maintenance Procedures",
      "Replace brake pads",
    ],
    location: "128 Community, 20th Street, Al Khabeesi, Deira, Dubai",
    timing: "Monday to Saturday: 08:00 am to 06:00 pm | Sunday closed",
    contact: "+971-4-297-1222",
  },
  {
    name: "Premier Car Care",
    region: "Dubai",
    link: "https://g.co/kgs/6kc6cYp",
    services: [
      "Full Checkup",
      "Body Repair",
      "Window Tinting",
      "Repair and Maintenance",
      "Detailing",
      "A/C Checkup",
    ],
    location: "Behind Home Centre Warehouse, Al Quoz 1, Near ETA | Dubai",
    timing: "Monday to Saturday: 08:00 am to 06:00 pm | Sunday closed",
    contact: "+971-4-339 4770",
  },
  {
    name: "Max Garage",
    region: "Dubai",
    link: "https://g.co/kgs/gRKRDwv",
    services: [
      "Engine, Mechanical, and Brakes",
      "AMC and Fleet Service",
      "Roadside assistance",
      "The electrical and air conditioning systems",
      "Alignment and tires",
      "Paint and Body Collision Repair",
      "Battery Servicing",
      "Inspection before purchase",
    ],
    location:
      "29th Street, Al Quoz Industrial Area 4, Dubai | Umm Suqeim Street, Dubai",
    timing: "Monday to Saturday: 08:00 am to 06:00 pm | Sunday closed",
    contact: "+971-52-981-2599 | Toll Free: 800 TOW(869)",
  },
  {
    name: "Orange Auto Services",
    region: "Dubai",
    link: "https://g.co/kgs/pxv4Pwn",
    services: [
      "Tire and wheel maintenance",
      "Battery Maintenance",
      "Car air conditioner repair",
      "Suspension and brakes",
      "Oil Change",
      "Car Maintenance",
      "Car wash service",
    ],
    location:
      "364, 318th road, opposite National Taxi Garage, Al Quoz |416, Behind Nad Al Hamar Avenues",
    timing:
      "Saturday to Thursday from 09:00 am to 09:00 pm | Friday from 03:00 pm to 09:00 pm",
    contact: "+971-4-338-1551",
  },
  // Abu Dhabi Garages
  {
    name: "Grace Auto Repair Workshop",
    region: "Abu Dhabi",
    link: "https://g.co/kgs/6UDTEqu",
    services: [
      "Battery, brakes",
      "Air conditioning",
      "Electrical repairs",
      "Oil change",
      "Vehicle engine diagnostics",
      "Air and cabin filter replacements",
    ],
    location: "M-33, Mussafah",
    timing:
      "Thursday to Saturday: 08:00 AM to 07:00 PM | Sunday: Closed | Monday to Wednesday: 08:00 AM to 07:00 PM",
    contact: "+971-2-554-4140",
  },
  {
    name: "Universal Auto Garage",
    region: "Abu Dhabi",
    link: "https://g.co/kgs/ReheHa1",
    services: [
      "Engine repair",
      "Wheel alignment",
      "Body trim",
      "Transmission services",
      "Car waxing",
      "Air conditioning",
      "Diagnostic services",
      "Fleet maintenance",
      "Ceramic coating paint protection",
    ],
    location: "M-9 Mussafah",
    timing:
      "Thursday to Saturday: 08:00 AM to 07:00 PM | Sunday: Closed | Friday: 08:00 AM to 12:00 PM and 02:30 PM to 05:00 PM | Monday to Wednesday: 08:00 AM to 07:00 PM",
    contact: "+971 2 555 4944",
  },
  {
    name: "Quick Fit Auto Centre",
    region: "Abu Dhabi",
    link: "https://g.co/kgs/1ivd94f",
    services: [
      "Auto glass repair",
      "Engine Repair",
      "Car detailing",
      "Car waxing",
      "Battery replacement",
      "Oil change",
      "Computer diagnostics",
      "Full inspection",
    ],
    location: "4th Street, M-35 Mussafah, ICAD",
    timing: "Closes at 08:00 PM",
    contact: "+971-55-611-2071",
  },
  {
    name: "AARYA Premium Auto",
    region: "Abu Dhabi",
    link: "https://g.co/kgs/WyJTPdu",
    services: [
      "Power window repair",
      "Water leak repair",
      "Brake Repair",
      "AC system recharge",
      "Ceramic coating",
      "Body polishing",
      "Chassis repair",
      "Computer diagnostics",
      "Transmission replacement",
    ],
    location: "Plot 81, Mussafah M-9",
    timing: "Daily: 08:00 am to 11:00 pm (Closed on Sunday)",
    contact: "+971-2-558-5375",
  },
  {
    name: "Drums Auto Services Centre",
    region: "Abu Dhabi",
    link: "https://g.co/kgs/vXFB3kC",
    services: [
      "Engine diagnostics",
      "Suspension repair",
      "Transmission Repair",
      "Battery maintenance",
      "Oil change",
      "Brake and A/C service",
      "Full vehicle inspections",
    ],
    location: "34 As Safari 1 street, Mussafah M-13",
    timing: "Thursday to Wednesday: 09:00 AM to 10:00 PM | Friday: Closed",
    contact: "+971-50-946-6200",
  },
   // Sharjah Garages
  {
    name: "Al Ghurair Motors",
    region: "Sharjah",
    link: "https://g.co/kgs/prNq7F3",
    services: [
      "Auto Wheels and Brake Repair",
      "Car Computer Diagnosis",
      "Car Polishing",
      "Engine",
      "Transmission Repair",
      "Steering and Suspension Repair",
      "Car Air Conditioning Check-Up",
      "Car Mechanical Services",
      "Car Valuation and Inspection",
      "Routine Service Maintenance",
      "Tyre and Battery Check-Up",
    ],
    location: "Service road nearby Ramez Hypermarket industrial area 13, industrial area",
    timing: "Monday to Sunday: 08:00 am to 08:00 pm",
    contact: "+971-60-054-0045",
  },
  {
    name: "New Style Auto Mechanic Workshop",
    region: "Sharjah",
    link: "https://g.co/kgs/cKDVE3H",
    services: [
      "Car Diagnostics",
      "Gearbox Repair",
      "Car AC Repair",
      "Car Tuning",
      "Auto Electrical System Repair",
      "Vehicle Recovery",
      "Engine Oil and Brake Pad Replacement",
      "Auto Body Repair",
    ],
    location: "Industrial Area 2, Opposite Igloo Ice Cream",
    timing: "Saturday to Thursday: 08:00 am to 01:00 pm | 04:00 pm to 08:00 pm | Friday: Closed",
    contact: "+971-50-433-1449 | info@newstyleauto.ae",
  },
  {
    name: "Azure Auto",
    region: "Sharjah",
    link: "https://www.azureauto.ae/",
    services: [
      "Battery Replacement",
      "Engine Repair",
      "Oil Change",
      "AC Repair",
      "Transmission Repair",
      "Timing Belt Replacement",
      "Pre-Purchase Inspection",
    ],
    location: "Industrial Area 12, Industrial Area",
    timing: "Saturday to Thursday: 08:00 am to 08:00 pm | Friday: Closed",
    contact: "+971-58-556-8894 | info@azureauto.ae",
  },
  {
    name: "Fantastic Auto Maintenance Workshop",
    region: "Sharjah",
    link: "https://g.co/kgs/xgyLbM1",
    services: [
      "Auto Lube Services",
      "Electrical",
      "Mechanical Repairs",
      "AC Service",
      "Repairs",
      "Denting",
      "Painting",
      "Vehicle Detailing",
      "Polishing",
      "Accident Repairs",
      "Recovery Services Assistance",
      "Vehicle Police Passing Assistance",
    ],
    location: "Opposite to Liberty Showroom, King Abdul Aziz Street, Industrial Area 4",
    timing: "Saturday to Thursday: 08:00 am to 01:00 pm | 03:30 pm to 07:30 pm | Friday: 08:00 am to 12:30 pm | 02:00 pm to 06:00 pm",
    contact: "800-32-682-7842 (800-FANTASTIC) | +971-6-533-3098 | +971-55-485-7265 | info@fantasticauto.ae",
  },
  {
    name: "Jesr Al Senaeyah (Jas) Auto Workshop",
    region: "Sharjah",
    link: "https://g.co/kgs/ZwYQUnp",
    services: [
      "Engine Fixes",
      "Brake Repair",
      "Resolving Mechanical Issues",
      "Oil Changes",
      "System Checks",
      "Regular Inspection",
    ],
    location: "Industrial Area 12, Industrial Area",
    timing: "Saturday to Thursday: 09:00 am to 09:00 pm | Friday: Closed",
    contact: "+971-54-444-9611",
  },
];


// Group garages by region
const groupedGarages = garages.reduce((acc, garage) => {
  if (!acc[garage.region]) acc[garage.region] = [];
  acc[garage.region].push(garage);
  return acc;
}, {});

const MyGarages = () => {
  return (
    <Container maxW="100vw" py={8}>
      <Heading size="xl" mb={6} textAlign="center">
        My Garages
      </Heading>

      {Object.entries(groupedGarages).map(([region, regionGarages], index) => (
        <Box key={region} mb={10}>
          {index !== 0 && <Divider my={10} />}
          <Heading size="lg" mb={4} color="gray.700" px={2}>
            {region}
          </Heading>

          <Box overflowX="auto" whiteSpace="nowrap" px={2}>
            <Flex gap={6} w="max-content">
              {regionGarages.map((garage, idx) => (
                <Box
                  key={idx}
                  w={{ base: "300px", md: "350px", lg: "400px" }}
                  flexShrink={0}
                  p={4}
                  boxShadow="lg"
                  borderRadius="md"
                  bg="gray.50"
                  whiteSpace="normal"
                  display="flex"
                  flexDirection="column"
                  justifyContent="start"
                >
                  <Heading size="md" mb={2}>
                    <Link
                      href={garage.link}
                      isExternal
                      color="#90030C"
                      _hover={{ textDecoration: "underline", color: "blue.800" }}
                    >
                      {garage.name}
                    </Link>
                  </Heading>

                  <Text fontWeight="semibold" mb={2}>Services available:</Text>
                  <Wrap mb={4}>
                    {garage.services.map((service, i) => (
                      <WrapItem
                        key={i}
                        px={3}
                        py={1}
                        borderRadius="full"
                        bg="gray.200"
                        fontSize="sm"
                      >
                        {service}
                      </WrapItem>
                    ))}
                  </Wrap>

                  <Text><strong>Location:</strong> {garage.location}</Text>
                  <Text><strong>Timing:</strong> {garage.timing}</Text>
                  <Text><strong>Contact:</strong> {garage.contact}</Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default MyGarages;
