import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthorById } from "../services/apiAuthor";
import Spinner from "../ui/Spinner";

function Author() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      setIsLoading(true);
      getAuthorById(Number(authorId)).then((res) => setAuthor(res.data));
      setIsLoading(false);
    },
    [authorId]
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="author-section flex">
      <div className="flex flex-col" style={{ gap: "1rem" }}>
        <h2 className="author-name">{author.name}</h2>
        <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "2rem" }}>
          <p className="author-about">About the author</p>
          <p>
            <span style={{ fontWeight: "600" }}>{author.name}</span>,"Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Nobis liberoipsum
            quia autem ex. Nostrum tenetur quia sit debitis autem
            illo,voluptates omnis officiis pariatur neque. Accusamus ipsam
            harumnumquam eum facere modi quas,"
          </p>

          <p className="book-genre">
            Nationality: <span>{author.nationality}</span>
          </p>
          <p className="book-pages">
            Birthdate: <span>{author?.birthdate?.split("-")[0]}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col align-center image-box">
        <img className="image" src="/author.jpg" alt={author.name} />
      </div>
    </div>
  );
}

export default Author;
