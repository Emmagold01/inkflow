export default function Stats() {
  return (
    <section className="border-fbord bg-darkbg2 my-3 border-t border-b">
      <div className="mx-auto max-w-5xl px-15 py-12">
        <div className="flex flex-col items-center justify-center gap-15 md:flex-row">
          <div className="text-center">
            <div className="from-coral to-amber bg-linear-to-r bg-clip-text text-[36px] font-extrabold text-transparent">
              ₦0
            </div>
            <div className="text-muted mt-xs text-sm">
              Upfront printing cost
            </div>
          </div>
          <div className="text-center">
            <div className="from-coral to-amber bg-linear-to-r bg-clip-text text-[36px] font-extrabold text-transparent">
              54%
            </div>
            <div className="text-muted mt-xs text-sm">Avg royalty per sale</div>
          </div>
          <div className="text-center">
            <div className="from-coral to-amber bg-linear-to-r bg-clip-text text-[36px] font-extrabold text-transparent">
              48hr
            </div>
            <div className="text-muted mt-xs text-sm">
              Book delivery in Lagos
            </div>
          </div>
          <div className="text-center">
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
