const crypto = require("crypto")
const fs = require("fs")

try{
    fs.writeFileSync("masterKey.txt", crypto.randomBytes(96))
}catch(error){
    throw error;
}

const localMasterKey = fs.readFileSync("./masterKey.txt");
const kmsProvider = {
    local: {
        key: localMasterKey
    }
}