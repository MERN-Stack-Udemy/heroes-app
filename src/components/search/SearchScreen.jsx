import React from 'react'

export const SearchScreen = () => {
    return (
        <div>
            <h1>Serar Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4 > Search Form</h4>
                    <hr />
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="Find your hero"
                            className="form-control"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
