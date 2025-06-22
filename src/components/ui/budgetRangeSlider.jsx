import * as Slider from '@radix-ui/react-slider';

export default function BudgetRangeSlider({ value, onChange ,maxValue,minValue}) {
  return (
    <Slider.Root
      className="relative flex items-center select-none touch-none w-full h-6"
      value={value} // Two values = two thumbs
      max={maxValue}
      min={minValue}
      step={1000}
      minStepsBetweenThumbs={1} // prevents overlap
      onValueChange={onChange}
    >
      <Slider.Track className="bg-gray-300 relative grow rounded-full h-[4px]">
        <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
      </Slider.Track>

      {/* Thumb 1 (min) */}
      <Slider.Thumb
        className="block w-5 h-5 bg-[#7289da] rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Minimum value"
      />

      {/* Thumb 2 (max) */}
      <Slider.Thumb
        className="block w-5 h-5 bg-[#7289da] rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Maximum value"
      />
    </Slider.Root>
  );
}
