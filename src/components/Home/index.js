import React from 'react';
import { Event } from '../Event';
import { Posts } from '../Posts';
import { Side } from '../Side';
import { MainGrid, Box } from './styles';

export function Home(){
    return(
        <>
        <MainGrid>
            <div>
            <Box style={{gridArea: 'perfilArea'}}>
             <Side/>
            </Box>
            </div>
         <div>
         <Box style={{gridArea: 'postArea'}}>
             <Posts/>
         </Box>
         </div>
        <div>
        <Box style={{gridArea: 'eventoArea'}}>
             <Event/>
         </Box>
        </div>
        </MainGrid>
       
        </>
    )
}