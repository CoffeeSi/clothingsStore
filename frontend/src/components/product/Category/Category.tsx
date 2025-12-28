import type { CategoryProps } from "./Catergory.types";

export const Category = (props: CategoryProps) => (
  <>
    <a className="border py-1/3 text-[14px] font-light whitespace-nowrap text-center" href="#">{props.text}</a>    
  </>
);
