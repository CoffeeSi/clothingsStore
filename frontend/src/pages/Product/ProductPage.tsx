import { Header } from "@/components/layout/Header";
import { Category } from "@/components/product/Category";
import { Filters } from "@/components/product/Filters";
import { ProductBox } from "@/components/product/ProductBox/ProductBox";


export const ProductPage = () => {
  const CATEGORIES = ["NEW", "BEST SELLERS", "SHIRTS", "T-SHIRTS", "POLO SHIRTS", "JEANS", "SHORTS", "JACKETS", "SUITS", "COATS"];

  return (
    <>
      <Header />
      {/* px-12 xl:px-64 lg:px-26 md:px-8 */}
      <div className="main flex justify-center">
      <div className="flex flex-nowrap max-w-236 gap-10 duration-1000">
        <Filters />
        <div className="products flex w-full">
          <div className="flex flex-col">
            <div className="path text-[14px] font-thin">Home/<b>Products</b></div>
            <div className="label text-[24px] font-bold">PRODUCTS</div>
            <div className="search-cat flex gap-8">
              <div className="search">
                <img className="absolute pl-2 pt-2 z-0" src="./src/assets/search.svg"></img>
                <input className="bg-[#D9D9D9] h-10 not-read-only: pl-8 rounded-xs" placeholder="Search" type="text"></input>
              </div>
              <Category categories={CATEGORIES}/>
            </div>
            <div className="pt-8"></div>
            <div className="product-grid flex justify-between flex-wrap w-full">
              <ProductBox title="Minecraft sweatshirt" price="49.99" a="1.jpg" />
              <ProductBox title="Persian Cat sweatshirt" price="89.99" a="2.png" />
              <ProductBox title="Lana Del Rey sweatshirt" price="9.99" a="3.png" />
              <ProductBox title="Minecraft sweatshirt" price="49.99" a="1.jpg" />
              <ProductBox title="Persian Cat sweatshirt" price="89.99" a="2.png" />
              <ProductBox title="Lana Del Rey sweatshirt" price="9.99" a="3.png" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}