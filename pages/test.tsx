import { useEffect, useState } from "react";
import axios from "axios";

// Rakuten APIで用意されているエンドポイント
const BASE_URL =
  "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json";

const useFetchData = () => {
  // エラーを管理するstate
  const [error, setError] = useState({
    freeWord: false,
  });
  // ローディングする際に使うstate
  const [fetching, setFetching] = useState(false);
  // レスポンスを格納するstate
  const [result, setResult] = useState({});

  useEffect(() => {
    axios
      .get(
        // envは後述
        `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?
		applicationId=1047547279811101390
		&keyword=4895248805373
		&hits=1`
      )
      .then((response) => {
        // レスポンスデータを格納
        setResult(response.data);
        // ローディング終了
        setFetching(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setFetching(false);
      });
  }, []);

  return <h1>hello</h1>;
};
export default useFetchData;
