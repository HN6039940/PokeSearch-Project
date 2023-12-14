export const loader = ({ request }) => {
  const url = new URL(request.url).searchParams;
  const query = url.get("q");
  return query;
};
