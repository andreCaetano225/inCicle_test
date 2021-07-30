import React, {  useState } from 'react';
import {BiChevronDown} from 'react-icons/bi'
import { Post,  HeaderPost, ResultsPost, ButtonPost } from './styles';
import PefilImg from '../../assets/perfil.svg';
import RelogioImg from '../../assets/relogio.svg';
import Cadeado from '../../assets/cadeado.svg';
import LikeImg from '../../assets/like.svg';
import ComentarioImg from '../../assets/comentario.svg';
import CompartilhamentarImg from '../../assets/compartilhar.svg'
import PlanetaImg from '../../assets/planeta.svg';

export function Posts(){
  const [isLike,setIsLike] = useState('seja o primeiro a curtir')
  const [contLike,setContLike] = useState(1)

 

  function Likebutton(){
  ;

    setIsLike(!isLike);
  }

  function AddLike(){
    setContLike(contLike +1)
  }
    return(
        <>
        <Post>
            <HeaderPost>
         <div>
            <img src={PefilImg} alt="foto do perfil"/>
            <section>
            <p>
             <h1> André Caetano de Sousa </h1>  <br/>     
               <span> 
            <img src={RelogioImg} alt="Relogio"/>      
              há cerca de 4 horas 
              <span>
            <img src={Cadeado} alt="Cadeado"/>      
              Somente eu 
               </span>
              </span>
              </p>
             </section> 
                </div>
                <BiChevronDown size={30}/>
            </HeaderPost>
            <p className="text">Essa publicação está configurada no modo privativo “somente eu ”.</p>
            <ResultsPost>
                <p>
              <img src={LikeImg} alt="like"/>
              {isLike ? '1 pessoa curtiu isso' : 'seja o primeiro a curtir'}
              </p>
              <span>
              0 comentários
              0 compartilhamentos
              </span>
            </ResultsPost>
            <ButtonPost>
                <button type="button" onClick={Likebutton}
                 
                >
                    <img src={LikeImg} alt="likebutton"/>
                    Curtir
                    </button>
                <button type="button">
                <img src={ComentarioImg} alt="likebutton"/>
                    Comentários
                    </button>
                <button type="button">
                <img src={CompartilhamentarImg} alt="likebutton"/>
                    Compartilhar
                    </button>

            </ButtonPost>
        </Post>
        <Post>
            <HeaderPost>
         <div>
            <img src={PefilImg} alt="foto do perfil"/>
            <section>
            <p>
             <h1> André Caetano de Sousa </h1>  <br/>     
               <span> 
            <img src={RelogioImg} alt="Relogio"/>      
              há 4 dias
              <span>
            <img src={PlanetaImg} alt="Cadeado"/>      
              Público
               </span>
              </span>
              </p>
             </section> 
                </div>
                <BiChevronDown size={30}/>
            </HeaderPost>
            <p className="text">iiiiikikiki</p>
            <ResultsPost>
                <p>
              <img src={LikeImg} alt="like"/>
              {contLike} pessoa curtiu isso
              </p>
              <span>
              0 comentários
              3 compartilhamentos
              </span>
            </ResultsPost>
            <ButtonPost>
                <button type="button"  onClick={AddLike}>
                    <img src={LikeImg} alt="likebutton"/>
                    Curtir
                    </button>
                <button type="button">
                <img src={ComentarioImg} alt="likebutton"/>
                    Comentários
                    </button>
                <button type="button">
                <img src={CompartilhamentarImg} alt="likebutton"/>
                    Compartilhar
                    </button>

            </ButtonPost>
        </Post>
        
       
        </>
    )
}