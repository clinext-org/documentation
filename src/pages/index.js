import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Framework from '@site/src/components/project/framework'
import HomePageHeader from '../components/project/homePageHeader'
import Sample from '../components/project/sample'
import HomepageFeatures2 from '../components/project/homepageFeatures2'
import Pollination from '../components/project/pollination'
import Manifest from '../components/project/manifest'
import Questions from '../components/project/questions'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Node JS framework built on top of Parse Server and tailored for features. It provides a concise, easy to use and scalable template to get the best of features.\n Get ready to change the way you code your server!">
      <HomePageHeader />      
      <main className='pb-16'>        
        <Framework />
        <Sample />
        <Questions />
        <HomepageFeatures2 />        
        <Pollination />  
        <Manifest  align={'left'}/>         
      </main>
    </Layout>
  )
}