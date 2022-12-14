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
const PerfumeCard: FC<Props> = (props) => {
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
    backgroundColor: "#ECA7B1",
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
    <Card sx={{ maxWidth: 400 }} style={selectedStyle}>
      <CardActionArea>
        <Image
          src={"/img/category/perfume.png"}
          height="150"
          width="150"
          alt="lip"
          style={imageStyle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={fontStyle}>
            Perfume
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PerfumeCard;
