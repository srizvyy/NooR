import React, { Suspense } from 'react'
import styled from 'styled-components';
import {Canvas} from '@react-three/fiber';
import Earth from './Earth';
import HomeAuth from './HomeAuth';

const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
`

function Home() {
    return (
        <CanvasContainer>
            <HomeAuth/>
            <Canvas>
                <Suspense fallback={null}>
                   <Earth/> 
                </Suspense>
            </Canvas>  
        </CanvasContainer>
    )
}

export default Home




