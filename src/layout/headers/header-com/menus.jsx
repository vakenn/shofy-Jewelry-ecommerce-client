import React from "react";
import menu_data from "@/data/menu-data";
import Link from "next/link";
import Image from "next/image";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { HomeNewArrivalPrdLoader } from "@/components/loader";
import ErrorMsg from "@/components/common/error-msg";
import ProductItem from "@/components/products/electronics/product-item";

// internal
import insta_1 from '@assets/img/instagram/4/instagram-1.jpg';
import insta_3 from '@assets/img/instagram/4/instagram-3.jpg';
import insta_4 from '@assets/img/instagram/4/instagram-4.jpg';
import insta_6 from '@assets/img/instagram/4/instagram-6.jpg';

// instagram data 
const instagram_data = [
  { id: 1, link: 'https://www.instagram.com/', img: insta_1 },
  { id: 2, link: 'https://www.instagram.com/', img: insta_3 },
  { id: 3, link: 'https://www.instagram.com/', img: insta_4 },
  { id: 4, link: 'https://www.instagram.com/', img: insta_6 },
]
const Menus = () => {
  const { data: products, isError, isLoading } = useGetProductTypeQuery({
    type: 'electronics',
    query: 'new=true'
  });
  
  // decide what to render
  let content = null;
  
  if (isLoading) {
    content = (
      <HomeNewArrivalPrdLoader loading={isLoading} />
    );
  }
  
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
  
    content = (
      <div className="row">
        {product_items.slice(0, 4).map((item) => (
          <div key={item._id} className="col-md-3">
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    );
  } else {
    // If there are no products or an error occurs, set content to an empty array
    content = [];
  }
  return (
    <ul>
      {menu_data.map((menu) =>
        menu.products ? (
          <li key={menu.id} className="has-dropdown has-mega-menu ">
            <Link href={menu.link}>{menu.title}</Link>
            <ul className="tp-submenu tp-mega-menu mega-menu-style-2">
              {menu.product_pages.map((p, i) => (
                <li key={i} className="has-dropdown">
                  <Link href={p.link} className="mega-menu-title">
                    {p.title}
                  </Link>
                  <ul className="tp-submenu">
                    {p.mega_menus.map((m, i) => (
                      <li key={i}>
                        <Link href={m.link}>{m.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ) : menu.sub_menu ? (
          <li key={menu.id} className="has-dropdown">
            <Link href={menu.link}>{menu.title}</Link>
            <ul className="tp-submenu">
              {menu.sub_menus.map((b, i) => (
                <li key={i}>
                  <Link href={b.link}>{b.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Menus;
