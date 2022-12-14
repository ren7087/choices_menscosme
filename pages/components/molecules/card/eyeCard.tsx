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
const EyeCard: FC<Props> = (props) => {
  const {
    color = "#fff",
    textAlign,
    marginTop,
    marginLeft,
    fontWeight,
    borderRadius,
    width,
    border = "0px",
  } = props;

  const selectedStyle = {
    borderRadius: "20px",
    backgroundColor: "#F8DFD2",
    width: "auto",
    margin: "5%",
    border,
  };

  const imageStyle = {
    borderRadius,
    width,
  };

  const fontStyle: any = {
    fontWeight,
    marginTop,
    textAlign,
    color,
  };

  return (
    <Card sx={{ maxWidth: 800 }} style={selectedStyle}>
      <CardActionArea>
        <Image
          src={"/img/category/eye.png"}
          height="150"
          width="150"
          alt="lip"
          style={imageStyle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={fontStyle}>
            Eye
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EyeCard;
