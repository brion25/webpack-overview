//Vendors
import BootstrapCss from './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//My Code
import Body from './body.jade';

export default (document)=>{
    let container = document.querySelector('#container'),
        style = document.createElement('style'),
        temp = document.createElement('div');
    
    temp.innerHTML = Body();
    style.innerHTML = BootstrapCss[0];
    
    while(temp.firstChild){
        container.appendChild(temp.firstChild);
    }
    container.appendChild(style);

}