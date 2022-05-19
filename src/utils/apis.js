export const fetchVideoContent = () => {
    return fetch('https://many-streets-rule-82-180-147-170.loca.lt/videos/diy')
        .then(response => response.json());
}