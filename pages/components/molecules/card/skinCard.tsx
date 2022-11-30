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
const SkinCard: FC<Props> = (props) => {
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
        backgroundColor: "#DBA1B2",
        width: "auto",
        margin: "5%",
      }}
    >
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
