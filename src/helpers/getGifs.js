export const getGifs = async (categoria) => {
    const apikey = "6pLfEjnR18zDQ74fEZmBuvMgkUDqphyE";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${categoria}&limit=10`;

    //En este punto resp es un objeto ReadableStream y en su body trae ese flujo de datos
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data);

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    // console.log(gifs);
    return gifs;
};