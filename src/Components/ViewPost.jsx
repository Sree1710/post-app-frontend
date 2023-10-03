import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewPost = () => {
    const [postData, setData] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const getdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (Response) => {
                setData(Response.data)
                setIsLoading(false)
            }
        )
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Post</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">User ID</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div class="spinner-border text-danger" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> : <tbody>
                                        {postData.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.userId}</th>
                                                    <td>{value.id}</td>
                                                    <td>{value.title}</td>
                                                    <td>{value.body}</td>
                                                </tr>
                                            }
                                        )}

                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPost