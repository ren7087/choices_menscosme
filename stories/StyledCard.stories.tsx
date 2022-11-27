import type { ComponentStory, ComponentMeta } from "@storybook/react";
import StyledCard from "../pages/components/molecules/styledCard";

// storyのmetadataをdefault export
export default {
  title: "StyledCard", // コンポーネントのタイトル(任意)
  component: StyledCard, // 実際に使用するコンポーネント（上でimportしたもの）
} as ComponentMeta<typeof StyledCard>;

/// 1. Storybookで描画するためのコンポーネントの雛形を用意しておく
const Template: ComponentStory<typeof StyledCard> = (args) => (
  <StyledCard {...args} />
);

// 2. bindを用いて雛形を元にしたコピーを作成
// 名前付きエクスポートはデフォルトでストーリーオブジェクトを表す
export const Default: ComponentStory<typeof StyledCard> = Template.bind({});
Default.args = {
  borderRadius: "20px",
  label: "hello",
  fontWeight: "bold",
  marginTop: "5px",
  backgroundColor: "#F8C4CF",
  width: "80%",
  marginLeft: "5%",
};
Default.storyName = "リップ";
