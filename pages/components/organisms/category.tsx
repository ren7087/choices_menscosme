import { Grid, styled, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  boxShadow: "none",
  cursor: "pointer",
}));

const Category: NextPage = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={4}>
        <Item>
          <Image
            className="hover"
            src="/img/category/eye.png"
            width={200}
            height={200}
            alt="eye"
          />
          <Typography
            variant="h6"
            style={{ marginTop: "-8%", fontWeight: "bold" }}
          >
            eye
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Image
            src="/img/category/hairoil.png"
            width={200}
            height={200}
            alt="eye"
          />
          <Typography
            variant="h6"
            style={{ marginTop: "-8%", fontWeight: "bold" }}
          >
            hairoil
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Image
            src="/img/category/perfume.png"
            width={200}
            height={200}
            alt="eye"
          />
          <Typography
            variant="h6"
            style={{ marginTop: "-8%", fontWeight: "bold" }}
          >
            perfume
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Image
            src="/img/category/lip.png"
            width={200}
            height={200}
            alt="eye"
          />
          <Typography
            variant="h6"
            style={{ marginTop: "-8%", fontWeight: "bold" }}
          >
            lip
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Image
            src="/img/category/skin.png"
            width={200}
            height={200}
            alt="eye"
          />
          <Typography
            variant="h6"
            style={{ marginTop: "-8%", fontWeight: "bold" }}
          >
            skin
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Category;
