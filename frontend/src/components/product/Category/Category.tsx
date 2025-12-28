import type { CategoryProps } from "./Catergory.types";

export const Category = (props: CategoryProps) => (
  <>
    <div className="categories">
      <div className="absolute grid grid-rows-2 grid-flow-col gap-x-2 gap-y-0.5">
        {props.categories.map((category, index) => (
          <a 
          key={index} 
          className="flex border border-[#D9D9D9] w-25 h-[23.75px] text-[10px] text-[#5E5E5E] whitespace-nowrap items-center justify-center" 
          href="#">
            {category}
          </a>    
        ))}
      </div>
    </div>
  </>
);
