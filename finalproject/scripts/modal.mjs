import { getDrugList } from "./drug.mjs";
export default function showDrugInfo(drug){
    const verifyDetails = document.querySelector('#verify-details');
    if(drug){
        function Verified(drug){
            if(drug.verified){
                return "Verified ✅";
            } else{
                return "Drug's not Authentic";
            }
        }

        verifyDetails.innerHTML = `
            <button id="closeModal">X</button>
            <h3>${drug.name}</h3>
            <p><strong>Batch Number </strong> ${drug.batch}</p>
            <p><strong>Manufacturer</strong> ${drug.manufacturer}</p>
            <p><strong>Expiry</strong> ${drug.expiry}</p>
            <p><strong>NafDac No</strong> ${drug.nafdac_no}</p>
            <p><strong>Verified</strong> ${Verified(drug)}</p>
            <div class="save-option">
            Would you like add this drug to your drug list? 
            <button id="saveitem">yes</button> <button id="dontsave">No</button>
            </div>
            `
    } else{
        verifyDetails.innerHTML =`
            <button id="closeModal">X</button>
            <h3>Drug not found!</h3>`;
    }
    
    verifyDetails.showModal()
    closeModal.addEventListener('click', () =>{
        verifyDetails.close()
    });
    saveitem.addEventListener('click', () => {
        if (localStorage.getItem(drug.name)) {
            verifyDetails.innerHTML =`
            <button id="closeModal">X</button>
            <h3>This drug is already saved in your drug list</h3>`;
            
        } else {
            localStorage.setItem(drug.name, JSON.stringify(drug))
            console.log(JSON.stringify(drug))
            verifyDetails.innerHTML = `
                <button id="closeModal2">X</button>
                <h3>Drug has been added to list</h3>`
        }
    });
    dontsave.addEventListener('click', () =>{
        verifyDetails.close()
    });
    closeModal2.addEventListener('click', () =>{
        verifyDetails.close()
    })
}