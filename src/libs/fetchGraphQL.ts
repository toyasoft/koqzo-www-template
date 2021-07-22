async function fetchGraphQL(text, variables) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_HOST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.NEXT_PUBLIC_AWS_API_KEY,
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
