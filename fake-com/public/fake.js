function jsonp (url){
    return new Promise((resolve, reject)=>{
        const random = 'fakeJSONPCallBackName' + Math.random() //随机小数
        console.log(random)
        window[random]=(data)=>{
            resolve(data)  //拿到数据，成功
        }
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}` //约定这个参数叫 callback
        script.onload = ()=>{
            script.remove()
        }
        script.onerror = ()=>{
            reject() //失败
        }
        document.body.appendChild(script)
    })
}

jsonp("http://qq.com:8888/friends.js").then((data)=>{
        console.log(data)
    })






