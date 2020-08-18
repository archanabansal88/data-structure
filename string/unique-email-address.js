/**
 * https://leetcode.com/problems/unique-email-addresses/
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
    let set = new Set();
    for(let i=0; i<emails.length; i++){
        let temp = emails[i].split('@');
        let extract = temp[0];
        if(temp[0].includes('+')){
           let index = temp[0].indexOf('+');
            extract = temp[0].substr(0, index);
        }
        
        if(extract.includes('.')){
            extract = extract.replace(/\./g, "");
        }
            
        extract = extract + '@' + temp[1];
        set.add(extract);
    }
    return set.size;
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]); // 2