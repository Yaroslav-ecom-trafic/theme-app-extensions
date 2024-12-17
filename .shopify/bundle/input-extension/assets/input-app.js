document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.input-app-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://rouge-outdoors-cd-liz.trycloudflare.com/api/input', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            console.log('Ответ:', data.text);

        } catch (error) {
            console.log('Ошибка:', error);
        }
    });
});