export const fetchVideoContent = (selectedHashtag) => {
    return fetch(`http://127.0.0.1:8000/videos/${selectedHashtag}`)
        .then(response => response.json());
}

export const getHashtagList = () => {
    return fetch("http://127.0.0.1:8000/hashtags")
    .then( response => response.json())
    .then(data => data);
}