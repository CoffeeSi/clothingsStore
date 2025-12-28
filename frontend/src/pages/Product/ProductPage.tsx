import { Header } from "@/components/layout/Header";
import { Category } from "@/components/product/Category";
import { ProductBox } from "@/components/product/ProductBox/ProductBox";


export const ProductPage = () => (
  <>
    <Header />
    <div className="main flex flex-nowrap px-12 xl:px-32 lg:px-24 md:px-8 duration-1000">
      <div className="filters shrink-0 basis-[340px] flex-col hidden md:flex">
        <div className="font-bold">Filters</div>
        <div className="pt-4"></div>
        <div className="font-bold text-sm">Size</div>
        <div className="sizes flex gap-1">
          <a className="border w-8 py-1 text-[16px] font-medium text-center" href="#">XS</a>
          <a className="border w-8 py-1 text-[16px] font-medium text-center" href="#">S</a>
          <a className="border w-8 py-1 text-[16px] font-medium text-center" href="#">M</a>
          <a className="border w-8 py-1 text-[16px] font-medium text-center" href="#">L</a>
          <a className="border w-8 py-1 text-[16px] font-medium text-center" href="#">XL</a>
        </div>
      </div>
      <div className="products flex w-full">
        <div className="flex flex-col">
          <div className="path text-[14px] font-thin">Home/<b>Products</b></div>
          <div className="label text-[24px] font-bold">Products</div>
          <div className="search-cat flex gap-8">
            <div className="search">
              <img className="absolute pl-2 pt-2 z-0" src="./src/assets/search.svg"></img>
              <input className="bg-[#D9D9D9] h-10 not-read-only: pl-8 rounded-sm" placeholder="Search" type="text"></input>
            </div>
            <div className="categories grid grid-rows-2 grid-flow-col gap-x-2 gap-y-0.5">
              <Category text="NEW" />
              <Category text="BEST SELLERS" />
              <Category text="SHIRTS" />
              <Category text="T-SHIRTS" />
              <Category text="POLO SHIRTS" />
              <Category text="JEANS" />
              <Category text="SHORTS" />
              <Category text="JACKETS" />
            </div>
          </div>
          <div className="pt-8"></div>
          <div className="product-grid flex justify-around flex-wrap w-full">
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
  </>
);