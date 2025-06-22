import { togglMenu } from "./toggle.mjs";
import { getDateTime } from "./date.mjs";
import showDrugInfo from "./modal.mjs";
import { getDrugList } from "./drug.mjs";

async function getdrugs() {
    const reponse = await fetch("data/nafdac-drugs-mock.json");
    const data = await reponse.json();
     verifyDrugs(data.drugs)
}
function verifyDrugs(drugDatas){
    const params = new URLSearchParams(window.location.search)
    const drugName = (params.get('drugname') || "").trim();
    const batchNo =( params.get('batch') || "").trim();
    const nafdac =(params.get('nafdac') || "").trim();
    const manufacture= (params.get('manufacturer') || "").trim();

    let found = false
    if ( drugName !== "" || batchNo  !== "" || nafdac !== ""){
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
    
}

 togglMenu
 getdrugs();
 getDrugList()
 getDateTime();
