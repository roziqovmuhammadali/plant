import React from "react";
import { Badge, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
const Boxe = () => {
  const property = {
    imageUrl: "../../public/image  1.jpg",
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00"
  };

  return (
    <div>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}>
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Boxe;
