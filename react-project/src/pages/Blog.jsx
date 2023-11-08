import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Layout from './../Layout/Layout';
import Loader from './../components/Loader';
import BlogList from './../components/BlogList';
import { postLatest } from '../APIRequest/APIRequest';

const Blog = () => {
  let [list,SetList]=useState(null);

  useEffect(()=>{

      (async ()=>{
        let res= await postLatest();
        SetList(res);
      })()

  },[])
  console.log(list);
  return (
    <>
        <Navbar/>
        <Layout>
        
        {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    </>
  )
}

export default Blog