import "./App.css";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  Text,
  Textarea,
  SimpleGrid,
  Progress,
  useBreakpointValue,
  Grid,
  GridItem,
  Image,
  Center,
  IconButton,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import EFFORT_VALUES from "./datas/effort_value";
import ITEMS from "./datas/items";
import POKEMONS from "./datas/pokemons";
import TYPES from "./datas/types";

const App = () => {
  const isSm = useBreakpointValue({ base: true, sm: false }, { ssr: false });
  const isMobile = useBreakpointValue({ base: true, lg: false }, { ssr: false });
  const extraBox = useBreakpointValue({ base: true, xl: false }, { ssr: false });

  const [PlayerData, setPlayerData] = useState({ PlayerItem: "", PlayerTeratipo: "" });
  const [EnemyData, setEnemyData] = useState({ EnemyTeratipo: "", EnemyItem: "", EnemyEffort: "" });
  const { register, watch } = useForm();
  const watchAll = watch();
  console.log(watchAll);
  console.log(PlayerData);

  return (
    <Box>
      <SimpleGrid
        // eslint-disable-next-line no-nested-ternary
        gridTemplateColumns={isMobile ? "1fr" : extraBox ? "1fr 1fr" : "1fr 1fr 250px"}
        gridTemplateRows={isMobile ? " auto 1fr auto" : "1fr"}
        gap={isMobile ? 2 : 4}
      >
        {/* こっち */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          {/* 手持ち表示域 */}
          <Grid
            h={{ base: "200px", md: "300px" }}
            templateRows="repeat(6, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={{ base: "1", sm: "4" }}
            m={{ base: "0", md: "4" }}
          >
            {!isMobile && (
              <GridItem colSpan={7}>
                <Input w="80%" variant="outline" type="hidden" />
              </GridItem>
            )}

            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[0].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[1].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[2].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[3].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[4].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[5].icon} />
            </GridItem>
            <GridItem colSpan={1}>
              <Center h="100%">
                <IconButton aria-label="ReadButton" icon={<EditIcon />} />
              </Center>
            </GridItem>
            {/* スペーサー */}
            {!isSm && <GridItem colSpan={7} />}

            <GridItem colSpan={2} rowSpan={2}>
              <Center>
                <Image src={POKEMONS[0].icon} border="solid 1px" />
              </Center>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize={{ base: "sm", md: "md" }}>道具</Text>
            </GridItem>
            <GridItem colSpan={4}>
              <Select id="PlayerItem" {...register("PlayerItem")} onChange={(e) => console.log(e.)}>
                <option hidden value="">
                  -
                </option>
                {ITEMS.map((myitem) => (
                  <option key={myitem} value={myitem}>
                    {myitem}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem colSpan={1} bg="tomato">
              <Text fontSize={{ base: "sm", md: "md" }}>特性</Text>
            </GridItem>
            <GridItem colSpan={3} bg="tomato" />
            <GridItem colSpan={1} bg="tomato" />
            <GridItem colSpan={2}>
              <Select id="PlayerTeratipo" {...register("PlayerTeratipo")}>
                <option value="">-</option>
                {TYPES.map((PlayerTeratipo) => (
                  <option key={PlayerTeratipo.name} value={PlayerTeratipo.name}>
                    {PlayerTeratipo.name}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip">
              <Text fontSize={{ base: "sm", md: "md" }}>攻撃</Text>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip">
              <Text fontSize={{ base: "sm", md: "md" }}>a</Text>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip">
              <Text fontSize={{ base: "sm", md: "md" }}>防御</Text>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip">
              <Text fontSize={{ base: "sm", md: "md" }}>b</Text>
            </GridItem>
          </Grid>
          {/* ダメージ表示域 */}
          <SimpleGrid columns={2} spacing={3} m="4">
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>{PlayerData.PlayerItem}</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
          </SimpleGrid>
          {/* 実数地 */}
          <Center>
            <Text fontSize="lg">171-204-116-108-133-115</Text>
          </Center>
        </Box>

        {/* あっち */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          {/* 手持ち表示域 */}
          <Grid
            h={{ base: "320px", md: "350px", lg: "300px" }}
            templateRows="repeat(6, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={{ base: "1", sm: "4" }}
            m={{ base: "0", md: "4" }}
          >
            <GridItem colSpan={7} />
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[0].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[1].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[2].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[3].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[4].icon} />
            </GridItem>
            <GridItem colSpan={1} borderWidth="1px">
              <Image src={POKEMONS[5].icon} />
            </GridItem>
            <GridItem colSpan={1}>
              <Center h="100%">
                <IconButton aria-label="ReadButton" icon={<DeleteIcon />} />
              </Center>
            </GridItem>
            <GridItem colSpan={2} bg="papayawhip" />
            <GridItem colSpan={5}>
              <Select h="30.63px" id="EnemyEffort" {...register("EnemyEffort")}>
                <option>-</option>
                {EFFORT_VALUES.map((effort_value) => (
                  <option key={effort_value} value={effort_value}>
                    {effort_value}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem colSpan={2} rowSpan={2}>
              <Center>
                <Image src={POKEMONS[0].icon} border="solid 1px" />
              </Center>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize={{ base: "sm", md: "md" }}>道具</Text>
            </GridItem>
            <GridItem colSpan={4}>
              <Select id="EnemyItem" {...register("EnemyItem")}>
                <option hidden value="">
                  -
                </option>
                {ITEMS.map((enemyitem) => (
                  <option key={enemyitem} value={enemyitem}>
                    {enemyitem}
                  </option>
                ))}
              </Select>
            </GridItem>{" "}
            <GridItem colSpan={1} bg="tomato">
              <Text fontSize={{ base: "sm", md: "md" }}>特性</Text>
            </GridItem>
            <GridItem colSpan={3} bg="tomato" />
            <GridItem colSpan={1} bg="tomato" />
            <GridItem colSpan={2}>
              <Select id="EnemyTeratipo" {...register("EnemyTeratipo")}>
                <option value="">-</option>
                {TYPES.map((EnemyTeratipo) => (
                  <option key={EnemyTeratipo.name} value={EnemyTeratipo.name}>
                    {EnemyTeratipo.name}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip">
              <Text fontSize={{ base: "sm", md: "md" }}>攻撃</Text>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip">
              <Text fontSize={{ base: "sm", md: "md" }}>a</Text>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip">
              <Text fontSize={{ base: "sm", md: "md" }}>防御</Text>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip">
              <Text fontSize={{ base: "sm", md: "md" }}>b</Text>
            </GridItem>
          </Grid>
          {/* ダメージ表示域 */}
          <SimpleGrid columns={2} spacing={3} m="4">
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
            <Input w="80%" mt="2" variant="outline" />
            <Box>
              <Text>0%~100%</Text>
              <Progress size="lg" />
            </Box>
          </SimpleGrid>
          {/* 実数地 */}
          <Center>
            <Text fontSize="lg">171-204-116-108-133-115</Text>
          </Center>
        </Box>
        {extraBox || (
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Text>とりあえずメモ</Text>
            <Textarea />
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default App;
