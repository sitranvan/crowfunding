import React, { Fragment } from 'react'
import Heading from '../../components/Heading'
import CamFeature from '../../components/Pages/CamFeature'
import CamItem from '../../components/Pages/CamItem'
import GridLayout from '../../layouts/GridLayout'
// import Heading from '../../components/Heading'
// import GridLayout from '../../layouts/GridLayout'
// import CampaignFeature from '../../modules/Home/CampaignFeature'
// import CampaignItem from '../../modules/Home/CampaignItem'

function HomePage() {
    return (
        <Fragment>
            <Heading number={4}>You campaign</Heading>
            <CamFeature />

            <Heading>Popular campaign</Heading>
            <GridLayout>
                {Array(4)
                    .fill(0)
                    .map((item, index) => (
                        <CamItem key={index} />
                    ))}
            </GridLayout>
        </Fragment>
    )
}

export default HomePage
