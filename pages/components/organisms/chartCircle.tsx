import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { supabase } from "../../../utils/supabaseClient";
ChartJS.register(ArcElement, Tooltip, Legend);

export function ChartCircle() {
  const [recordsLip, setRecordsLip] = useState<[]>([]);
  const [recordsEye, setRecordsEye] = useState<[]>([]);
  const [recordsHair, setRecordsHair] = useState([]);
  const [recordsPerfume, setRecordsPerfume] = useState([]);
  const [recordsSkin, setRecordsSkin] = useState([]);

  const getRecordsLip = async () => {
    try {
      const { data, error }: any = await supabase
        .from("Questionnaires")
        .select("*")
        // .select("*", { count: "exact" })
        .match({ lip: true });
      if (error) throw error;
      setRecordsLip(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRecordsEye = async () => {
    try {
      const { data, error }: any = await supabase
        .from("Questionnaires")
        .select("*")
        .match({ eye: true });
      if (error) throw error;
      setRecordsEye(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRecordsHair = async () => {
    try {
      const { data, error }: any = await supabase
        .from("Questionnaires")
        .select("*")
        .match({ hair: true });
      if (error) throw error;
      setRecordsHair(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRecordsPerfume = async () => {
    try {
      const { data, error }: any = await supabase
        .from("Questionnaires")
        .select("*")
        .match({ perfume: true });
      if (error) throw error;
      setRecordsPerfume(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRecordsSkin = async () => {
    try {
      const { data, error }: any = await supabase
        .from("Questionnaires")
        .select("*")
        .match({ skin: true });
      if (error) throw error;
      setRecordsSkin(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecordsLip();
    getRecordsEye();
    getRecordsHair();
    getRecordsPerfume();
    getRecordsSkin();
  }, []);

  const chart = {
    labels: ["Lip", "Eye", "Hair", "Perfume", "Skin"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          recordsLip.length,
          recordsEye.length,
          recordsHair.length,
          recordsPerfume.length,
          recordsSkin.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chart} style={{ width: "50%" }} />;
}
