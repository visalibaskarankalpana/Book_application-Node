// For Pagination Purpose
export function pagination (pages:any, limits:any, details:any){
    const page = pages;
    const limit = limits;
    const start=(page-1)*limit;
    const end=page*limit;
    const results:any ={};

    if(end<details.length)
    {
        results.next={
        page :Number(page)+1,
        limit:limit
        }
    }
    if(start >0)
    {
        results.previous={
        page:Number(page)-1,
        limit:limit
        }
    }
    results.results= details.slice(start,end)
    return results;
}

export const successResp = async (dataObj: any, res: any) => {
    try {
        return res.status(200).json({ _isSucceed: true, _data: dataObj._data, _msg: dataObj._msg });
    } catch (e) {
        console.log(e)
        return res.status(500).json({ _isSucceed: false, _data: [], _msg: e });
    }
}

// Failure Response
export const failureResp = async (dataObj: any, res: any) => {
    try {
        return res.status(400).json({ _isSucceed: false, _data: dataObj._data, _msg: dataObj._msg });
    } catch (e) {
        console.log(e)
        return res.status(500).json({ _isSucceed: false, _data: [], _msg: e });
    }
}


export  function responseObj(data:any, msg:any){

    const obj:any = {
        isSuccessed : true,
        data : data,
        msg : msg
    }
   return obj
}

export function rejectObj(msg:string){

    const obj:any = {
        isSuccessed : false,
        data : [],
        msg : msg
    }
    return obj
}