'use client'

export interface StepperProps {
  total?: number;
  current: number;
}

export const Stepper = ({ total = 4, current }: StepperProps) => {

    // console.log("Current step from stepper :", current);
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center w-full ">
      {Array.from({ length: total }).map((_, i) => {
        const step = i + 1;
        const isCompleted = step < current;
        const isActive = step === current;
        const isNext = step > current;
        const isLast = step === total;

        return (
          <div key={i} className="flex items-center w-full">

            {/* Diamond shape */}
            <div className="relative flex items-center justify-center">

              {/* Highlight ring for active step */}
              {isActive && (
                <div
                  className="absolute bg-blue-100 rotate-45 "
                  style={{ width: 24, height: 24 }}
                />
              )}

              {/* Diamond */}
              <div
                className={`
                  relative rotate-45  transition-all duration-300
                  ${isActive ? "w-4 h-4 bg-blue-600" : ""}
                  ${isCompleted ? "w-4 h-4 bg-blue-600" : ""}
                  ${isNext ? "w-4 h-4 bg-transparent border-2 border-blue-600" : ""}
                `}
              />
            </div>

            {/* Connector line */}
            {!isLast && (
              <div
                className={`
                  h-px w-10 flex-1 transition-all duration-300
                  ${isCompleted ? "bg-blue-600" : ""}
                  ${isActive || isNext
                    ? "border-t-2 border-blue-600 border-dashed bg-transparent"
                    : ""
                  }
                `}
              />
            )}

          </div>
        );
      })}
    </div>

    </div>
  );
};