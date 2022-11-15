import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: ${({ theme }) => `2px dashed ${theme.colors.black}`};
  padding: 8px;
  border-radius: 4px;

  :hover {
    background-color: #e3f1ff;
  }
`;

export const Name = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green};
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: ${({ theme }) => {
      return theme.colors.secondaryText;
    }};

    :hover {
      color: orange;
    }
  }
`;

export const Status = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ eventType, theme }) => {
    switch (eventType) {
      case 'free':
        return theme.colors.green;
      case 'paid':
        return theme.colors.blue;
      case 'vip':
        return theme.colors.red;
      default:
        return theme.colors.black;
    }
  }};
`;
