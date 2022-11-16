interface Props {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
}

const Switch = (props: Props) => {
  return (
    <label className="inline-flex relative items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={props.checked}
        onChange={(e) => {
          props.onChange?.(e.target.checked);
        }}
        disabled={props.disabled}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full   dark:bg-gray-700   after:content-[''] peer-checked:after:translate-x-full  after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
    </label>
  );
};

export default Switch;
