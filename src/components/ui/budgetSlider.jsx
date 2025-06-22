
import * as Slider from '@radix-ui/react-slider';

export default function BudgetSlider({ value, onChange }) {
  return (
    <Slider.Root
      className="relative flex items-center select-none touch-none w-[300px] h-5"
      value={[value]}
      max={100000}
      step={5000}
      onValueChange={(val) => onChange(val[0])}
    >
      <Slider.Track className="bg-gray-300 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 bg-[#7289da] rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Budget"
      />
    </Slider.Root>
  );
}
