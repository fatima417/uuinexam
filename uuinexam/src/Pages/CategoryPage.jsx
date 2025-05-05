import {useParams} from  "react-router-dom";

function CategoryPage() {
    const {slug} = useParams();
    return <h1>Valgt kategori: {slug}</h1>
}

export default CategoryPage