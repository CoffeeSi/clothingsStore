

export const Filters = () => (
  <div className="filters shrink-0 basis-53 flex-col hidden md:flex">
    <div className="font-bold">Filters</div>
    <div className="pt-4"></div>
    <div className="font-bold text-sm">Size</div>
    <div className="sizes flex gap-1">
      {["XS", "S", "M", "L", "XL", "2X"].map(size => (
        <button key={size} className="border w-8 h-8 text-sm font-medium">{size}</button>
      ))}
    </div>
  </div>
);