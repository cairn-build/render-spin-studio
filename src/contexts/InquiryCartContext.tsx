import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '@/types/Product';

interface InquiryCartState {
  items: Product[];
}

type InquiryCartAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_CART' };

interface InquiryCartContextType {
  state: InquiryCartState;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
}

const InquiryCartContext = createContext<InquiryCartContextType | null>(null);

const inquiryCartReducer = (state: InquiryCartState, action: InquiryCartAction): InquiryCartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Prevent duplicates
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export const InquiryCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(inquiryCartReducer, { items: [] });

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (productId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (productId: number) => {
    return state.items.some(item => item.id === productId);
  };

  return (
    <InquiryCartContext.Provider value={{ state, addItem, removeItem, clearCart, isInCart }}>
      {children}
    </InquiryCartContext.Provider>
  );
};

export const useInquiryCart = () => {
  const context = useContext(InquiryCartContext);
  if (!context) {
    throw new Error('useInquiryCart must be used within an InquiryCartProvider');
  }
  return context;
};