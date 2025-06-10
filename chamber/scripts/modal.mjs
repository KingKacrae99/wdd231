import { togglMenu } from "./toggle.mjs";
import { getDateTime } from "./date_time.mjs";

function getMoreInfo(){
    const nonProfit = document.querySelector('#non-profit-level');
    const bronze = document.querySelector('#bronze-level');
    const silver = document.querySelector('#silver-level');
    const gold =document.querySelector('#gold-level');

    let details = {
        header: '',
        content: ''
    }
    nonProfit.addEventListener('click', () => {
        details.header = "Non-Profit Membership Level";
        details.content ="This level is free new members. Members who are on this level, enjoys no benefits until they upgrade to a higher level.";
        showleveldetail(details);
    });
    bronze.addEventListener('click', () => {
        details.header="Bronze Membership Level";
        details.content = "At this level, members enjoy benefit like special events & discounts. Subscription for this level rate is $20/month..";
        showleveldetail(details)
    })
    silver.addEventListener('click', () =>{
        details.header = "Silver Membership Level";
        details.content = "A more suitable level for members who want better benefits such as special events, discounts, and advertising. Subscription is $50/month.";
        showleveldetail(details)
    });
    gold.addEventListener('click', () => {
        details.header = "Gold Membership Level";
        details.content = "The Ultimate Level were Members enjoys maximum benefits including spotlight position on adversting, first-hand notification on special events, regular events discounts & training. Subscription rate @ $70/month."
        showleveldetail(details)
    });
}

function showleveldetail(detailedInfo){
    const levelDetail= document.querySelector('#level-details');

    levelDetail.innerHTML=`<button id="closeModal"> X </button>
    <h3>${detailedInfo.header}</h3>
    <p>${detailedInfo.content}</p>`;

    levelDetail.showModal();

    const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', () => {
        levelDetail.close()
    });
    closeModal.style.background = 'red';
    closeModal.style.color ='white';

}
togglMenu
getMoreInfo();
getDateTime();
