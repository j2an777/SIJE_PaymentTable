import type { GarmentSize, SalesOrder } from "./common";

interface Consumption {
  id: number;
  unitPrice: number;
  orderQuantity: number;
  orderAmount: number;
  fabricName: string;
  fabricClass: string;
  fabricDetail: string;
  supplierItemCode: string;
  brandItemCode: string | null;
  colorName: string;
  sopoNo: string;
  unit: string;
  garmentColorName: string;
  garmentSize: GarmentSize;
  salesOrder: SalesOrder;
}

export type { Consumption };
