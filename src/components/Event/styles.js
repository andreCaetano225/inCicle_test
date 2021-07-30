import styled from 'styled-components';

export const Container = styled.div`
 
  height: 150px;
  width: 250px;
  background: #FFFF;
  margin-left: 300px;
  margin-top: 30px;
  border-radius: 25px;

  header{
      margin-top: 5px;
      background: var(--fundo);
      height: 10px;
  }

  p{
      text-align: center;
      color: #969CB3;
      margin-top: 10px;
  }

  div{
      display: flex;
      align-items: center;
      justify-content: center;

    img{
      margin-top: 15px;
        width: 30px;
        height: 30px;
    }

    h3{
        margin-top: 17px;
        margin-left: 5px;
        color: #92D5EA;

    }
  }
`;


export const Container2 = styled.div`
 
  height: 150px;
  width: 250px;
  background: #FFFF;
  margin-left: 300px;
  margin-top: 30px;
  border-radius: 25px;

  header{
      background: var(--fundo);
      height: 20px;
      color: #969CB3;
      font-size: 12px;
      display: block;
      padding-top: 4px;
      margin-top: 5px;


      span{
      margin-left: 10px;
      }
  }

  p{
      text-align: center;
      color: #969CB3;
      margin-top: 10px;
  }

  div{
      display: flex;
      align-items: center;
      justify-content: center;

    img{
      margin-top: 15px;
        width: 26px;
        height: 26px;
    }

    h3{
        margin-top: 15px;
        margin-left: 5px;
        color: #92D5EA;
    }
  }
`;