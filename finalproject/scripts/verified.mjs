import { togglMenu } from "./toggle.mjs";
import { getDateTime } from "./date.mjs";
import showDrugInfo from "./modal.mjs";
import { getDrugList } from "./drug.mjs";

const verifyForm = document.querySelector("#verify-form");

verifyForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const drugName = document.querySelector('#drugname').value.trim();
    const ndcCode = document.querySelector('#ndc').value.trim();
    const appNo = document.querySelector('#app-no').value.trim();
    const mName = document.querySelector('#manufacturer').value.trim();
    const verifyDetails = document.querySelector('#verify-details');
    const loader = document.querySelector(".loader");
    verifyDetails.showModal()
    let url =''
    if (!drugName && !ndcCode && !appNo && !mName){ 
        return;
    }
    const pathFinder ="https://api.fda.gov/drug/label.json?search=";
    let connector =  [];

    if (drugName) {
        connector.push(`openfda.brand_name:${drugName.toLowerCase()}`);
    }
    if (ndcCode) {
        connector.push(`openfda.product_ndc.exact:${ndcCode}`);
    }
    if (appNo) {
        connector.push(`openfda.application_number:${appNo.toUpperCase()}`);
    }
    if (mName) {
        connector.push(`openfda.manufacturer_name:${mName.toLowerCase()}`);
    }
    url =`${pathFinder}${connector.join("+OR+")}&limit=1`;

    getdrugs(url);

    loader.classList.remove('loader-hidden');

});

async function getdrugs(url) {
    try{
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0){
            showDrugInfo(data.results[0]);
        } else if(data.error){
            showDrugInfo(data.error.message)
            console.log(data.error.message)
        }

    }catch(error){
        console.error("Fetch Failed", error)
        alert("An error occurred while verifying the drug.")
    }
}



/*function verifyDrugs(drugDatas){
    const params = new URLSearchParams(window.location.search)
    const drugName = (params.get('drugname') || "").trim();
    const ndc =( params.get('ndc') || "").trim();
    const appNo =(params.get('app-no') || "").trim();
    const manufacture= (params.get('manufacturer') || "").trim();

    let found = false
    if ( drugName !== "" || batchNo  !== "" || nafdac !== ""){

        verifyDrugs(drugName,ndc,appNo)
        if (drugDatas){
            drugDatas.forEach(drug => {
                if(drugName.toLowerCase() === drug.name.toLowerCase()||
                batchNo.toLowerCase() === drug.batch.toLowerCase() ||
                nafdac === drug.nafdac_no
                ) {
                    found = true;
                    showDrugInfo(drug);
                    window.history.replaceState({}, document.title, window.location.pathname);
                }
            });
            if (!found) {
                showDrugInfo(null);
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }

    }
    
}*/

 togglMenu
 getDrugList()
 getDateTime();
