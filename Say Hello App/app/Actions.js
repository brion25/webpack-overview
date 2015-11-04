export default (document)=>{
    let btn = document.querySelector('#say-hello'),
        txt = document.querySelector('#your-name'),
        hello = document.querySelector('#hello-you');
    
    btn.onclick =()=>{
        hello.textContent = 'Hello '.concat(txt.value).concat('!');
    }
}