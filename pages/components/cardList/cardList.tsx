import { List, ListItem } from "@mui/material";
import RecipeReviewCard from "../card/card";
import { useEffect, useState } from "react";
import { Article } from "../../types/article";
import CardSmanu from "../card/card_smanu";

export default function CardList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getArticles() {
    const response = await fetch("/api/articles/list");
    const articles = await response.json();
    setArticles(articles);
  }

  useEffect(() => {
    const fetchArticles = async () => {
      await getArticles();
      setIsLoading(false)
    };
    fetchArticles();
  }, []); 

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "72px" }}
    >
      <List sx={{ width: "100%", maxWidth: 720, bgcolor: "background.paper" }}>
        {!isLoading && articles.map((a) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <CardSmanu
                  expand={false}
                  title={a.title}
                  image={"/china.jpg"} 
                  content={a.content}                ></CardSmanu>
              </ListItem>
            </>
          );
        })}
      </List>
    </div>
  );
}
