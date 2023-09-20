import { useContext, createContext, useState, ReactNode } from "react";

interface ItemCart {
  product: any;
  quantity: number;
}

interface CurrentOrderProviderProps {
  children: ReactNode;
}

interface CurrentOrderContextType {
  items: ItemCart[];
  addItem: Function;
  removeItem: Function;
  clearCart: Function;
}

export const CurrentOrderContext = createContext({} as CurrentOrderContextType);

export function CurrentOrderProvider({ children }: CurrentOrderProviderProps) {
  const [items, setItems] = useState<ItemCart[]>([]);

  const addItem = (product: any, quantity: number) => {
    const newItems: ItemCart[] = [...items];
    const itemIndex = newItems.findIndex((item: any) => item.id === product.id);

    if (itemIndex > -1) {
      newItems[itemIndex].quantity += quantity;
    } else {
      newItems.push({ product, quantity });
    }

    setItems(newItems);
  };

  const removeItem = (productId: string) => {
    setItems(items.filter((item: any) => item.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CurrentOrderContext.Provider
      value={{ addItem, items, removeItem, clearCart }}
    >
      {children}
    </CurrentOrderContext.Provider>
  );
}
