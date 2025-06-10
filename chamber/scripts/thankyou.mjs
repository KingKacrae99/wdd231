import { togglMenu } from "./toggle.mjs";

function displayFormInto(){
const params = new URLSearchParams(window.location.search);
const fname = params.get('fname');
const lname = params.get('lname');
const title = params.get('title');
const email = params.get('email');
const phone = params.get('phone');
const organization = params.get('organization');
const membership = params.get('membership');
const description = params.get('description');
const timestamp = params.get('timestamp');

const userInfo = document.querySelector('.left');
const businessInfo = document.querySelector('.right')
userInfo.innerHTML = `
<h2> Your Details </h2>
<p><strong>Title:</strong> ${title}</p>
<p><strong>Full Name:</strong> ${fname} ${lname}</p>
<p><strong>Email Address:</strong> ${email}</p>
<p><strong>Phone Number:</strong> ${phone} </p>
`
businessInfo.innerHTML =`<h2>Organization Info </h2>
<p><strong>Organization Name:</strong> ${organization}</p>
<p><strong>Description:</strong> ${description}</p>
<p><strong>Membership Level</strong> ${membership}</p>`
};
displayFormInto();
togglMenu
