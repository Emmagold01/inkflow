export default function Calc() {
  return (
    <section id="calc" className="bg-darkbg2 border-fbord border-t border-b px-7 lg:px-20 py-15">
      <div className="mx-auto grid max-w-6xl items-center grid-cols-1 lg:grid-cols-2 gap-15">
        <div>
          <div className="text-coral mb-3 text-xs font-bold tracking-widest uppercase">
            Royalty Calculator
          </div>

          <h2 className="font-playfair mb-4 lg:max-w-xs text-[30px] leading-[1.2] font-extrabold md:text-[38px]">
            See exactly what you earn.
          </h2>

          <p className="text-muted max-w-132 text-[15px] leading-[1.7]">
            No hidden fees. No surprises. Before you publish, Inkflow shows you
            the exact breakdown of every sale so you know your payout upfront.
          </p>
        </div>

        <div className="bg-card border-fbord rounded-3xl border p-8">
          <h3 className="text-muted mb-6 text-[14px] font-semibold">
            Example: Paperback priced at ₦5,000
          </h3>

          <div className="border-fbord flex text-sm items-center justify-between border-b py-3.5">
            <span className="text-muted">Reader pays</span>
            <span className="font-semibold">₦5,000</span>
          </div>
          <div className="border-fbord flex text-sm items-center justify-between border-b py-3.5">
            <span className="text-muted">Printing cost</span>
            <span className="font-semibold text-coral">− ₦1,800</span>
          </div>
          <div className="border-fbord flex text-sm tems-center justify-between border-b py-3.5">
            <span className="text-muted">Platform fee (10%)</span>
            <span className="font-semibold text-coral">− ₦500</span>
          </div>
          <div className="pt-5 flex items-center justify-between  py-3.5">
            <span className="text-[16px] font-semibold text-white">
              Your royalty
            </span>
            <span className="from-coral to-amber bg-linear-to-br bg-clip-text text-2xl font-bold text-transparent">
              ₦2,700
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
