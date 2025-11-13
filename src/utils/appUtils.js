import {store} from '../redux/store';

export const getBrandBackground = (deg=45)=>{
    const appState = store.getState().appReducer;

    const color1 = appState.brandColor1 || '#ff0000';
    const color2 = appState.brandColor2 || color1;

    return {
        background: appState.gradientColor ? `linear-gradient(${deg}deg, ${color1}, ${color2})` : color1
    }
}