function ProductBox(props) {

  return (
    <>
      <div className="product-box">
        <div className="image">
          <img className="object-center object-cover h-[314px] w-[265px]" src={`./src/assets/sweatshirt${props.a}`}  />
        </div>
        <div className="pt-3 flex justify-between">
          <div className="title font-medium text-xs">{props.title}</div>
          <div className="price font-medium text-xs">$ {props.price}</div>
        </div>
      </div>
    </>
  )
}

export default ProductBox