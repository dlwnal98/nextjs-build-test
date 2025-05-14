import Table from "@/components/ui/Table";
import Toggle from "@/components/ui/Toggle";

export default function Home() {
  const consultationData = {
    theader: {
      title: "OB 상담유형 TOP5",
      dateNote: "전일 기준",
    },
    data: [
      { type: "도로 유지 관리", count: 312 },
      { type: "신호등 고장 신고", count: 248 },
      { type: "불법 주정차 문의", count: 190 },
      { type: "보행자 안전 문의", count: 162 },
      { type: "기타", count: 110 },
    ],
  };

  return (
    <div className="p-[200px]">
      <Table data={consultationData} />
      <Toggle />
    </div>
  );
}
