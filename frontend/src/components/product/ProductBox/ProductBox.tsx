import type { ProductProps } from "./ProductBox.types"

export const ProductBox = (props: ProductProps) => (
  <>
    <div className="product-box w-53 mb-10">
      <div className="image border border-[#D9D9D9]">
        <img className="object-center object-cover w-53 h-73" src={`./src/assets/sweatshirt${props.a}`}  />
      </div>
      <div className="pt-3 flex justify-between">
        <div className="title font-medium text-xs">{props.title}</div>
        <div className="price font-medium text-xs">$ {props.price}</div>
      </div>
    </div>
  </>
);