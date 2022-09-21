//숫자 세자리마다 콤마(,)찍는 함수
function addComma(value){
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return value;
}

//숫자 콤마(,)제거하는 함수
function removeComma(value){
    value = value.replace(/[^\d]+/g, "");
    return value; 
}