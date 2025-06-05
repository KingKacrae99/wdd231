export function getDateTime(){
    const year =  document.querySelector('#thisyear');
    const today = new Date();
    year.textContent = today.getFullYear();
    document.querySelector('#last-updated').innerText=`${document.lastModified}`;
}
