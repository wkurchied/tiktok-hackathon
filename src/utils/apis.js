export const fetchVideoContent = () => {
    return fetch('https://many-streets-rule-82-180-147-170.loca.lt/videos/diy')
        .then(response => response.json());
}

export const getHashtagList = () => {
    return fetch("http://127.0.0.1:8000/hashtags")
    .then( response => response.json())
    .then(data => data);
}