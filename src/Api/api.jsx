import Countries from "./counties.json";

const BASE_URL = "https://ipinfo.io/json";
const TOKEN = "2e2feb3f284581";

export default async function getLocation() {
    const result = await fetch(`${BASE_URL}?token=${TOKEN}`).then(response => response.json()).then(data => {
        const { country } = data;
        const phoneNumber = Countries.find(item => {
            if (item.code === country) {
                return item
            }
        })
        return phoneNumber.dial_code;
    })
    return result;
}