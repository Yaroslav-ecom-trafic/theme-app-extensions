import { json } from "@remix-run/node";

export async function loader() {
    return json({ text: "привет" });
}

export async function action({ request }) {

    console.log("request", request);
    if (request.method === "POST") {
        const payload = await request.json();

        return json({ text: `перевернутая строка: ${stringReverse(payload.text)}` });
    }
    return json({ error: "Метод не поддерживается" }, { status: 405 });
}

function stringReverse(str) {
    return str.split('').reverse().join('');
}