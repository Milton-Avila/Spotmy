"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>,React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(({ className, ...props }, ref) => {
  
  const [hover, setHover] = React.useState(false);

  return <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    onMouseOver={() => (setHover(true))} 
    onMouseOut={() => setHover(false)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-lg bg-stone-700">
      <SliderPrimitive.Range id='x' className={"absolute h-full rounded-lg " + (hover ? 'bg-green-400' : 'bg-white')} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={"block size-4 rounded-full bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-slate-200 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-white " + (hover ? 'visible' : 'invisible')} />
  </SliderPrimitive.Root>

})
Slider.displayName = SliderPrimitive.Root.displayName


export { Slider }
