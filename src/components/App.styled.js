import styled from 'styled-components';

export const Item = styled.li`
  display: block;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Wrap = styled.div`
  position: relative;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Card = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const UserWrap = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  &:before {
    content: '';
    margin-top: 37px;
    margin-left: -150px;
    display: block;
    position: absolute;
    width: 155px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  &:after {
    content: '';
    margin-top: -52px;
    margin-left: 85px;
    display: block;
    position: absolute;
    width: 145px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const TextWrap = styled.p`
  padding-top: 284px;
  padding-bottom: 16px;
`;

export const Text = styled.p`
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Btn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 26px;

  width: 196px;
  height: 50px;
  border: 0px;
  border-radius: 10px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;
