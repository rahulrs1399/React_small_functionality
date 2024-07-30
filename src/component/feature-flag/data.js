

const dummyApiResponse = {
    showLightAndDarkMode : false,
    showTicTacToe : true,
    showRandomColorGenerator : true,
    showAccordian : false,
    showTreeView : true,
}

function featureFlagsDataServiceCell(){
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Error occured! Please try again.")
    })
}

export default featureFlagsDataServiceCell;