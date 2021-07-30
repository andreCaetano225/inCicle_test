import styled from 'styled-components';

export const Post = styled.div`
 

  width: 600px;
  height: 247px;
  border-radius: 25px;
  background: #ffff;
  margin-left: 250px;
  margin-top: 32px;
 
  .text{
    margin-left: 35px;
    color: #969CB3; 
  }
  p{
    margin-top: 20px;
  }
`

export const HeaderPost = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  div{
    display: flex;
    align-items: center;
  }
   img{
     width: 71px;
     height: 68px;
     margin-top: 25px;
     margin-left: 25px;
    }
    section{
      p{
        h1{
          font-size: 1rem;
          color: var(--name);
          margin-left: 15px; 
          margin-bottom: -18px;

     }
        color: #969CB3;
        span{
          font-size: 12px;
          margin-left: 16px;
        }
        img{
          margin:auto;
          margin-top: 2px;
          margin-bottom: -3px;
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }
      }
    }
    
 /* span{ 
   
    display: flex;

    img{
      width: 20px;
      height: 20px;
      color: #969CB3;
      padding: 0;
    }

    p{
      font-size: 12px;
      margin-left: 15px;
    }
  } */

`;

export const ResultsPost = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  p{
    margin-left: 35px;
    color: #969CB3;
    img{
      height: 30px;
      width: 30px;
      margin-bottom: -7px;
    }
  }

  span{
    margin-top: 26px;
    color: #969CB3;
  }
`;

export const ButtonPost = styled.div`
  
  margin-top: 10px;
  margin-left: 20px;

    button{
      width: 178px;
      height: 30px;
      background: var(--fundo);
      border-style: none;
      margin-right: 10px;
      border-radius: 50px;


      img{
        height: 20px;
        width: 20px;
        margin-bottom: -5px;
        margin-right: 4px;
      }
    }
`;