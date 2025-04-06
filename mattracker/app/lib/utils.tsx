//we check if the data is null and set it to simplified locale date
export function parseDate(date:Date){

    let res:string = ''
  
    if(date!=null){
      res = date.toLocaleDateString()
    }else{
  
    }
    return res
  
  }