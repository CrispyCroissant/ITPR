import axios from "axios";

async function getRandomImage(): Promise<Record<string, string>> {
  let image: string;
  const isReal = Math.round(Math.random());

  try {
    if (!isReal) {
      const res = await axios.get("https://thispersondoesnotexist.com/image", {
        responseType: "arraybuffer",
      });

      image = Buffer.from(res.data, "binary").toString("base64");
    } else {
      const res = await axios.get("https://api.unsplash.com/photos/random", {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
        params: {
          query: "human face",
        },
      });

      image = res.data.urls.regular;
    }
  } catch (error) {
    throw error;
  }

  return { image };
}

export { getRandomImage };
