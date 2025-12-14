type PaymentStatus = "NOT_YET" | "PENDING" | "PAID";

interface Payment {
  id: number;
  paymentStatus: PaymentStatus;
  paymentDueDate: string;
  requestedAt: string | null;
  pendingAt: string | null;
  paidAt: string | null;
  memo: string | null;
  sourcingFiles: unknown[];
  financeFiles: unknown[];
}

type PaymentBreakdownType = "ITEM";

interface PaymentBreakdown {
  id: string;
  type: PaymentBreakdownType;
  shippedQuantity: number;
  unitPrice: number;
  amount: number;
  itemId: number;
  paymentId: number;
}

export type { Payment, PaymentBreakdown };
