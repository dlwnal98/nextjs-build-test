type RadioData = {
  labelFor: string;
  inputId: string;
  inputName: string;
  radioName: string;
};

export default function Radio(props: RadioData) {
  const { labelFor, inputId, inputName, radioName } = props;

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center cursor-pointer"
        htmlFor={labelFor}
      >
        <input
          name={inputName}
          type="radio"
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-[#2798FE] transition-all"
          id={inputId}
        />
        <span className="absolute bg-[#217FFD] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label className="ml-[5px]" htmlFor={labelFor}>
        {radioName}
      </label>
    </div>
  );
}
