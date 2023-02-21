import React, { Fragment, useEffect } from 'react'
import Heading from '../../components/Heading'
import CamFeature from '../../components/Pages/CamFeature'
import CamItem from '../../components/Pages/CamItem'
import usePrivateAxios from '../../hooks/usePrivateAxios'
import GridLayout from '../../layouts/GridLayout'

function HomePage() {
    const privateAxios = usePrivateAxios()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await privateAxios.get('/api/campaigns')
                console.log('Home page: ', response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [privateAxios])
    return (
        <Fragment>
            <Heading number={4}>You campaign</Heading>
            <CamFeature />

            <Heading>Popular campaign</Heading>
            <GridLayout col={4} gap={7}>
                <CamItem />
                <CamItem />
                <CamItem />
                <CamItem />
            </GridLayout>
        </Fragment>
    )
}

export default HomePage
