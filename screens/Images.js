import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import { Documents } from './Documents'

// const ALL_DOCUMENTS = gql`
//   query DocumentsUser ($user: String!){
//     documents_user(user: $user) {
//       storage,
//       name,
//       type
//     }
//   }
// `

const ALL_DOCUMENTS = gql`
  query {
    documents_user(user: "1") {
      storage,
      name,
      type
    }
  }
`

export default function Images() {

    const {data, error, loading} = useQuery(ALL_DOCUMENTS)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center', 
        },
        title: {
            marginTop: 20,
            fontSize: 40,
            fontWeight: "bold",
            textAlign : "center"
        },
        image: {
            height: 200,
            width: 300,
        },
    })

    if (error) return <Text style={'color: red'}>{error}</Text>
    return( 
        <>
            <Text style={styles.title}>Imagenes</Text>

            {loading 
                ? <Text>Loading...</Text>
                : <ScrollView><Documents documents={data.documents_user}/></ScrollView>
            }
        </>
    )
}

