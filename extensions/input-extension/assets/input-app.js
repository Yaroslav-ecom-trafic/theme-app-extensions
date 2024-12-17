document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.input-app-form');
    const resultElement = document.querySelector('.input-app-result p');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const response = await fetch('app/input', {
            method: 'POST',
            body: JSON.stringify({ username: "example" })
        });

        // const input = form.querySelector('.input-app-input');
        // const formData = new FormData();
        // formData.append('input', input.value);

        // try {
        //     const response = await fetch('app/input', {
        //         method: 'POST',
        //         body: JSON.stringify({ username: "example" })
        //     });

        //     const data = await response.json();
        //     resultElement.textContent = data.result;
        // } catch (error) {
        //     resultElement.textContent = 'Error: ' + error.message;
        // }
    });
});