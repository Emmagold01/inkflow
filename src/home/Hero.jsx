import { useState } from "react";
import { openTallyForm } from "../utils/tally";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-coral mb-8 inline-flex items-center space-x-1 rounded-full border border-[rgba(255,107,71,0.3)] bg-[rgba(255,107,71,0.12)] px-4 py-1.5 text-sm font-bold">
          <span className="mt-1 text-[9px] font-extrabold">NG</span>{" "}
          <span>Built for African Authors</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-playfair tracking-tight text-[2.5rem] md:text-7xl md:leading-20 font-extrabold">
            Publish your book.
            <br />
            <span className="from-coral to-amber bg-linear-to-r bg-clip-text text-transparent">
              Get paid in Naira.
            </span>
            <br />
            No VPN needed.
          </h1>

          <p className="text-muted mx-auto max-w-lg text-md md:text-lg leading-8">
            Inkflow is the first platform where Nigerian authors can publish
            ebooks and physical print-on-demand books — and get paid directly to
            their local bank account.
          </p>

          <div className="mx-auto mt-5 md:mt-9 flex max-w-120 w-full gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border-fbord text-sm md:text-md focus:border-coral flex-1 rounded-xl border px-4 py-3 text-white outline-0 focus:text-white"
              placeholder="Enter your email address"
            />
            <button 
              onClick={() => openTallyForm(email)}
              className="from-coral to-amber cursor-pointer rounded-xl bg-linear-to-r py-3 px-7 flex-nowrap text-xs md:text-[14px] font-bold transition-all duration-200 hover:brightness-80"
            >
              Join Waitlist
            </button>
          </div>
          <p className="text-md md:text-lg text-muted mt-3">
            Be among the first authors. <span className="text-coral font-bold">100% free to join.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
