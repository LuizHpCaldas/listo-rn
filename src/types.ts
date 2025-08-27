export type Item = {
  id: number;
  name: string;
  price: number | null;
  inCart: boolean;
  addedAt: string;
  purchasedAt?: string | null;
};

export type List = {
  id: number;
  name: string;
  items: Item[];
  createdAt: string;
  completedAt: string | null;
};

export type Mode = "home" | "market";
