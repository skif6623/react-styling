import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: 2px dashed black;
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
  color: green;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: blue;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: var(--color-secondary-text);

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
  background-color: #000;
  color: #fff;

  background-color: ${({ eventType }) => {
    switch (eventType) {
      case 'free':
        return ' var(--color-green)';
      case 'paid':
        return ' var(--color-blue)';
      case 'vip':
        return ' var(--color-red)';
      default:
        return '#000';
    }
  }};
`;
