import React, { Fragment } from 'react'
import Heading from '../../components/Heading'
import GridLayout from '../../layouts/GridLayout/GridLayout'
import MainLayout from '../../layouts/MainLayout'
import CampaignFeature from '../../modules/Home/CampaignFeature'
import CampaignItem from '../../modules/Home/CampaignItem'

function HomePage() {
    return (
        <Fragment>
            <Heading number={4}>You campaign</Heading>
            <CampaignFeature />

            <Heading>Popular campaign</Heading>
            <GridLayout>
                {Array(4)
                    .fill(0)
                    .map((item, index) => (
                        <CampaignItem key={index} />
                    ))}
            </GridLayout>
        </Fragment>
    )
}

export default HomePage
