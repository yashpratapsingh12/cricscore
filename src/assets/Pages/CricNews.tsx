import { useEffect, useState } from "react";
import { fetchCricketData } from "../utils/fetchData";
import Loader from "../Components/Infinity@1x-1.0s-200px-200px.svg";

type StoryData = {
  id: number;
  hline: string;
  intro: string;
  seoHeadline: string;
};

type Story = {
  story: StoryData;
};

const CricNews = () => {
  const [news, setNews] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCricketData(
          "https://cricbuzz-cricket.p.rapidapi.com/news/v1/player/8733"
        );
        console.log("Fetched Data:", response);

        if (response?.storyList) {
          const filteredNews = response.storyList.filter(
            (item: any) => item.story
          );
          setNews(filteredNews);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        {loading ? (
          <img src={Loader} className="w-16 h-16 mt-80" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {news.map((item) => (
              <div
                className="border-2 border-green-200 rounded-lg"
                key={item.story.id}
              >
                <div>
                  <h3 className="font-bold">{item.story.hline}</h3>
                  <h3 className="font-semibold">{item.story.intro}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CricNews;
