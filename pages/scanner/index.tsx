import { Button, Container } from "@mui/material";
import { useState } from "react";
import { QrCodeReader } from "./scan";

export default function Index(): JSX.Element {
  const [isOpenQRCamera, setIsOpenQRCamera] = useState<boolean>(false);
  const [qrResult, setQrResult] = useState<any>({});

  const clickOpenQrReader = () => {
    setIsOpenQRCamera(true);
  };

  return (
    <Container
      maxWidth="md"
      style={{ paddingTop: "1em", paddingBottom: "10em" }}
    >
      <Button onClick={clickOpenQrReader}>test</Button>
      {isOpenQRCamera && (
        <QrCodeReader
          onRead={(e) => {
            setIsOpenQRCamera(false);
            console.log(e);
          }}
          setOpen={setIsOpenQRCamera}
        />
      )}
    </Container>
  );
}
