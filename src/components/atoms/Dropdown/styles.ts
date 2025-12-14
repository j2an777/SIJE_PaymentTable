import styled from '@emotion/styled';

export const Root = styled.div`
  position: relative;
  display: inline-block;
`;

export const Trigger = styled.button<{ $open: boolean }>`
  width: 100%;
  min-width: 180px;
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid #e5eaf1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;

  ${({ $open }) => ($open ? `border-color:#c7d2fe; box-shadow: 0 0 0 3px rgba(99,102,241,.15);` : '')}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const TriggerValue = styled.div<{ $muted: boolean }>`
  flex: 1;
  text-align: left;
  font-size: 14px;
  color: ${({ $muted }) => ($muted ? '#98a2b3' : '#101828')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Chevron = styled.span<{ $open: boolean }>`
  display: inline-block;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 120ms ease;
  color: #667085;
`;

export const Menu = styled.div`
  position: absolute;
  z-index: 50;
  left: 0;
  top: calc(100% + 8px);
  width: 320px;
  max-width: 100%;
  background: #fff;
  border: 1px solid #e5eaf1;
  border-radius: 12px;
  box-shadow: 0 12px 28px rgba(16, 24, 40, 0.14);
  padding: 10px;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e5eaf1;
  border-radius: 10px;
  padding: 8px 10px;
`;

export const SearchIcon = styled.span`
  color: #667085;
  font-size: 14px;
`;

export const SearchInput = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  font-size: 14px;
  color: #101828;

  &::placeholder {
    color: #98a2b3;
  }
`;

export const Options = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 240px;
  overflow: auto;
`;

export const Item = styled.button<{ $active: boolean }>`
  height: 40px;
  border: 0;
  width: 100%;
  text-align: left;
  padding: 0 12px;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#eef2ff' : 'transparent')};
  color: #101828;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 600)};

  &:hover {
    background: #f2f4f7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Empty = styled.div`
  padding: 12px;
  color: #98a2b3;
  font-size: 14px;
`;
