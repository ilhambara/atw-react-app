import styled from 'styled-components';

export const ServerBgImage = styled.svg`
    display: flex;
    position: absolute;
    z-index: 1;
`;

export const ServerSection = styled.div`
  padding: 50px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const ServerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ServerHeading = styled.h1`
  color: #23272a;
  font-size: 48px;
  margin-bottom: 20px;
  z-index: 2;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 32px;
  }
`;

export const ServerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ServerCard = styled.div`
  background: #23272a;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 20px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const ServerCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 420px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ServerCardIcon = styled.div`
  margin: 24px 0;
`;

export const ServerCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const ServerCardCost = styled.h4`
  font-size: 40px;
`;

export const ServerCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ServerCardFeatures = styled.ul`
  margin: 24px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const ServerCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const ServerCardButton = styled.a`
  border-radius: 4px;
  background: #4b59f7;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: #0467fb;
}
`;