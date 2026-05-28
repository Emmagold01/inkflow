import { useState } from "react";
import { openTallyForm } from "../utils/tally";

export default function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-25">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-playfair mb-5 max-w-lg text-[40px] md:text-[52px] leading-[1.15] font-extrabold">
          Your story deserves to be{" "}
          <span className="from-coral to-amber bg-linear-to-r bg-clip-text font-extrabold text-transparent">
            read.
          </span>
        </h2>
        <p className="text-muted mb-10 max-w-xl text-[16px] md:text-[17px] leading-[1.7]">
          Join hundreds of Nigerian authors getting early access to Inkflow. Be
          first to publish when we launch.
        </p>
        <div className="mx-auto flex w-full max-w-md gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card border-fbord md:text-md focus:border-coral flex-1 rounded-xl border px-4 py-3 text-sm text-white outline-0 focus:text-white"
            type="email"
            placeholder="your@email.com"
          />
          <button 
            onClick={() => openTallyForm(email)}
            className="from-coral to-amber cursor-pointer shrink-0 rounded-xl bg-linear-to-r px-7 py-3 text-xs font-bold transition-all duration-200 hover:brightness-80 md:text-[14px]"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
}
