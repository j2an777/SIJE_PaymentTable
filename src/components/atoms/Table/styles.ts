import { colors } from '@/styles/colors';
import styled from '@emotion/styled';

type Align = 'left' | 'center' | 'right';

const Wrap = styled.div`
  width: 100%;
  overflow-x: auto;
  background: ${colors.white};
  border: 1px solid ${colors.white30};
  border-radius: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 980px;
`;

const Th = styled.th<{ $align: Align }>`
  position: sticky;
  top: 0;
  z-index: 1;
  text-align: ${({ $align }) => $align};
  background: #f6f8fb;
  color: #101828;
  font-weight: 700;
  font-size: 14px;
  padding: 14px 16px;
  border-bottom: 1px solid ${colors.white30};

  &:not(:last-of-type) {
    border-right: 1px solid #eef2f7;
  }
`;

const Tr = styled.tr`
  background: ${colors.white};
`;

const Td = styled.td<{ $align: Align; $ellipsis: boolean }>`
  text-align: ${({ $align }) => $align};
  padding: 14px 16px;
  border-bottom: 1px solid #eef2f7;
  color: #101828;
  font-size: 14px;

  ${({ $ellipsis }) =>
    $ellipsis
      ? `
    max-width: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ''}

  &:not(:last-of-type) {
    border-right: 1px solid #f2f4f7;
  }
`;

const SummaryRow = styled.tr`
  background: #f6f8fb;
`;

const SummaryEmptyCell = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #eef2f7;
`;

const SummaryLabelCell = styled.td<{ $align: Align }>`
  text-align: ${({ $align }) => $align};
  padding: 12px 16px;
  font-weight: 700;
  color: #101828;
  border-bottom: 1px solid #eef2f7;
`;

const SummaryValueCell = styled.td<{ $align: Align }>`
  text-align: ${({ $align }) => $align};
  padding: 12px 16px;
  font-weight: 700;
  color: #101828;
  border-bottom: 1px solid #eef2f7;
`;

const GrandRow = styled.tr`
  background: #f6f8fb;
`;

const GrandEmptyCell = styled.td`
  padding: 14px 16px;
  border-bottom: 0;
`;

const GrandLabelCell = styled.td<{ $align: Align }>`
  text-align: ${({ $align }) => $align};
  padding: 14px 16px;
  font-weight: 800;
  color: #101828;
  border-bottom: 0;
`;

const GrandValueCell = styled.td<{ $align: Align }>`
  text-align: ${({ $align }) => $align};
  padding: 14px 16px;
  font-weight: 800;
  color: #101828;
  border-bottom: 0;
`;

export {
  Wrap,
  Table,
  Th,
  Td,
  Tr,
  SummaryEmptyCell,
  SummaryLabelCell,
  SummaryRow,
  SummaryValueCell,
  GrandEmptyCell,
  GrandLabelCell,
  GrandRow,
  GrandValueCell,
};
