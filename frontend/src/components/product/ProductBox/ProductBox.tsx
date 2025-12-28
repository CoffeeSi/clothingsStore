import type { ProductProps } from "./ProductBox.types"

export const ProductBox = (props: ProductProps) => (
  <>
    <div className="product-box w-[220px]">
      <div className="image">
        <img className="object-center object-cover w-[220px] h-[314px]" src={`./src/assets/sweatshirt${props.a}`}  />
      </div>
      <div className="pt-3 flex justify-between">
        <div className="title font-medium text-xs">{props.title}</div>
        <div className="price font-medium text-xs">$ {props.price}</div>
      </div>
    </div>
  </>
);