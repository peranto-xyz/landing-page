"use client";

import React from "react";
import {
  Button,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { KiltLogo, PerantoLogo, PerantoLogoShort } from "@/components/Icons";

const UI_CONTROLS_BG = "#1B679F";

export default function Home() {
  return (
    <>
      <Flex
        bgImage="url('/bg.png')"
        backgroundSize="cover"
        minH="100vh"
        w="full"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Flex
          overflowX="hidden"
          w={["full", "container.lg"]}
          direction="column"
        >
          <Flex
            w="full"
            justifyContent="space-between"
            bgColor="white"
            py={6}
            px={8}
            roundedBottom="md"
            shadow="md"
          >
            <PerantoLogo /> <KiltLogo />
          </Flex>

          <Flex
            w="full"
            my="24"
            justifyContent="space-between"
            pr="14"
            pl="14"
            gap={[8, 8, 0]}
            direction={["column", "column", "row"]}
          >
            <Flex flex="1" direction="column" gap={6} lineHeight="normal">
              <Text color="white" fontWeight="bolder" fontSize="4xl">
                A dApp to control your entire digital <br /> identity <br />{" "}
                self-sovereign.
              </Text>
              <Text color="white">
                Click the button to start, or scroll down to learn more about
                <Text fontWeight="bold" as="span" ml="2">
                  peranto Ci.Go (Citizenship and Government)
                </Text>
              </Text>
              <Button
                alignSelf="center"
                w="32"
                bgColor={UI_CONTROLS_BG}
                color="white"
                _hover={{
                  bgColor: "blue.600",
                }}
                as="a"
                href="https://app.peranto.xyz"
                target="_blank"
              >
                BEGIN
              </Button>
            </Flex>
            <Flex flex="1">
              <Image
                rounded="md"
                src="/mockup.png"
                alt="Peranto Mockup"
                shadow="dark-lg"
              />
            </Flex>
          </Flex>

          <Flex
            w="full"
            my="24"
            pr="14"
            pl="14"
            direction="column"
            backgroundImage="url('/caras1.png')"
            backgroundSize="800px"
            backgroundRepeat="no-repeat"
            backgroundPosition="top center"
            h="420px"
            filter="grayscale(80%)"
            alignItems="center"
            marginBottom="0"
            justifyContent="center"
          >
            <List
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              textColor="white"
              fontSize="3xl"
              fontWeight="bolder"
              lineHeight="8"
            >
              <ListItem>For Citizens.</ListItem>
              <ListItem>For Profesionals.</ListItem>
              <ListItem>For Businesses.</ListItem>
              <ListItem>For Customers.</ListItem>
              <ListItem>For Institutions.</ListItem>
              <ListItem>For All.</ListItem>
            </List>
          </Flex>

          <Flex
            w="full"
            my="24"
            pr="14"
            pl="14"
            direction="column"
            backgroundImage="url('/caras1.png')"
            backgroundSize="800px"
            backgroundRepeat="no-repeat"
            backgroundPosition="top center"
            h="420px"
            alignItems="center"
            justifyContent="center"
            marginTop="0"
          >
            <Text
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              textColor="white"
              fontSize="6xl"
              fontWeight="bolder"
            >
              A public good.
            </Text>
          </Flex>

          <Flex
            direction="column"
            w="full"
            rounded="md"
            bgColor="white"
            padding="4"
            gap={4}
            border="1px solid black"
          >
            <Text fontWeight="bold" fontSize="4xl" lineHeight="10">
              What is peranto Ci.Go <br /> (Citizenship and Government)?
            </Text>
            <Text>
              peranto is a digital ecosystem for the transition to a circular
              economy using self-sovereign identity, peranto Ci.Go is the first
              product of the ecosystem, which puts the citizen (you) at the
              center to claim your digital identity in an endless number of
              public services and private. peranto Ci.Go is an internet
              application that allows you to manage your digital, legal,
              commercial, academic identity...
            </Text>
            <Text mt="8" textAlign="center">
              <Text fontWeight="bold" as="span">
                Litepaper
              </Text>{" "}
              in development
            </Text>
          </Flex>

          <Flex
            direction="column"
            w="full"
            rounded="md"
            py="4"
            px="8"
            gap={[10, 10, 4]}
            color="white"
            my="24"
            lineHeight="10"
          >
            <Text fontSize="3xl" fontWeight="semibold">
              For Citizens
            </Text>
            <Text fontSize="4xl" fontWeight="bold" textAlign="center">
              Claim your identity with your first credential: <br /> Your INE
              Digital with new generation encryption.
            </Text>
            <Flex
              mt="12"
              gap={[8, 8, 4]}
              direction={["column", "column", "row"]}
            >
              <Image src="/ine1.png" alt="ine" />
              <Flex direction="column" fontSize="2xl">
                <Text>Use it to:</Text>
                <UnorderedList lineHeight="8">
                  <ListItem>Authenticate your age on the internet</ListItem>
                  <ListItem>Sign legal contracts</ListItem>
                  <ListItem>
                    Financial and credit application processes with identity
                    verification (Reusable KYC)
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
            <Text fontSize="4xl" fontWeight="bold" textAlign="center">
              Use your Digital Identifier
            </Text>

            <Flex
              mt="12"
              gap={[8, 8, 4]}
              direction={["column", "column", "row"]}
            >
              <Flex direction="column" fontSize="2xl">
                <UnorderedList lineHeight="8">
                  <ListItem>
                    To access online services anonymously or with FULL KYC
                  </ListItem>
                  <ListItem>
                    Chat with other citizen or institutional identities in an
                    authenticated or unauthenticated manner
                  </ListItem>
                  <ListItem>Sign contracts between identities</ListItem>
                </UnorderedList>
              </Flex>
              <Image src="/cara1.png" alt="cara" />
            </Flex>

            <Text fontSize="4xl" fontWeight="bold" textAlign="center">
              With Ci.Go (PoC) manage your citizen identity <br /> credentials
              and any other. <br />{" "}
              <Text as="span" fontSize="xl" fontWeight="base">
                (Currently Mexico)
              </Text>
            </Text>

            <Flex
              mt="12"
              gap={[8, 8, 8, 4]}
              direction={["column", "column", "column", "row"]}
            >
              <Image src="/caras2.png" alt="ine" />
              <Flex direction="column" fontSize="2xl">
                <Text>Your internet-ready legal identity, which is:</Text>
                <UnorderedList lineHeight="8">
                  <ListItem>Private</ListItem>
                  <ListItem>Self-managed</ListItem>
                  <ListItem>Trackable (by you)</ListItem>
                  <ListItem>Revocable (by you)</ListItem>
                  <ListItem>Legal</ListItem>
                  <ListItem>Safe</ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>

          <Flex my="24" direction="column" color="white" gap="12">
            <Text fontSize="4xl" fontWeight="bold" textAlign="center">
              Why do we exist?
            </Text>
            <Flex
              alignItems="center"
              gap={[8, 8, 4]}
              direction={["column", "column", "row"]}
            >
              <Text>
                Resilient, democratizable and public technologies are required
                to satisfy a global infrastructure which all human beings will
                use and need.
              </Text>
              <Flex wrap="wrap">
                <Flex
                  w="50%"
                  direction="column"
                  px="8"
                  textAlign="center"
                  mt="4"
                >
                  <Text fontWeight="bold" fontSize="2xl">
                    1.5 M
                  </Text>
                  <Text fontSize="sm">
                    of Mexicans do not enjoy their right to identity
                  </Text>
                </Flex>
                <Flex
                  w="50%"
                  direction="column"
                  px="8"
                  textAlign="center"
                  mt="4"
                >
                  <Text fontWeight="bold" fontSize="2xl">
                    98 M
                  </Text>
                  <Text fontSize="sm">of Mexicans have a physical INE</Text>
                </Flex>
                <Flex
                  w="50%"
                  direction="column"
                  px="8"
                  textAlign="center"
                  mt="4"
                >
                  <Text fontWeight="bold" fontSize="2xl">
                    230 M
                  </Text>
                  <Text fontSize="sm">Worldwide</Text>
                </Flex>
                <Flex
                  w="50%"
                  direction="column"
                  px="8"
                  textAlign="center"
                  mt="4"
                >
                  <Text fontWeight="bold" fontSize="2xl">
                    88 M
                  </Text>
                  <Text fontSize="sm">Mexican internet users</Text>
                </Flex>
                <Flex
                  w="full"
                  direction="column"
                  px="8"
                  textAlign="center"
                  mt="4"
                >
                  <Text fontWeight="bold" fontSize="2xl">
                    266.5 M USD
                  </Text>
                  <Text fontSize="sm">Reusable KYC Market Value by 2027</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex my="24" direction="column" color="white" gap="12">
            <Text fontSize="4xl" fontWeight="bold" textAlign="center">
              We build ecosystems that solve the most difficult problems on the
              web, validating every step of the way.
            </Text>

            <Text fontSize="3xl" fontWeight="bold">
              Awards and Validations in International Hackathons
            </Text>

            <Flex w="full" justifyContent="center">
              <OrderedList fontSize="xl">
                <ListItem>
                  🎖️ Standout{" "}
                  <Text as="span" fontWeight="bold">
                    Web3athon 2022
                  </Text>{" "}
                  by{" "}
                  <Text as="span" fontWeight="bold">
                    CRADL
                  </Text>{" "}
                  and{" "}
                  <Text as="span" fontWeight="bold">
                    CoinDesk
                  </Text>{" "}
                  - <br /> September 2022 🇺🇸
                </ListItem>
                <ListItem>
                  🥇 Winners{" "}
                  <Text as="span" fontWeight="bold">
                    ITU UN | DGA KSA
                  </Text>{" "}
                  - <br /> Immersive Public Services - January 2023 🇺🇳🇸🇦
                </ListItem>
                <ListItem>
                  🥇 Winners{" "}
                  <Text as="span" fontWeight="bold" mr="4">
                    Polkadot Global Hackathon Series: APAC Edition 2023
                  </Text>
                  <br /> - Massive Adoption - September 2023 🇰🇷
                </ListItem>
              </OrderedList>
            </Flex>
          </Flex>

          <Flex
            my="24"
            direction="column"
            color="white"
            gap="12"
            overflowX="auto"
            minHeight="680px"
          >
            <Text fontWeight="bold" textAlign="center">
              ROADMAP
            </Text>
            <Text textAlign="center">
              We started building without stopping iterating since June 2023,
              Ci.Go has a timeline for a proof of concept ready for <br />{" "}
              December 2023
            </Text>

            <Flex w="full" mt="28" minW="1024px">
              <Flex
                alignItems="center"
                direction="column"
                gap={4}
                position="relative"
              >
                <Flex
                  w="50%"
                  h="12"
                  backgroundColor="transparent"
                  borderRight="2px dashed #ccc"
                  position="absolute"
                  left="0"
                  top="80px"
                />
                <Flex
                  rounded="full"
                  border="12px solid #ccc"
                  bgColor={UI_CONTROLS_BG}
                  w="14"
                  h="14"
                  transform="translateY(43px)"
                />
                <Flex
                  direction="column"
                  gap={2}
                  borderTop="2px dashed #ccc"
                  pt="12"
                >
                  <Text fontWeight="bold" fontSize="lg">
                    June 2023
                  </Text>

                  <UnorderedList fontSize="sm">
                    <ListItem>
                      INE Digital Creation Testing with <br /> Third Party
                      Validators.
                    </ListItem>
                    <ListItem>
                      Verification and log in <br /> testing with digital INE
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>

              <Flex
                alignItems="center"
                direction="column"
                gap={4}
                position="relative"
                transform="translateY(83px)"
              >
                <Flex
                  w="50%"
                  h="12"
                  backgroundColor="transparent"
                  borderRight="2px dashed #ccc"
                  position="absolute"
                  left="0"
                  top="-59px"
                />
                <Flex
                  rounded="full"
                  border="12px solid #ccc"
                  bgColor={UI_CONTROLS_BG}
                  zIndex="1"
                  w="14"
                  h="14"
                  transform="translateY(-37px)"
                />
                <Flex
                  direction="column"
                  gap={2}
                  borderBottom="2px dashed #ccc"
                  pb="14"
                  transform="translateY(-264px)"
                >
                  <Text fontWeight="bold" fontSize="lg">
                    October 2023 <br /> HUB Legal
                  </Text>

                  <UnorderedList fontSize="sm">
                    <ListItem>Signing contracts with multi-signature</ListItem>
                    <ListItem>Document signature verification</ListItem>
                    <ListItem>Cross-identity chat</ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>

              <Flex
                alignItems="center"
                direction="column"
                gap={4}
                position="relative"
              >
                <Flex
                  w="50%"
                  h="12"
                  backgroundColor="transparent"
                  borderRight="2px dashed #ccc"
                  position="absolute"
                  left="0"
                  top="80px"
                />
                <Flex
                  rounded="full"
                  border="12px solid #ccc"
                  bgColor={UI_CONTROLS_BG}
                  w="14"
                  h="14"
                  transform="translateY(43px)"
                />
                <Flex
                  direction="column"
                  gap={2}
                  borderTop="2px dashed #ccc"
                  pt="12"
                >
                  <Text fontWeight="bold" fontSize="lg">
                    November 2023 <br /> Peranto HUB for attesters
                  </Text>

                  <UnorderedList fontSize="sm">
                    <ListItem>
                      Linking identities to <br /> EVM accounts
                    </ListItem>
                    <ListItem>
                      Invitation to beta <br /> testers from all areas
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>

              <Flex
                alignItems="center"
                direction="column"
                gap={4}
                position="relative"
                transform="translateY(83px)"
              >
                <Flex
                  w="50%"
                  h="12"
                  backgroundColor="transparent"
                  borderRight="2px dashed #ccc"
                  position="absolute"
                  left="0"
                  top="-59px"
                />
                <Flex
                  rounded="full"
                  border="12px solid #ccc"
                  bgColor={UI_CONTROLS_BG}
                  zIndex="1"
                  w="14"
                  h="14"
                  transform="translateY(-37px)"
                />
                <Flex
                  direction="column"
                  gap={2}
                  borderBottom="2px dashed #ccc"
                  pb="14"
                  transform="translateY(-264px)"
                >
                  <Text fontWeight="bold" fontSize="lg">
                    December 2023 <br /> Digital HUB
                  </Text>

                  <UnorderedList fontSize="sm">
                    <ListItem>Signing contracts with multi-signature</ListItem>
                    <ListItem>Document signature verification</ListItem>
                    <ListItem>Cross-identity chat</ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            gap={12}
            alignItems="center"
            color="white"
            mb="40"
          >
            <Text fontSize="3xl" fontWeight="bold">
              TEAM
            </Text>

            <Flex direction="column" gap={4} alignItems="center" lineHeight="3">
              <Image src="/ceo.png" rounded="lg" w="300px" shadow="dark-lg" />
              <Text fontWeight="bold" fontSize="lg" mt="4">
                Edgar Salinas - Founder & CEO
              </Text>
              <Text fontSize="sm">
                <Link
                  color="white"
                  href="https://www.linkedin.com/in/edgardanielsalinasledesma/"
                >
                  https://www.linkedin.com/in/edgardanielsalinasledesma/
                </Link>
              </Text>
              <Text fontSize="sm">X: gentle_humano</Text>
              <Text>
                Determined to change how digital and analog identities operate.
              </Text>
            </Flex>
          </Flex>

          <Flex
            w="full"
            justifyContent="space-between"
            bgColor="#1E1E1E"
            py={6}
            px={8}
            roundedTop="md"
            shadow="md"
            color="white"
            border="1px solid white"
            direction={["column", "column", "row"]}
            gap={[8, 8, 0]}
          >
            <Flex direction="column" lineHeight="6">
              <Text fontWeight="semibold">peranto 2023</Text>
              <Text>Made with love in México. </Text>
              <br />
              <Text>X: peranto_mex </Text>
              <Text>email: services@peranto.xyz</Text>
            </Flex>
            <Flex>
              <PerantoLogoShort />
            </Flex>
            <Flex direction="column">
              <Flex alignItems="center">
                <Text fontWeight="semibold">Art by</Text>
                <Image src="/criptoStreetLogo.png" w="108px" />
              </Flex>
              <Text>instagram: @cripto_street</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
