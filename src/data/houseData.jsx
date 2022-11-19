import { accommodationSheet } from "./accommodation";

const houseData = ({ params }) => {
  const house = accommodationSheet.find((h) => h.id === params.id);

  //   Déclenchement d'une erreur si house n'est pas trouvé
  if (!house) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return house;
};

export default houseData;
