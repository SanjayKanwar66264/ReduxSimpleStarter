export function selectBook(book){
//Select book is an action creator it needs to  return an action,
    //an object witht type property
    return{
        type:'BOOK_SELECTED',
        payload:book
    };
}