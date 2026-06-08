export default function Stats() {
  return (
    <section className="border-fbord bg-darkbg2/60 backdrop-blur-md my-3 border-t border-b">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-15">
        <div className="flex items-center justify-start lg:justify-center gap-12 md:gap-15 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="text-center shrink-0 snap-center min-w-35 md:min-w-0">
            <div className="from-coral to-amber bg-linear-to-r bg-clip-text text-[36px] font-extrabold text-transparent">
              ₦0
            </div>
            <div className="text-muted mt-xs text-sm">
              Upfront printing cost
            </div>
          </div>
          <div className="text-center shrink-0 snap-center min-w-35 md:min-w-0">
            <div className="from-coral to-amber bg-linear-to-r bg-clip-text text-[36px] font-extrabold text-transparent">
              54%
            </div>
            <div className="text-muted mt-xs text-sm">Avg royalty per sale</div>
          </div>
          <div className="text-center shrink-0 snap-center min-w-35 md:min-w-0">
            <div className="from-coral to-amber bg-linear-to-r bg-clip-text text-[36px] font-extrabold text-transparent">
              48hr
            </div>
            <div className="text-muted mt-xs text-sm">
              Book delivery in Lagos
            </div>
          </div>
          <div className="text-center shrink-0 snap-center min-w-35 md:min-w-0">
            <div className="from-coral to-amber bg-linear-to-r bg-clip-text text-[36px] font-extrabold text-transparent">
              Direct
            </div>
            <div className="text-muted mt-xs text-sm">Naira bank payouts</div>
          </div>
        </div>
      </div>
    </section>
  );
}
