import React from 'react';
import {Link} from "react-router-dom";
import '../assets/css/style.css';
const BlogList = (props) => {




    return (
        <div>
            <div className="container ">
                <div className="grid ">

                    {
                        props.list.map((item,index)=>{
                            return(
                                <Link key={index}  className="card">
                                    <figure><img src={item['img']} alt="car!"/></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item['title']}</h2>
                                        <p>{item['short']}</p>
                                    </div>
                                </Link>
                            )

                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default BlogList;