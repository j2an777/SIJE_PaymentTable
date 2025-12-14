import { useMemo, useState } from 'react';

import type { Column, TableRow } from './types/table';
import Dropdown from './components/atoms/Dropdown';
import DataTable from './components/atoms/Table';
import { useGetMocks } from './hooks/query';
import toRows from './utils/toRows';
import './App.css';

function App() {
  const { data: mockData } = useGetMocks();
  const rows = useMemo(() => toRows(mockData), [mockData]);
  const [colors, setColors] = useState<'all' | 'lemon' | 'salmon'>();

  const money = (n: number) =>
    `$ ${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const columns: Column<TableRow>[] = [
    { key: 'styleNo', title: 'Style No.', accessor: r => r.styleNo },
    { key: 'supplierItemNo', title: 'Supplier Item #', accessor: r => r.supplierItemNo },
    { key: 'fabricName', title: 'Fabric Name', accessor: r => r.fabricName },
    { key: 'fabricColor', title: 'Fabric Color', accessor: r => r.fabricColor, ellipsis: true, width: 240 },
    { key: 'orderQty', title: 'Order Qty', accessor: r => r.orderQty, align: 'right' },
    { key: 'unit', title: 'Unit', accessor: r => r.unit, align: 'center', width: 90 },
    {
      key: 'unitPrice',
      title: 'U/price',
      accessor: r => r.unitPrice,
      align: 'right',
      render: v => money(Number(v ?? 0)),
    },
    {
      key: 'amount',
      title: 'Amount',
      accessor: r => r.amount,
      align: 'right',
      render: v => money(Number(v ?? 0)),
    },
  ];

  return (
    <div>
      <DataTable<TableRow>
        columns={columns}
        data={rows}
        getRowId={r => r.id}
        summary={{
          groupBy: r => r.groupKey,
          sumKeys: ['amount'],
          formatSum: (key, sum) => (key === 'amount' ? money(sum) : sum.toLocaleString()),
          groupLabel: 'Sub.TTL',
          grandLabel: 'G.TTL',
        }}
      />
      <Dropdown
        value={colors}
        onChange={v => setColors(v)}
        options={[
          { label: 'All', value: 'all' },
          { label: 'Lemon', value: 'lemon' },
          { label: 'Salmon', value: 'salmon' },
        ]}
        search={{ placeholder: 'Search...' }}
      />
    </div>
  );
}

export default App;
