function Author() {
  const author = {
    name: "James Clear",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis liberoipsum quia autem ex. Nostrum tenetur quia sit debitis autem illo,voluptates omnis officiis pariatur neque. Accusamus ipsam harumnumquam eum facere modi quas,",
  };
  return (
    <div className="author-section flex">
      <div className="flex flex-col" style={{ gap: "1rem" }}>
        <h2 className="author-name">{author.name}</h2>
        <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "2rem" }}>
          <p className="author-about">About the author</p>
          <p>
            <span style={{ fontWeight: "600" }}>{author.name}</span>,{" "}
            {author.about}
          </p>
        </div>

        <div>
          <h3 style={{ marginTop: "2rem" }}>Books By {author.name}</h3>
        </div>
      </div>

      <div className="flex flex-col align-center image-box">
        <img className="image" src="/author.jpg" alt={author.name} />
      </div>
    </div>
  );
}

export default Author;
