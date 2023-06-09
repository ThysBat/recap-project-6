import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  dbConnect();

  if (request.method === "GET") {
    const locations = await Location.find();

    response.status(200).json(locations);
    return;
  }
}
