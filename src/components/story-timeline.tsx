import React from "react";
import {
  Box,
  BoxProps,
  Circle,
  Flex,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton
} from "@chakra-ui/react";

export interface StoryTimelineProps extends BoxProps {
  icon?: any;
  boxProps?: BoxProps;
  skipTrail?: boolean;
  index: number;
  year?: string;
}

export const StoryTimeline: React.FC<StoryTimelineProps> = ({
  icon = "",
  boxProps = {},
  index,
  year,
  skipTrail = false,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const color = useColorModeValue("gray.700", "gray.200");
  let place = index % 2 === 0 ? "right" : "left";

  return (
    <Flex minH={20} {...props} minW={[200,0]}>
      <Flex flexDir="column" alignItems={"center"} minHeight={["20rem","10rem"]} mr={4}>
        <Popover
          isOpen={isOpen}
          onClose={close}
          placement={place}
          closeOnBlur={false}
          variant="responsive"
          width={["9.3rem", "11.3rem", "15rem", "100%"]}
          arrowPadding={20}
          autoFocus={false}
        >
          <PopoverTrigger>
            <Box onClick={open} position="relative">
              <Circle
                size={12}
                bg={useColorModeValue("gray.600", "gray.500")}
                opacity={useColorModeValue(0.07, 0.15)}
                sx={{}}
              />
              {year ? (
                <Box
                  fontSize={15}
                  fontWeight={"bold"}
                  color={color}
                  pos="absolute"
                  left="0.5rem"
                  top="0.875rem"
                >
                  {year}
                </Box>
              ) : (
                <Box
                  as={icon}
                  size="1.25rem"
                  color={color}
                  pos="absolute"
                  left="0.875rem"
                  top="0.875rem"
                />
              )}
            </Box>
          </PopoverTrigger>
          <Box fontSize={15}>
            {!year && (
              <PopoverContent padding={["0.2rem", "0.2rem", "0.7rem"]}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Box overflow="scroll">{children}</Box>
                </PopoverBody>
              </PopoverContent>
            )}
          </Box>
        </Popover>
        {!skipTrail && <Box w="1px" flex={1} bg={color} />}
      </Flex>
    </Flex>
  );
};
