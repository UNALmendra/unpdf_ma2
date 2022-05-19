import {Text, TouchableOpacity} from "react-native";
import styles from "../styles/appStyles";

export const DocumentList = ({documents}) =>{
    return (
        documents.map(doc => {
            return (
                <TouchableOpacity key={doc.storage}>
                    <Text style={styles.text}> 📄 {doc.name} - {doc.type}</Text>
                </TouchableOpacity>
            );
        })
    )
}

export default DocumentList;
