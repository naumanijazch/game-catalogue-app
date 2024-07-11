import { Badge } from "@chakra-ui/react";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const roundedRating = Math.round(rating * 10) / 10;
  let color =
    roundedRating > 4.5 ? "green" : roundedRating > 4 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      variant={"outline"}
    >
      {roundedRating}
    </Badge>
  );
};

export default Rating;
