import { CardActionArea, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";
import { MouseEventHandler, useMemo } from "react";
import { FC } from "react";

type Props = {
  textAlign?: string;
  marginTop?: string;
  marginLeft?: string;
  fontWeight?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * 汎用的なボタンコンポーネント.
 */
const LipCard: FC<Props> = (props) => {
  const {
    color = "#fff",
    textAlign,
    marginTop,
    marginLeft,
    fontWeight,
    borderRadius,
    width,
    onClick,
  } = props;

  const imageStyle = {
    borderRadius,
    width,
    marginLeft,
  };

  const fontStyle = {
    fontWeight,
    marginTop,
    textAlign,
    color,
  };

  return (
    <Card
      sx={{ maxWidth: 400 }}
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(255, 231, 217)",
        width: "100%",
        margin: "5%",
      }}
    >
      <CardActionArea>
        <Image
          src={"/img/category/lip.png"}
          height="150"
          width="150"
          alt="lip"
          style={imageStyle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={fontStyle}>
            Lip
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LipCard;
