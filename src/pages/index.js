import * as React from "react";
import Seo from "../components/seo";
// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <Seo title="Home" />
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Ankit<span className="text-indigo-600"> Maurya</span>
              </h2>
              <h3 className='text-xl md:text-3xl mt-10'>Web Page Under Construction</h3>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default IndexPage
