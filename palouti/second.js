var climbStairs = function(n) {
    let  sum1=0
    if(typeof(n)==='number'){
        n=[n]  
    }
    const nextn=[]
    n.forEach((j)=>{
        let pre = j-1
        let pre1= j-2
        if(pre===0){
            sum1+=1
        }else if (pre>=0){
            nextn.push(pre)
        }
        if(pre1===0){
            sum1+=1
        }else if (pre1>=0){
            nextn.push(pre1)
        }
    })
    let num1=0
    if(nextn.length>0){
     num1 = climbStairs(nextn)
    }
    return  sum1+ num1
};


console.info(climbStairs(35))
