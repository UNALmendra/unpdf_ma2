import { Text, StyleSheet, ScrollView } from 'react-native'
import { useQuery } from '@apollo/client'
import { Images } from './Images'

import { ALL_DOCUMENTS } from '../Documents/graphql-queries'
import { Loading } from '../Loading/Loading'



export default function ImagesScreen() {

    const {data, error, loading} = useQuery(ALL_DOCUMENTS) 

    if (error) return <Text style={{color: 'red'}}>{error.message}</Text>
    return( 
        <>
            {loading 
                ? <Loading></Loading>
                : <ScrollView><Images documents={data.documents_user}/></ScrollView>
            }
        </>
    )
}