import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { useQuery } from "@apollo/client";
import { YourLipQuery } from "../../../queries/queries";

type imageUrl = {
  imageUrl: string;
};

type lip = {
  id: string;
  title: string;
  url: string;
  memo: string;
};

// Rakuten APIで用意されているエンドポイント
const BASE_URL =
  "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json";

const Index = () => {
  // ローディングする際に使うstate
  const [fetching, setFetching] = useState(false);
  // レスポンスを格納するstate(商品名)
  const [itemName, setItemName] = useState<string>("");
  const [mediumImageUrls, setMediumImageUrls] = useState<imageUrl[]>([]);

  // DBから取得したデータ
  const [dbItemName, setDbItemName] = useState<string>("");
  const [dbMediumImageUrls, setDbMediumImageUrls] = useState<imageUrl[]>([]);

  const [keyword, setKeyword] = useState<string>("");

  const { data, loading, error } = useQuery(YourLipQuery);

  //検索キーワード
  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  if (loading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress
          style={{
            textAlign: "center",
            marginTop: "20%",
            marginBottom: "20%",
            marginLeft: "50%",
          }}
        />
      </Box>
    );
  if (error) return <p>エラーが発生しています</p>;

  const researchRakuten = (value: string) => {
    if (value) {
      // ローディング開始
      setFetching(true);

      // apiコール
      axios
        .get(
          // envは後述
          `${BASE_URL}&keyword=${value}&page=1&applicationId=${process.env.NEXT_PUBLIC_RAKUTEN_APPLICATION_ID}`
        )
        .then((response) => {
          //   レスポンスデータを格納
          setItemName(response.data.Items[0].Item.itemName);
          setMediumImageUrls(response.data.Items[0].Item.mediumImageUrls);
          // ローディング終了
          setFetching(false);
        })
        .catch((error) => {
          console.log(error);
          setFetching(false);
        });
    } else {
      // nullの時はエラー
      console.log("検索条件を入力してください。");
      setFetching(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    researchRakuten(keyword);
  };

  return (
    <div>
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleChangeKeyword}
          value={keyword}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#bc5c46", height: "50px" }}
          type="submit"
        >
          検索する
        </Button>
      </form>
      <p>{itemName}</p>
      {mediumImageUrls[1] && (
        <Image
          src={mediumImageUrls[1].imageUrl}
          height="200"
          width="200"
          alt="lip"
        />
      )}
      {mediumImageUrls[1] == null ||
        (mediumImageUrls[1] == undefined && (
          <Image
            src={mediumImageUrls[0].imageUrl}
            height="200"
            width="200"
            alt="lip"
          />
        ))}
      {data.yourLips.map((lip: lip) => (
        <div key={lip.id}>
          <p>{lip.title}</p>
          <p>{lip.memo}</p>
          <p>{lip.url}</p>
        </div>
      ))}
    </div>
  );
};
export default Index;
