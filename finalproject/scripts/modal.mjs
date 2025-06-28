import { getDrugList } from "./drug.mjs";
export default function showDrugInfo(data){
    const verifyDetails = document.querySelector('#verify-details');
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".drug-content");
    loader.classList.remove("loader-hidden")
    content.style.display ='none';

    setTimeout(()=>{
        if(data){
            loader.classList.remove("loader")
            loader.classList.add("loader-hidden");
            content.style.display = "block";

            if(data !== "No matches found!"){
                content.innerHTML = `
                <h3>${data.openfda.brand_name}</h3>
                <p><strong>Generic Name:</strong> ${data.openfda.generic_name}</p>
                <p>${data.purpose}</p>
                <p><strong>Product NDC: </strong> ${data.openfda.product_ndc}</p>
                <p><strong>Application No:</strong> ${data.openfda.application_number}</p>
                <p><strong>Manufacturer:</strong> ${data.openfda.manufacturer_name}</p>
                <p><strong>Consumption:</strong> ${data.openfda.product_type}</p>
                <p><strong>Route Use:</strong> ${data.openfda.route}</p>
                <p><strong>Verified:</strong> Verified ✅</p>
                <strong>Administration:</strong><small> ${data.dosage_and_administration}</small><br>
                <strong>Don't Use:</strong><small> ${data.do_not_use}</small>


                <div class="save-option">
                Would you like add this drug to your drug list? 
                <button id="saveitem">yes</button> <button id="dontsave">No</button>
                </div>
                `
                saveitem.addEventListener('click', () => {
                if (localStorage.getItem(data.product_ndc)) {
                    content.innerHTML =`
                    <h3>This drug is already saved in your drug list</h3>`;
                    
                } else {
                    localStorage.setItem(data.product_ndc, `Drug ${data.brand_name}`)
                    content.innerHTML = `
                        <h3>Drug has been added to list</h3>`
                }
                });
                dontsave.addEventListener('click', () =>{
                    verifyDetails.close()
                });
            
            }else{
            content.innerHTML =`
                <button id="closeModal">X</button>
                <h3>${data}</h3>`;
            } 
        }
        
    },750)

    closeModal.addEventListener('click', () =>{
        verifyDetails.close()
    });
}