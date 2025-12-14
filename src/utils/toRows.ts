import _ from 'lodash';

import type { MockResponse } from '@/types/responses';
import type { TableRow } from '@/types/table';

const toRows = (mockData?: MockResponse): TableRow[] => {
  if (!mockData) return [];

  return _.map(mockData.consumptions, c => ({
    id: c.id,
    styleNo: `${c.salesOrder.styleNumber}-${c.salesOrder.styleCode}`,
    supplierItemNo: c.supplierItemCode,
    fabricName: c.fabricName,
    fabricColor: c.colorName,
    orderQty: c.orderQuantity,
    unit: c.unit,
    unitPrice: c.unitPrice,
    amount: c.orderAmount,
    groupKey: c.supplierItemCode,
  }));
};

export default toRows;
