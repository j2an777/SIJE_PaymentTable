import type { Payment, PaymentBreakdown } from './payment';
import type { Consumption } from './consumptions';

interface MockResponse {
  payments: Payment[];
  consumptions: Consumption[];
  paymentBreakdowns: PaymentBreakdown[];
}

export { type MockResponse };
