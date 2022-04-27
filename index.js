// code your solution here
//function superbowlWin(obj) {
//    function isWin() {
//        return obj.result === "W";
//    } 
//    return(obj.find(isWin));
//}
superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }