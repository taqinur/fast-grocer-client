import React, { useEffect, useState } from 'react';
import OfferProducts from '../../OnSale/OfferProducts';
import SingleProduct from './SingleProduct/SingleProduct';

const HomePageProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(` https://fg-server.vercel.app/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // console.log(products.slice(0, 4));

  // event handler for showing product on home page
  const handleShowProducts = (category) => {
    fetch(` https://fast-grocer-server.vercel.app/products/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data.allproducts))
  }

  return (
    <div className='bg-[#fbfff4db] my-20'>
      {/* Added Margin my-28 -by Taqi */}
      <h2 className='text-3xl text-center font-bold mb-2'>Our Featured Products</h2> 
      <hr />
      {/* <div className='border-b-[1px] border-gray-200 my-5 md:my-3'>
        <ul className='w-8/12 md:w-5/12 mx-auto flex justify-between h-40px'>
          <li className='inline-block'>
            <button onClick={() => handleShowProducts('vegetables')} className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Vegetables</button>
          </li>
          <li className='inline-block'>
            <button onClick={() => handleShowProducts('fruits')} className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Fruits</button>
          </li>
          <li className='inline-block'>
            <button onClick={() => handleShowProducts('vegetables')} className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Cookings</button>
          </li>
          <li className='hidden md:inline-block'>
            <button onClick={() => handleShowProducts('meat-fish')} className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Meat and Fish</button>
          </li>
          <li className='hidden md:inline-block'>
            <button onClick={() => handleShowProducts('vegetables')} className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Baby Care</button>
          </li>
        </ul>
      </div> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto py-10'>
        {
          products?.slice(1, 5)?.map(product => <SingleProduct
            key={product?._id}
            products={product}
          ></SingleProduct>)
        }
      </div>
       
    </div>
  );
};

export default HomePageProducts;