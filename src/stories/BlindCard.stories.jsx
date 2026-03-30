import { BlindCard } from "../components/BlindCard";

export default {
  title: 'Blinds/ProductCard', // This is the category in the sidebar
  component: BlindCard,
};

// This is the "Default" view of your card
export const Default = {
  args: {
    name: 'Classic Oak Blind',
    price: 125.00,
    color: 'Natural Wood',
  },
};

// You can add a "Sale" version too!
export const OnSale = {
  args: {
    name: 'Modern Grey Fabric',
    price: 85.00,
    color: 'Slate',
  },
};