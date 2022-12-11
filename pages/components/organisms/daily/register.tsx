import {
  Box,
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import EyeCard from "../../molecules/card/eyeCard";
import HairCard from "../../molecules/card/hairCard";
import LipCard from "../../molecules/card/lipCard";
import PerfumeCard from "../../molecules/card/perfumeCard";
import SkinCard from "../../molecules/card/skinCard";
import SendIcon from "@mui/icons-material/Send";

import "react-datepicker/dist/react-datepicker.css";
import { DatePickerOriginal } from "../../molecules/datePickerOriginal";

import { gql, useMutation } from "@apollo/client";

import { CreateQuestionnairesMutation } from "../../../../queries/queries";

const Register = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#f7f7f7" : "#f7f7f7",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [startDate, setStartDate] = useState(new Date());
  const [CreateQuestionnaires, { error }] = useMutation(
    CreateQuestionnairesMutation
  );

  const [agreement, setAgreement] = useState<number>(3);
  const [userId, setUserId] = useState<string>("");
  const [feeling, setFeeling] = useState<number>(3);
  const [date, setDate] = useState<string>("");
  const [lip, setLip] = useState<boolean>(false);
  const [eye, setEye] = useState<boolean>(false);
  const [hair, setHair] = useState<boolean>(false);
  const [perfume, setPerfume] = useState<boolean>(false);
  const [skin, setSkin] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CreateQuestionnaires({
      variables: {
        agreement: agreement,
        userId: userId,
        feeling: feeling,
        date: date,
        lip: lip,
        eye: eye,
        hair: hair,
        perfume: perfume,
        skin: skin,
      },
    });
  };

  //   TODO eの型を定義する
  const handleChangeAgreement = (newAgreement: any): void => {
    setAgreement(newAgreement);
  };
  const handleChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  //   TODO eの型を定義する
  const handleChangeFeeling = (newFeeling: any) => {
    setFeeling(newFeeling);
  };

  console.log(lip);
  return (
    <div
      style={{ margin: "3%", width: "90%", height: "100%", marginTop: "10px" }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "100%",
            height: 650,
            backgroundColor: "#f7f7f7",
          }}
          style={{ textAlign: "center" }}
        >
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              paddingTop: "20px",
              paddingBottom: "20px",
              color: "#bc5c46",
            }}
          >
            メイク登録フォーム
          </Typography>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <div style={{ marginLeft: "10%" }}>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                    paddingTop: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  メイクの納得度
                </Typography>
                <Rating
                  precision={1.0}
                  name="agreement"
                  onChange={(event, newAgreement) => {
                    handleChangeAgreement(newAgreement);
                  }}
                  value={agreement}
                />
              </div>
              <div style={{ marginLeft: "10%" }}>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                    paddingTop: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  その日の気分
                </Typography>
                <Rating
                  precision={1.0}
                  name="feeling"
                  onChange={(event, newFeeling) => {
                    handleChangeAgreement(newFeeling);
                  }}
                  value={feeling}
                />
              </div>
              {/* TODO 一旦userId直書き */}
              <div>
                <TextField
                  id="userId"
                  label="userID"
                  variant="outlined"
                  name="userId"
                  value={userId}
                  onChange={handleChangeUserId}
                />
              </div>
            </div>
            <div style={{ width: "50%", marginTop: "5%" }}>
              <DatePickerOriginal setDate={setDate} />
            </div>
          </div>
          <div>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                paddingTop: "20px",
                paddingBottom: "10px",
              }}
            >
              使用したアイテム
            </Typography>
            <Grid
              container
              spacing={0.5}
              style={{ backgroundColor: "#f7f7f7" }}
            >
              <Grid item xs={2.4}>
                <Item
                  style={{ boxShadow: "none" }}
                  onClick={() => {
                    setLip(!lip);
                  }}
                >
                  {lip === true ? (
                    <LipCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"0px"}
                    />
                  ) : (
                    <LipCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"3px solid red"}
                    />
                  )}
                </Item>
              </Grid>
              <Grid item xs={2.4}>
                <Item
                  style={{ boxShadow: "none" }}
                  onClick={() => {
                    setEye(!eye);
                  }}
                >
                  {eye === true ? (
                    <EyeCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"0px"}
                    />
                  ) : (
                    <EyeCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"3px solid red"}
                    />
                  )}
                </Item>
              </Grid>
              <Grid item xs={2.4}>
                <Item
                  style={{ boxShadow: "none" }}
                  onClick={() => {
                    setHair(!hair);
                  }}
                >
                  {hair === true ? (
                    <HairCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"0px"}
                    />
                  ) : (
                    <HairCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"3px solid red"}
                    />
                  )}
                </Item>
              </Grid>
              <Grid item xs={2.4}>
                <Item
                  style={{ boxShadow: "none" }}
                  onClick={() => {
                    setPerfume(!perfume);
                  }}
                >
                  {perfume === true ? (
                    <PerfumeCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"0px"}
                    />
                  ) : (
                    <PerfumeCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"3px solid red"}
                    />
                  )}
                </Item>
              </Grid>
              <Grid item xs={2.4}>
                <Item
                  style={{ boxShadow: "none" }}
                  onClick={() => {
                    setSkin(!skin);
                  }}
                >
                  {skin === true ? (
                    <SkinCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"0px"}
                    />
                  ) : (
                    <SkinCard
                      textAlign={"center"}
                      marginTop={"-30px"}
                      fontWeight={"bold"}
                      border={"3px solid red"}
                    />
                  )}
                </Item>
              </Grid>
            </Grid>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              style={{ backgroundColor: "#bc5c46", height: "50px" }}
              type="submit"
            >
              登録する
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default Register;
