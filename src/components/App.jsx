import {
  Item,
  Wrap,
  Logo,
  Card,
  UserWrap,
  TextWrap,
  Text,
  Btn,
} from './App.styled';
import logo from '../icons/logo.png';
import card from '../icons/card.png';
import user from '../icons/user.png';

export const App = () => {
  return (
    <>
      <ul>
        <Item>
          <Wrap>
            <Logo src={logo} alt="Logo" />
            <Card src={card} alt="messageicons" />
            <UserWrap>
              <img src={user} alt="User" />
            </UserWrap>
          </Wrap>
          <TextWrap>
            <Text> 777 tweets</Text>
          </TextWrap>
          <Text>100,500 Followers</Text>
          <Btn type="button">FOLLOW</Btn>
        </Item>
      </ul>
    </>
  );
};
