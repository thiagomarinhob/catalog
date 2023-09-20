import { ReactNode, createContext, useEffect, useState } from "react";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  getProducts: Function;
  loadProducts: Function;
  nextPage: string;
  prevPage: string;
}

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  function getProducts() {
    return products ? products : [];
  }

  async function loadProducts(link: string) {
    const response = await fetch(link);

    const data = await response.json();

    console.log(prevPage, nextPage);

    setProducts(data.products);
    setNextPage(data.links.next ? data.links.next : "");
    setPrevPage(data.links.prev ? data.links.prev : "");
  }

  useEffect(() => {
    loadProducts(
      "https://apivesti.vesti.mobi/appmarca/v2/catalogue/company/luckyjeans?page=1&perpage=60",
    );
  }, []);

  return (
    <ProductsContext.Provider
      value={{ getProducts, loadProducts, nextPage, prevPage }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
