function scaleSizeScreen(pxSample, pxDevice, isHeightScreens) {
    const widthSample =411;
    const heightSample = 774;
    return isHeightScreens? 
                pxDevice*pxSample/heightSample
            :   pxDevice*pxSample/widthSample;
}


module.exports = {scaleSizeScreen}