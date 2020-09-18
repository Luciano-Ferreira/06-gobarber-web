import styled from 'styled-components';

export const Header = styled.div`
  position: absolute;
  background-color: #28262e;
  width: 100%;
  height: 144px;
  display: flex;

  > img {
    margin-left: 160px;
    margin-top: 32px;
    margin-bottom: 32px;
    width: 138px;
    height: 80px;
    left: 160px;
    top: 32px;
  }

  > a {
    margin-left: 180px;
    text-decoration: none;
    display: flex;
    align-items: center;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
    div {
      margin-left: 17px;
      strong {
        color: #999591;
        font-size: 16px;
      }
      h2 {
        color: #ff9000;
        font-size: 16px;
      }
    }
  }
`;

export const HeaderAvatar = styled.div``;
