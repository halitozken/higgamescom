export const UseFetch = async (number, page) => {
  const url = "https://gamemonetize.com/feed.php?format=0";

  const response = await fetch(`${url}&num=${number}&page=${page}`);
  const games = await response.json();

  return games;
};

export const UseFetchById = async (id) => {
  const url = "https://gamemonetize.com/feed.php?format=0";

  const response = await fetch(`${url}&id=${id}`);
  const games = response.json();

  return games;
};

export const UseFetchByCategory = async (categoryId, number, page) => {
  const url = "https://gamemonetize.com/feed.php?format=0";

  const response = await fetch(
    `${url}&category=${categoryId}&num=${number}&page=${page}`
  );
  const games = response.json();

  return games;
};
