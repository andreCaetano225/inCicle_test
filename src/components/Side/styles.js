import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFFFF;
  width: 305px;
  height: 410px;
  margin-top: 32px;
  margin-left: 35px;
  border-radius: 25px;

  .perfil_img{
      width: 137px;
      height: 132px;
      border-radius: 66px;
      margin-top: -85px;
      margin-left: 80px;
  }
  header{
     background: var(--capa);
     height: 190px;
     border-radius: 25px;
  }
`;

export const Content = styled.div`
   
   h1{
       color: var(--name);
       font-size: 1.5rem;
       text-align: center;
       margin-top: 5px;
   }
   h3{
       text-align: center;
   }

   p{
       text-align: center;
   }

`;