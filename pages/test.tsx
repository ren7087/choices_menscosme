import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

type imageUrl = {
  imageUrl: string;
};

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
  // レスポンスを格納するstate(商品名)
  const [itemName, setItemName] = useState<string>("");
  const [mediumImageUrls, setMediumImageUrls] = useState<imageUrl[]>([]);

  useEffect(() => {
    axios
      .get(
        // envは後述
        `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?
		applicationId=1047547279811101390
		&keyword=4901777316539
		&hits=1`
      )
      .then((response) => {
        // レスポンスデータを格納
        setItemName(response.data.Items[0].Item.itemName);
        setMediumImageUrls(response.data.Items[0].Item.mediumImageUrls);
        // ローディング終了
        setFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setFetching(false);
      });
  }, [itemName, mediumImageUrls]);

  return (
    <div>
      <h1>hello</h1>
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
    </div>
  );
};
export default useFetchData;
