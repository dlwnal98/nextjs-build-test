import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

export interface tableData {
  theader: {
    title: string;
    dateNote: string;
  };
  data: {
    type: string;
    count: number;
  }[];
}

//테이블 카드마다 데이터 바인딩하고 있어서 api연동한다고 했을 때 데이터를 어떻게 줄 지 확정되면 다시 고치기

export default function Table({ data }: { data: tableData }) {
  return (
    <>
      <TableCard data={data} />
      <TableForm />
    </>
  );
}

export function TableCard({ data }: { data: tableData }) {
  return (
    <div>
      <div className="inline-block border border-[#DDE2E7] rounded-[12px] overflow-hidden pb-[8px]">
        <table className="border-hidden border-collapse px-[12px] w-[600px] text-[#495364]">
          <caption>
            <div className="flex items-center justify-between w-[100%] border-[#DDE2E7] border-b p-[12px] font-bold navy-button-theme">
              <p className="flex items-center">
                <BiPhoneCall className="mr-[5px]" />
                {data.theader.title}
              </p>
              <p className="flex items-center">
                <AiOutlineExclamationCircle className="mr-[5px]" />
                {data.theader.dateNote}
              </p>
            </div>
          </caption>
          <colgroup>
            <col width="80%" />
            <col width="20%" />
          </colgroup>
          <thead className=" border-[#DDE2E7] border-b">
            <tr className="text-[#495364]">
              <th className="p-[12px]">상담유형</th>
              <th className="p-[12px]">총 상담 건 수</th>
            </tr>
          </thead>
          <tbody className="max-h-[130px] overflow-y-scroll">
            {data.data.map((item, index) => (
              <tr key={index}>
                <td className="p-[12px]">{item.type}</td>
                <td className="p-[12px] text-center">{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TableForm() {
  return (
    <div>
      <table className="border-collapse border border-[#DDE2E7] table-fixed">
        <caption>고객정보</caption>
        <colgroup>
          <col width="11%" />
          <col width="180px" />
          <col width="8%" />
          <col width="210px" />
          <col width="8%" />
          <col width="210px" />
        </colgroup>
        <tbody>
          <tr>
            <th className="p-[8px]">고객명</th>
            <td className="py-[4px] px-[8px]">
              <input
                type="text"
                className="w-[120px] h-[32px] rounded-[5px] border border-[#DDE2E7] outline-none py-[3px] px-[8px]"
              />
              <button className="blue-button-theme h-[32px] p-[8.5px] rounded-[5px] font-bold text-[14px] ml-[5px]">
                <FaMagnifyingGlass />
              </button>
            </td>

            <th>휴대폰</th>
            <td className="py-[4px] px-[8px]">
              <input
                type="text"
                className="w-[120px] h-[32px] rounded-[5px] border border-[#DDE2E7] outline-none py-[3px] px-[8px]"
              />
              <button className="blue-button-theme h-[32px] p-[8.5px] rounded-[5px] font-bold text-[14px] ml-[5px]">
                <FaMagnifyingGlass />
              </button>
              <button className="red-button-theme h-[32px] p-[8.5px] rounded-[5px] font-bold text-[14px] ml-[5px]">
                <PiPhoneCallFill />
              </button>
            </td>
            <th>자택</th>
            <td className="py-[4px] px-[8px]">
              <input
                type="text"
                className="w-[120px] h-[32px] rounded-[5px] border border-[#DDE2E7] outline-none py-[3px] px-[8px]"
              />
              <button className="blue-button-theme h-[32px] p-[8.5px] rounded-[5px] font-bold text-[14px] ml-[5px]">
                <FaMagnifyingGlass />
              </button>
              <button className="red-button-theme h-[32px] p-[8.5px] rounded-[5px] font-bold text-[14px] ml-[5px]">
                <PiPhoneCallFill />
              </button>
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td colSpan={4} className="py-[4px] px-[8px]">
              <input
                type="text"
                className="w-[20%] h-[32px] mr-[5px] rounded-[5px] border border-[#DDE2E7] outline-none py-[3px] px-[8px]"
              />
              <input
                type="text"
                className="w-[70%] h-[32px] rounded-[5px] border border-[#DDE2E7] outline-none py-[3px] px-[8px]"
              />
              <button className="blue-button-theme h-[32px] p-[8.5px] rounded-[5px] font-bold text-[14px] mx-[5px]">
                <FaMagnifyingGlass />
              </button>
            </td>
            <td className="py-[4px] px-[8px]">
              <input
                type="text"
                className="w-[100%] h-[32px] rounded-[5px] border border-[#DDE2E7] outline-none py-[3px] px-[8px]"
              />
            </td>
          </tr>
          <tr>
            <th>고객등급</th>
            <td className="py-[4px] px-[8px] rounded-[5px]">
              <select className="w-[100%] rounded-[5px] border border-[#DDE2E7] py-[3px] px-[5px]">
                <option value="">안전</option>
              </select>
            </td>
            <th>이메일</th>
            <td colSpan={3} className="py-[4px] px-[8px]">
              <input
                type="text"
                className="w-[100%] h-[32px] rounded-[5px] border border-[#DDE2E7] outline-none py-[3px] px-[8px]"
              />
            </td>
          </tr>
          <tr>
            <th>고객메모</th>
            <td colSpan={5} className="py-[4px] px-[8px]">
              <textarea className="w-[100%] h-[120px] py-[3px] px-[8px] resize-none rounded-[5px] border border-[#DDE2E7] outline-none" />
            </td>
          </tr>
          <tr>
            <th>
              <Checkbox labelFor="1" inputId="1" labelName="수신동의" />
            </th>
            <td colSpan={3} className="py-[4px] px-[8px]">
              <Checkbox labelFor="2" inputId="2" labelName="전화" />
              <Checkbox labelFor="3" inputId="3" labelName="문자" />
              <Checkbox labelFor="4" inputId="4" labelName="개인정보활용동의" />
              <Checkbox labelFor="5" inputId="5" labelName="기타" />
              <Radio
                labelFor="6"
                inputId="6"
                inputName="radio"
                radioName="선택"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={6} className="py-[6px] px-[8px]" align="right">
              <button className="bg-[#819FB9] text-white py-[3px] px-[8px] rounded-[5px] mr-[5px]">
                초기화
              </button>
              <button className="bg-[#1E2633] text-white py-[3px] px-[8px] rounded-[5px]">
                저장
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
