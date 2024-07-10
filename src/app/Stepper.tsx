"use client"

import React from "react";
import { Stepper, Step, Button } from "./MTailwind";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
      {/* @ts-expect-error shits fucked */}
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        {/* @ts-expect-error shits fucked */}
        <Step onClick={() => setActiveStep(0)}>1</Step>
        {/* @ts-expect-error shits fucked */}
        <Step onClick={() => setActiveStep(1)}>2</Step>
        {/* @ts-expect-error shits fucked */}
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <div className="mt-16 flex justify-between">
        {/* @ts-expect-error shits fucked */}
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        {/* @ts-expect-error shits fucked */}
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}