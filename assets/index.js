const currentYear = new Date().getFullYear();
const companyName = 'Sweets & Treats';

const copyrightInfo = `&copy; ${currentYear} ${companyName}. All rights reserved.`;

document.getElementById('copyright').innerHTML = copyrightInfo;
