// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "W" },
    //...
]
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

function superbowlWin(array) {
    let newArray = array.find((game) => { 
        if (game.result === 'W') {

            return true

        }
    })
    // find method returns undefined if none of the objects in the array meet the required conditions 
    if (newArray !== undefined) {
        return newArray.year

    } else {
        return undefined
    }
}
console.log(superbowlWin(record))
console.log(superbowlWin(sadReality))
