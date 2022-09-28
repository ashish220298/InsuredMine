const { Readable } = require('stream');
const csv=require("csv-parser")
const agentModel=require("../Model/agent")
const LOBModel=require("../Model/LOB")
const policyModel=require("../Model/policy")
const policycarrierModel=require("../Model/policycarrier")
const userModel=require("../Model/user")
const useraccountModel=require("../Model/useraccount")
const csvModel=require("../Model/csv")


const getfile=async function(req,res){
    let file=req.files[0]
    let result=[];
    
    const stream = Readable.from(file.buffer);
            stream.pipe(csv()).on("data",  async (data) => {
            //   result.push(data)
            csvModel.create(data)  
          });
            res.send("fileuploaded")
        }
       

module.exports={getfile}

// {
//     "agent": "Alex Watson",=====================agent
//     "userType": "Active Client",=======user
//     "policy_mode": "12",===========policy
//     "producer": "Sol Birney",
//     "policy_number": "7CZ3CLKWMSKH",===========policy
//    
//     "premium_amount": "2105.9",=============policy
//     "policy_type": "Single",===========policy
//     "company_name": "Integon Ind Corp",==============policycarrer
//     "category_name": "Commercial Auto",=============LOB
//     "policy_start_date": "2018-11-09",===========policy


//     "policy_end_date": "2019-11-09",===========policy
//     "csr": "Molly Eaton",
//     "account_name": "Torie Buchanan & Glenda Ruiz",========useraccount
//     "email": "mbalazin@mac.com",=======user
//     "gender": "",=======user
//     "firstname": "Torie Buchanan",=======user
//     "city": "WINSTON SALEM",=======user
//     "account_type": "Commercial",==================useraccount
//     "phone": "6094964988",=======user
//     "address": "910 DELMONTE DR",=======user
//     "state": "NC",=======user
//     "zip": "27106",=======user
//     "dob": "1946-10-17",=======user

// }
















// let obj={};
// obj.firstname=data.firstname
// obj.Dob=data.dob
// obj.address=data.address
// obj.phone=data.phone
// obj.state=data.state
// obj.zipCode=data.zip
// obj.email=data.email
// obj.userType=data.userType

// userModel.create(obj)
// obj={};
// obj.name=data.agent
// let data1=await agentModel.findOne({name:data.agent})
// console.log(data1)

// if(data1){
// // agentModel.findOneAndUpdate({name:data.agent})
// }
// else{
// await agentModel.create(obj);
// }



// obj={};

// obj.account_name=data.account_name;
// obj.account_type=data.account_type;
// useraccountModel.create(obj);

// obj={};

// obj.PolicyStartDate=data.policy_start_date
// obj.PolicyEndDate=data.policy_end_date
// obj.PolicyMode=data.policy_mode
// obj.PolicyNumber=data.policy_number
// obj.PolicyType=data.policy_type
// obj.premium_amount=data.premium_amount

// policyModel.create(obj);

// obj={}

// obj.company_name=data.company_name
// policycarrierModel.create(obj);
// obj={};

// obj.category_name=data.category_name;
// LOBModel.create(obj)