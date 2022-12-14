import { CardActionArea, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";
import { MouseEventHandler, useMemo } from "react";
import { FC } from "react";

type Props = {
  marginTop?: string;
  fontWeight?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  border?: any;
};

/**
 * 汎用的なボタンコンポーネント.
 */
const SkinCard: FC<Props> = (props) => {
  const {
    color = "#fff",
    marginTop,
    fontWeight,
    borderRadius,
    width,
    border = "0px",
  } = props;

  const selectedStyle = {
    borderRadius: "20px",
    backgroundColor: "#DBA1B2",
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
    color,
  };

  return (
    <Card sx={{ maxWidth: 400 }} style={selectedStyle}>
      <CardActionArea>
        <Image
          src={"/img/category/skin.png"}
          height="150"
          width="150"
          alt="lip"
          style={imageStyle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={fontStyle}>
            Skin
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SkinCard;
