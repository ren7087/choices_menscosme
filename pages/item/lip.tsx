import React from "react";
import StyledCard from "../components/molecules/styledCard";

const lip = () => {
  return (
    <div>
      <StyledCard
        label={"カートに追加する"}
        price={"1000"}
        size={"100"}
        borderRadius={"20px"}
        width={"90%"}
        color={"#F8C4CF"}
        backgroundColor={"#F8C4CF"}
        fontWeight={"bold"}
        marginTop={"15px"}
        marginRight={"15%"}
        marginLeft={"5%"}
        margin={"5%"}
        onClick={function (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default lip;
