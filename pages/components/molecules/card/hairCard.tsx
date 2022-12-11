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
  border?: any;
};

/**
 * 汎用的なボタンコンポーネント.
 */
const HairCard: FC<Props> = (props) => {
  const {
    color = "#fff",
    textAlign,
    marginTop,
    marginLeft,
    fontWeight,
    borderRadius,
    width,
    border,
  } = props;

  const selectedStyle = {
    borderRadius: "20px",
    backgroundColor: "#F8C4CF",
    width: "auto",
    margin: "5%",
    border,
  };

  const imageStyle = {
    borderRadius,
    width,
  };

  const fontStyle = {
    fontWeight,
    marginTop,
    textAlign,
    color,
  };

  return (
    <Card sx={{ maxWidth: 400 }} style={selectedStyle}>
      <CardActionArea>
        <Image
          src={"/img/category/hairoil.png"}
          height="150"
          width="150"
          alt="lip"
          style={imageStyle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={fontStyle}>
            Hair
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HairCard;
