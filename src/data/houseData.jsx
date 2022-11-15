import { accommodationSheet } from "./accommodation";

const houseData = ({params}) => {
    return accommodationSheet.find(h => h.id === params.id );
};

export default houseData;