import axios from "axios";

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address') as HTMLInputElement;
const API_KEY = '';

type Response = {
    results: { geometry: { location: { lat: number, lng: number } } } [],
    status: 'OK' | 'ZERO_RESULTS'
};

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    axios.get<Response>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${API_KEY}`)
        .then(res => {
            if (res.data.status !== 'OK') {
                throw new Error('Can not get coordinate');
            }
            const coordinate = res.data.results[0]!.geometry.location;
            const map = new google.maps.Map(document.getElementById('map')!, {
                center: coordinate,
                zoom: 16
            });
            new google.maps.Marker({position: coordinate, map: map});
        })
        .catch(
            err => {
                alert(err.message);
                console.log(err);
            }
        )
    ;
});