const currentYear = new Date().getFullYear();
const companyName = 'Heats and Sweets';

const copyrightInfo = `&copy; ${currentYear} ${companyName}. All rights reserved.`;

document.getElementById('copyright').innerHTML = copyrightInfo;
