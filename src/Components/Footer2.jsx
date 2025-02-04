import { Avatar, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function Footer2() {
  return (
    <>
      {/* <Flex justifyContent={"space-around"}> */}
      <VStack p={"5%"} gap={"1rem"}>
        <Heading size={"sm"}>Follow</Heading>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"20%"}>
          <a href="https://www.facebook.com/share/1Aw1GkjPUB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://cdn-icons-png.flaticon.com/512/1312/1312139.png"
            />
          </a>

          <a href="https://www.linkedin.com/company/maktaba-manufacturers/" target="_blank" rel="noopener noreferrer">
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC"
            />
          </a>

          <a href="https://IndiaMART.in/Yx3PRzoP" target="_blank" rel="noopener noreferrer">
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://m.imimg.com/gifs/iml300.png"
            />
          </a>
          <a href="https://wa.me/c/918779877752" target="_blank" rel="noopener noreferrer">
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://yt3.googleusercontent.com/sgHvOYIO6-Qg_6UAMJK9bjMHzA3Nf5uneSMAmzUZuZrLqLttTdVwNXf0q5n2nBVecIZ_gsknCH0=s900-c-k-c0x00ffffff-no-rj"
            />
          </a>
        </Flex>
      </VStack>
      {/* <VStack p={"5%"} gap={"1rem"}>
        <Heading size={"sm"}>Contact</Heading>
        <Text>+91-9872348438</Text>
        <Text>+Yourgmail@gmail.com</Text>
        <Text size={"sm"}>06,Amsterdam,cize7</Text>
      </VStack> */}
      {/* </Flex> */}
      <Box p={"0 0 3rem 0"} textAlign={"center"}>
        <Text p={"0 0 1rem 0"}>Thissite.com</Text>
        <Text> ©2024 by Your company.</Text>
      </Box>
    </>
  );
}
