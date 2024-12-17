import { json } from "@remix-run/node";

export async function loader({ request }) {
    return json({ message: "Ready" });
}

export async function action({ request }) {

    console.log(request);

    return json({ message: "Ready" });
    // try {
    //     const formData = await request.formData();
    //     const input = formData.get('input');

    //     // Здесь ваша логика обработки
    //     const result = `Processed: ${input}`;

    //     return json({
    //         success: true,
    //         result: result
    //     });

    // } catch (error) {
    //     return json({
    //         success: false,
    //         error: error.message
    //     }, { status: 400 });
    // }
}

export default function AdditionalPage() {
    return (
        <p>Input API Endpoint</p>
    );
}