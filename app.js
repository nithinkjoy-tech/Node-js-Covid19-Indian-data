const express = require("express")
const app = express()
const axios = require("axios")
const expressLayout = require("express-ejs-layouts")

app.use(expressLayout)
app.set("view engine", "ejs")
app.use(express.urlencoded({
        extended: false
    }))


app.get("/", async (req, res) => {
 
    const dat1 = await axios.get("https://api.covid19india.org/deaths_recoveries.json")
    const dat2 = await axios.get("https://api.covid19india.org/v2/state_district_wise.json")

    const stateLength = dat2.data.length
    const states = []
    for (i = 0; i < stateLength; i++) {
        states[i] = dat2.data[i].state
    }

    const len = dat1.data.deaths_recoveries.length
    recovered = 0
    deceased = 0
    stateRecoveredPatient = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    stateDeceasedPatient = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (i = 0; i < len; i++) {
        recovered += dat1.data.deaths_recoveries[i].patientstatus === "Recovered"
        deceased += dat1.data.deaths_recoveries[i].patientstatus === "Deceased"

        if (dat1.data.deaths_recoveries[i].state === "Andaman and Nicobar Islands" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[0] += 1
        if (dat1.data.deaths_recoveries[i].state === "Andaman and Nicobar Islands" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[0] += 1

        if (dat1.data.deaths_recoveries[i].state === "Andhra Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[1] += 1
        if (dat1.data.deaths_recoveries[i].state === "Andhra Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[1] += 1

        if (dat1.data.deaths_recoveries[i].state === "Arunachal Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[2] += 1
        if (dat1.data.deaths_recoveries[i].state === "Arunachal Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[2] += 1


        if (dat1.data.deaths_recoveries[i].state === "Assam" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[3] += 1
        if (dat1.data.deaths_recoveries[i].state === "Assam" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[3] += 1


        if (dat1.data.deaths_recoveries[i].state === "Bihar" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[4] += 1
        if (dat1.data.deaths_recoveries[i].state === "Bihar" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[4] += 1


        if (dat1.data.deaths_recoveries[i].state === "Chandigarh" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[5] += 1
        if (dat1.data.deaths_recoveries[i].state === "Chandigarh" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[5] += 1


        if (dat1.data.deaths_recoveries[i].state === "Chhattisgarh" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[6] += 1
        if (dat1.data.deaths_recoveries[i].state === "Chhattisgarh" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[6] += 1


        if (dat1.data.deaths_recoveries[i].state === "Delhi" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[7] += 1
        if (dat1.data.deaths_recoveries[i].state === "Delhi" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[7] += 1


        if (dat1.data.deaths_recoveries[i].state === "Goa" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[8] += 1
        if (dat1.data.deaths_recoveries[i].state === "Goa" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[8] += 1


        if (dat1.data.deaths_recoveries[i].state === "Gujarat" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[9] += 1
        if (dat1.data.deaths_recoveries[i].state === "Gujarat" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[9] += 1


        if (dat1.data.deaths_recoveries[i].state === "Haryana" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[10] += 1
        if (dat1.data.deaths_recoveries[i].state === "Haryana" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[10] += 1


        if (dat1.data.deaths_recoveries[i].state === "Himachal Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[11] += 1
        if (dat1.data.deaths_recoveries[i].state === "Himachal Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[11] += 1


        if (dat1.data.deaths_recoveries[i].state === "Jammu and Kashmir" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[12] += 1
        if (dat1.data.deaths_recoveries[i].state === "Jammu and Kashmir" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[12] += 1


        if (dat1.data.deaths_recoveries[i].state === "Jharkhand" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[13] += 1
        if (dat1.data.deaths_recoveries[i].state === "Jharkhand" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[13] += 1

        if (dat1.data.deaths_recoveries[i].state === "Karnataka" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[14] += 1
        if (dat1.data.deaths_recoveries[i].state === "Karnataka" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[14] += 1

        if (dat1.data.deaths_recoveries[i].state === "Kerala" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[15] += 1
        if (dat1.data.deaths_recoveries[i].state === "Kerala" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[15] += 1


        if (dat1.data.deaths_recoveries[i].state === "Ladakh" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[16] += 1
        if (dat1.data.deaths_recoveries[i].state === "Ladakh" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[16] += 1


        if (dat1.data.deaths_recoveries[i].state === "Madhya Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[17] += 1
        if (dat1.data.deaths_recoveries[i].state === "Madhya Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[17] += 1


        if (dat1.data.deaths_recoveries[i].state === "Maharashtra" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[18] += 1
        if (dat1.data.deaths_recoveries[i].state === "Maharashtra" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[18] += 1


        if (dat1.data.deaths_recoveries[i].state === "Manipur" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[19] += 1
        if (dat1.data.deaths_recoveries[i].state === "Manipur" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[19] += 1


        if (dat1.data.deaths_recoveries[i].state === "Meghalaya" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[20] += 1
        if (dat1.data.deaths_recoveries[i].state === "Meghalaya" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[20] += 1


        if (dat1.data.deaths_recoveries[i].state === "Mizoram" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[21] += 1
        if (dat1.data.deaths_recoveries[i].state === "Mizoram" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[21] += 1


        if (dat1.data.deaths_recoveries[i].state === "Odisha" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[22] += 1
        if (dat1.data.deaths_recoveries[i].state === "Odisha" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[22] += 1


        if (dat1.data.deaths_recoveries[i].state === "Puducherry" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[23] += 1
        if (dat1.data.deaths_recoveries[i].state === "Puducherry" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[23] += 1


        if (dat1.data.deaths_recoveries[i].state === "Punjab" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[24] += 1
        if (dat1.data.deaths_recoveries[i].state === "Punjab" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[24] += 1


        if (dat1.data.deaths_recoveries[i].state === "Rajasthan" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[25] += 1
        if (dat1.data.deaths_recoveries[i].state === "Rajasthan" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[25] += 1


        if (dat1.data.deaths_recoveries[i].state === "Tamil Nadu" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[26] += 1
        if (dat1.data.deaths_recoveries[i].state === "Tamil Nadu" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[26] += 1

        if (dat1.data.deaths_recoveries[i].state === "Telangana" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[27] += 1
        if (dat1.data.deaths_recoveries[i].state === "Telangana" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[27] += 1

        if (dat1.data.deaths_recoveries[i].state === "Tripura" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[28] += 1
        if (dat1.data.deaths_recoveries[i].state === "Tripura" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[28] += 1


        if (dat1.data.deaths_recoveries[i].state === "Uttar Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[29] += 1
        if (dat1.data.deaths_recoveries[i].state === "Uttar Pradesh" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[29] += 1


        if (dat1.data.deaths_recoveries[i].state === "Uttarakhand" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[30] += 1
        if (dat1.data.deaths_recoveries[i].state === "Uttarakhand" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[30] += 1


        if (dat1.data.deaths_recoveries[i].state === "West Bengal" & dat1.data.deaths_recoveries[i].patientstatus === "Recovered") stateRecoveredPatient[31] += 1
        if (dat1.data.deaths_recoveries[i].state === "West Bengal" & dat1.data.deaths_recoveries[i].patientstatus === "Deceased") stateDeceasedPatient[31] += 1



    }

    console.log("states", states.length)
    console.log("State recovered", stateRecoveredPatient)
    console.log("State deceased", stateDeceasedPatient)

    const districtLength = []



    for (i = 0; i < stateLength; i++) {
        for (j = 0; j < stateLength; j++) {
            districtLength[i] = dat2.data[i].districtData.length
        }
    }
    
    stateConfirmedPatient = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (i = 0; i < stateLength; i++) {
        for (j = 0; j < districtLength[i]; j++) {
            stateConfirmedPatient[i] += dat2.data[i].districtData[j].confirmed
        }
    }


    stateActivePatient = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const n = states.length
    for (i = 0; i < n; i++) {
        stateActivePatient[i] = (stateConfirmedPatient[i] - (stateRecoveredPatient[i] + stateDeceasedPatient[i]))
    }


    confirmed = 0
    for (i = 0; i < stateLength; i++) {
        for (j = 0; j < districtLength[i]; j++) {
            confirmed += dat2.data[i].districtData[j].confirmed
        }
    }
    const active = confirmed - (recovered + deceased)

    res.render("index", {
        states,
        stateConfirmedPatient,
        stateActivePatient,
        stateDeceasedPatient,
        confirmed,
        recovered,
        deceased,
        stateRecoveredPatient,
        active
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Connected to port ${port}`))