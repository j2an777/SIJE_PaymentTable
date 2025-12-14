interface User {
  id: number;
  name: string;
  engName: string;
  profileImage: string;
}

interface SalesOrder {
  id: number;
  styleNumber: string;
  styleCode: string;
  createUser: User;
}

interface GarmentSize {
  id: number;
  name: string;
  orderNum: number;
}

export type { User, SalesOrder, GarmentSize };
