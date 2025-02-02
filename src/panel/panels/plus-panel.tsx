import Ripple from "@/components/ui/ripple";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
// import { Button } from "@/components/ui/button";

const progressPlusValue = 10;

export default function PlusPanel() {
  return (
    <div className="PlusPanel flex flex-col w-full p-4 border rounded-lg">
      <div className="PlusPanel flex flex-col items-end">
        <h3 className="text-lg font-semibold mb-2">اشتراک شما</h3>
        <div className="HasPlus">
          <div className="PlusPlan mt-2 bg-background h-52 relative flex flex-col size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border-violet-800 border p-20 md:shadow-xl">
            <AnimatedCircularProgressBar
              className="flex justify-center items-center z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-white"
              max={30}
              min={0}
              value={progressPlusValue}
              gaugePrimaryColor="rgb(255 255 255)"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            />
            <Ripple />
          </div>
          <p className="mt-4 text-center">
            روزهای باقی‌مانده از اشتراک شما:{" "}
            <span className="font-bold">{progressPlusValue} روز</span>
          </p>
        </div>
        {/* DoesntHavePlus Here */}
        {/* <div className="DoesntHavePlus bg-background h-60 relative flex flex-col size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border-violet-800 border p-20 md:shadow-xl">
          <Button
            className="z-50 bg-transparent hover:bg-violet-800 hover:scale-105 transition-all duration-300 shadow-2xl shadow-violet-600"
            effect="shine"
          >
            خرید اشتراک پلاس
          </Button>
          <Ripple />
        </div> */}
      </div>
    </div>
  );
}
