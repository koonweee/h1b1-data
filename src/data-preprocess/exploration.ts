import * as fs from 'fs';

async function main() {
    // Find all .json files with 2023 in name in ./json
    const files = fs.readdirSync('./json').filter((file) => file.includes('2023') && file.endsWith('.json'));


    // Get headers of the first file
    const headers = JSON.parse(fs.readFileSync(`./json/${files[0]}`, 'utf8'))[0];

    const data = files.flatMap((file) => {
        return JSON.parse(fs.readFileSync(`./json/${file}`, 'utf8')).slice(1);
    })

    const case_status_index = 1;
    const visa_type_index = 5;

    // Record of visa type to case
    const visaTypeToCase = new Map<string, any>();

    data.forEach((row) => {
        const case_status = row[case_status_index];
        const visa_type = row[visa_type_index];

        if (!visaTypeToCase.has(visa_type)) {
            console.log(`Adding visa type: ${visa_type}`)
            visaTypeToCase.set(visa_type, new Map<string, number>());
        }

        const caseStatusToCount = visaTypeToCase.get(visa_type);
        if (!caseStatusToCount.has(case_status)) {
            console.log(`Adding case status: ${case_status} to visa type: ${visa_type}`)
            caseStatusToCount.set(case_status, 0);
        }

        caseStatusToCount.set(case_status, caseStatusToCount.get(case_status) + 1);
    });

    console.log(visaTypeToCase);
}

main().catch(console.error);
