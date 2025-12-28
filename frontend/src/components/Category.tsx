interface CategoryProps {
  text: string;
}

function Category(props: CategoryProps) {
  return (
    <>
      <a className="border py-1/3 text-[14px] font-light whitespace-nowrap text-center" href="#">{props.text}</a>    
    </>
  )
}

export default Category